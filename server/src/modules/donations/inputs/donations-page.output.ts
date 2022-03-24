import { Field, ObjectType } from '@nestjs/graphql';
import { Donation } from '../models/donation.model';
import { Edge as RelayEdge, PageInfo as RelayPageInfo } from 'graphql-relay';

@ObjectType({ isAbstract: true })
class PageInfo implements RelayPageInfo {
    @Field(() => String, { nullable: true })
    startCursor: string;

    @Field(() => String, { nullable: true })
    endCursor: string;

    @Field(() => Boolean, { nullable: false })
    hasPreviousPage: boolean;

    @Field(() => Boolean, { nullable: false })
    hasNextPage: boolean;
}

@ObjectType({ isAbstract: true })
abstract class Edge<GraphQLObject> implements RelayEdge<GraphQLObject> {
    @Field(() => Donation, { nullable: false })
    node: GraphQLObject;

    @Field(() => String, { nullable: false })
    cursor: string;
}

@ObjectType()
export class Page {
    @Field(() => [Edge], { nullable: false })
    edges: Array<RelayEdge<Donation[]>>;

    @Field(() => PageInfo, { nullable: false })
    pageInfo: PageInfo;
}
