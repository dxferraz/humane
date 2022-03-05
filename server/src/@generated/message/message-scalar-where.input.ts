import { Field, InputType } from '@nestjs/graphql';

import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MessageScalarWhereInput {
    @Field(() => [MessageScalarWhereInput], { nullable: true })
    AND?: Array<MessageScalarWhereInput>;

    @Field(() => [MessageScalarWhereInput], { nullable: true })
    OR?: Array<MessageScalarWhereInput>;

    @Field(() => [MessageScalarWhereInput], { nullable: true })
    NOT?: Array<MessageScalarWhereInput>;

    @Field(() => IntFilter, { nullable: true })
    id?: IntFilter;

    @Field(() => StringFilter, { nullable: true })
    message?: StringFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    timeStamp?: DateTimeFilter;

    @Field(() => IntFilter, { nullable: true })
    authorId?: IntFilter;

    @Field(() => IntFilter, { nullable: true })
    chatRoomId?: IntFilter;
}
