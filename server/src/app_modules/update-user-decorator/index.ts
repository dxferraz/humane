import {
    createParamDecorator,
    ExecutionContext,
    ForbiddenException,
} from '@nestjs/common';
import { GqlContextType } from '@nestjs/graphql';
import { UserUpdateInput } from 'src/user/models/user-update.input';
import {
    dateValidation,
    minMaxValidation,
    passwordValidation,
} from 'src/user/validators/regex';

/**
 * Extract request.user property (which is written by passport).
 */
export const UpdateUserValidation = createParamDecorator(
    (_: unknown, context: ExecutionContext) => {
        let request;
        if (context.getType() === 'http') {
            throw new Error('Not implemented');
        } else if (context.getType<GqlContextType>() === 'graphql') {
            // validate UserUpdateInput
            const data: UserUpdateInput = context.getArgByIndex(1).data;

            if (data.name) {
                const validator = minMaxValidation('name', 3);
                if (!validator.pattern.test(data.name)) {
                    throw new ForbiddenException(validator.message);
                }
            }

            if (data.phone) {
                const validator = minMaxValidation('phone number', 4, 30);
                if (!validator.pattern.test(data.phone)) {
                    throw new ForbiddenException(validator.message);
                }
            }

            if (data.birthdate && !dateValidation.pattern.test(data.birthdate)) {
                throw new ForbiddenException(dateValidation.message);
            }

            if (data.password && !passwordValidation.pattern.test(data.password)) {
                throw new ForbiddenException(passwordValidation.message);
            }
        } else if (context.getType() === 'rpc') {
            throw new Error('Not implemented');
        }

        return request?.user;
    },
);
