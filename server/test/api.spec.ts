import { Test } from '@nestjs/testing';
import { GraphQLClient } from 'graphql-request';
import { createSpyObj } from 'jest-createspyobj';
import request from 'supertest';

import { AppModule } from '../src/app.module';
import { configureApp, createApp } from '../src/main';
import { Await } from '../src/core/types';

let app: Await<ReturnType<typeof createApp>>;
let server: any;

let graphQLClient: jest.Mocked<GraphQLClient>;

const authToken = (() => {
    let token: string;
    return async () => {
        if (token === undefined) {
            const credentials = { email: 'root@conduit.com', password: '123' };
            const response = await request(server)
                .post('/api/users/login')
                .set('Content-Type', 'application/json')
                .send({ user: credentials })
                .then(response => response.body);
            token = response.data.user.token;
        }
        return token;
    };
})();

beforeAll(async () => {
    graphQLClient = createSpyObj(GraphQLClient);
    const testingModule = await Test.createTestingModule({
        imports: [AppModule],
    })
        .overrideProvider('GraphQLClient')
        .useValue(graphQLClient)
        .compile();
    app = testingModule.createNestApplication();
    await configureApp(app);
    app.useLogger(false);

    graphQLClient = app.get('GraphQLClient');
    graphQLClient.request.mockImplementation(async function (query, variables) {
        const [headerName, headerValue] = this._header ? this._header : [];
        return await request(server)
            .post('/graphql')
            .set('Content-Type', 'application/json')
            .set(
                headerName
                    ? {
                          [headerName]: headerValue,
                      }
                    : {},
            )
            .send({ query, variables })
            .then(response => response.body);
    });
    graphQLClient.setHeader.mockImplementation(function (name, value) {
        this._header = [name, value];
        return this;
    });

    server = app.getHttpServer();
    await app.init();
});

afterAll(async () => {
    await app.close();
});

it('api smoke', () => {
    expect(app).toBeTruthy();
});

describe('User login', () => {
    it('POST /users/login', async () => {
        const token = await authToken();
        expect(token).toBeTruthy();
    });
});

describe('Current User', () => {
    it('GET /user', async () => {
        const token = await authToken();
        const response = await request(server)
            .get('/api/user')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Token ${token}`)
            .then(r => r.body.data);
        expect(response).toEqual({
            user: expect.objectContaining({
                username: 'root',
                email: 'root@conduit.com',
            }),
        });
    });
});

describe('Registration POST /api/users', () => {
    it('invalid values empty', async () => {
        const response = await request(server)
            .post('/api/users')
            .set('Content-Type', 'application/json')
            .send({ user: { email: '', username: '', password: '' } })
            .then(r => r);
        expect(response.body).toBeTruthy();
        expect(response.status).toBeGreaterThanOrEqual(400);
    });
    it('valid request', async () => {
        const randomName = `r${Math.random().toString(36).slice(-5)}`;
        const userData = {
            email: `${randomName}@toastable.net`,
            username: randomName,
            password: '123',
        };
        const response = await request(server)
            .post('/api/users')
            .set('Content-Type', 'application/json')
            .send({ user: userData })
            .then(r => r);

        expect(response.status).toEqual(201);
        expect(response.body.data).toEqual({
            user: expect.objectContaining({
                email: expect.stringContaining('@toastable.net'),
                username: randomName,
                bio: null,
                image: null,
                token: expect.any(String),
            }),
        });
    });
});

describe('Get user profile by name', () => {
    it('root', async () => {
        const response = await request(server)
            .get('/api/profiles/root')
            .set('Content-Type', 'application/json')
            .send()
            .then(r => r.body.data);
        expect(response.profile.username).toEqual('root');
    });
});
