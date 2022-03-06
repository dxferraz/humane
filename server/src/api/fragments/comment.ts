import { userFields } from './user';

export const bio = /* GraphQL */ `
    fragment commentFields on Comment {
        id: commentId
        createdAt
        updatedAt
        body
        author {
            ...userFields
            following: isFollowing
        }
    }
    ${userFields}
`;
