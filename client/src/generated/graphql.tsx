import gql from 'graphql-tag'
import * as React from 'react'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactComponents from '@apollo/react-components'
import * as ApolloReactHoc from '@apollo/react-hoc'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Cursor: any
  Datetime: any
}

export type Comment = Node & {
  __typename?: 'Comment'
  nodeId: Scalars['ID']
  id: Scalars['Int']
  comment: Scalars['String']
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  userId?: Maybe<Scalars['Int']>
  userName: Scalars['String']
  postId?: Maybe<Scalars['Int']>
  userByUserId?: Maybe<User>
  postByPostId?: Maybe<Post>
}

export type CommentCondition = {
  id?: Maybe<Scalars['Int']>
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  userId?: Maybe<Scalars['Int']>
  userName?: Maybe<Scalars['String']>
  postId?: Maybe<Scalars['Int']>
}

export type CommentInput = {
  id?: Maybe<Scalars['Int']>
  comment: Scalars['String']
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  userId?: Maybe<Scalars['Int']>
  userName: Scalars['String']
  postId?: Maybe<Scalars['Int']>
}

export type CommentPatch = {
  id?: Maybe<Scalars['Int']>
  comment?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  userId?: Maybe<Scalars['Int']>
  userName?: Maybe<Scalars['String']>
  postId?: Maybe<Scalars['Int']>
}

export type CommentsConnection = {
  __typename?: 'CommentsConnection'
  nodes: Array<Maybe<Comment>>
  edges: Array<CommentsEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CommentsEdge = {
  __typename?: 'CommentsEdge'
  cursor?: Maybe<Scalars['Cursor']>
  node?: Maybe<Comment>
}

export enum CommentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CommentAsc = 'COMMENT_ASC',
  CommentDesc = 'COMMENT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  UserNameAsc = 'USER_NAME_ASC',
  UserNameDesc = 'USER_NAME_DESC',
  PostIdAsc = 'POST_ID_ASC',
  PostIdDesc = 'POST_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export type CreateCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>
  comment: CommentInput
}

export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload'
  clientMutationId?: Maybe<Scalars['String']>
  comment?: Maybe<Comment>
  query?: Maybe<Query>
  userByUserId?: Maybe<User>
  postByPostId?: Maybe<Post>
  commentEdge?: Maybe<CommentsEdge>
}

export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: Maybe<Array<CommentsOrderBy>>
}

export type CreatePostInput = {
  clientMutationId?: Maybe<Scalars['String']>
  post: PostInput
}

export type CreatePostPayload = {
  __typename?: 'CreatePostPayload'
  clientMutationId?: Maybe<Scalars['String']>
  post?: Maybe<Post>
  query?: Maybe<Query>
  userByUserId?: Maybe<User>
  postEdge?: Maybe<PostsEdge>
}

export type CreatePostPayloadPostEdgeArgs = {
  orderBy?: Maybe<Array<PostsOrderBy>>
}

export type CreateUserInput = {
  clientMutationId?: Maybe<Scalars['String']>
  user: UserInput
}

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload'
  clientMutationId?: Maybe<Scalars['String']>
  user?: Maybe<User>
  query?: Maybe<Query>
  userEdge?: Maybe<UsersEdge>
}

export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
}

export type DeleteCommentByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>
  id: Scalars['Int']
}

export type DeleteCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>
  nodeId: Scalars['ID']
}

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload'
  clientMutationId?: Maybe<Scalars['String']>
  comment?: Maybe<Comment>
  deletedCommentId?: Maybe<Scalars['ID']>
  query?: Maybe<Query>
  userByUserId?: Maybe<User>
  postByPostId?: Maybe<Post>
  commentEdge?: Maybe<CommentsEdge>
}

export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: Maybe<Array<CommentsOrderBy>>
}

export type DeletePostByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>
  id: Scalars['Int']
}

export type DeletePostInput = {
  clientMutationId?: Maybe<Scalars['String']>
  nodeId: Scalars['ID']
}

export type DeletePostPayload = {
  __typename?: 'DeletePostPayload'
  clientMutationId?: Maybe<Scalars['String']>
  post?: Maybe<Post>
  deletedPostId?: Maybe<Scalars['ID']>
  query?: Maybe<Query>
  userByUserId?: Maybe<User>
  postEdge?: Maybe<PostsEdge>
}

export type DeletePostPayloadPostEdgeArgs = {
  orderBy?: Maybe<Array<PostsOrderBy>>
}

export type DeleteUserByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>
  id: Scalars['Int']
}

export type DeleteUserInput = {
  clientMutationId?: Maybe<Scalars['String']>
  nodeId: Scalars['ID']
}

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload'
  clientMutationId?: Maybe<Scalars['String']>
  user?: Maybe<User>
  deletedUserId?: Maybe<Scalars['ID']>
  query?: Maybe<Query>
  userEdge?: Maybe<UsersEdge>
}

export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
}

export type KnexMigration = Node & {
  __typename?: 'KnexMigration'
  nodeId: Scalars['ID']
  id: Scalars['Int']
  name?: Maybe<Scalars['String']>
  batch?: Maybe<Scalars['Int']>
  migrationTime?: Maybe<Scalars['Datetime']>
}

export type KnexMigrationCondition = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  batch?: Maybe<Scalars['Int']>
  migrationTime?: Maybe<Scalars['Datetime']>
}

export type KnexMigrationsConnection = {
  __typename?: 'KnexMigrationsConnection'
  nodes: Array<Maybe<KnexMigration>>
  edges: Array<KnexMigrationsEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type KnexMigrationsEdge = {
  __typename?: 'KnexMigrationsEdge'
  cursor?: Maybe<Scalars['Cursor']>
  node?: Maybe<KnexMigration>
}

export type KnexMigrationsLock = Node & {
  __typename?: 'KnexMigrationsLock'
  nodeId: Scalars['ID']
  index: Scalars['Int']
  isLocked?: Maybe<Scalars['Int']>
}

export type KnexMigrationsLockCondition = {
  index?: Maybe<Scalars['Int']>
  isLocked?: Maybe<Scalars['Int']>
}

export type KnexMigrationsLocksConnection = {
  __typename?: 'KnexMigrationsLocksConnection'
  nodes: Array<Maybe<KnexMigrationsLock>>
  edges: Array<KnexMigrationsLocksEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type KnexMigrationsLocksEdge = {
  __typename?: 'KnexMigrationsLocksEdge'
  cursor?: Maybe<Scalars['Cursor']>
  node?: Maybe<KnexMigrationsLock>
}

export enum KnexMigrationsLocksOrderBy {
  Natural = 'NATURAL',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IsLockedAsc = 'IS_LOCKED_ASC',
  IsLockedDesc = 'IS_LOCKED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export enum KnexMigrationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  BatchAsc = 'BATCH_ASC',
  BatchDesc = 'BATCH_DESC',
  MigrationTimeAsc = 'MIGRATION_TIME_ASC',
  MigrationTimeDesc = 'MIGRATION_TIME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export type Mutation = {
  __typename?: 'Mutation'
  createComment?: Maybe<CreateCommentPayload>
  createPost?: Maybe<CreatePostPayload>
  createUser?: Maybe<CreateUserPayload>
  updateComment?: Maybe<UpdateCommentPayload>
  updateCommentById?: Maybe<UpdateCommentPayload>
  updatePost?: Maybe<UpdatePostPayload>
  updatePostById?: Maybe<UpdatePostPayload>
  updateUser?: Maybe<UpdateUserPayload>
  updateUserById?: Maybe<UpdateUserPayload>
  deleteComment?: Maybe<DeleteCommentPayload>
  deleteCommentById?: Maybe<DeleteCommentPayload>
  deletePost?: Maybe<DeletePostPayload>
  deletePostById?: Maybe<DeletePostPayload>
  deleteUser?: Maybe<DeleteUserPayload>
  deleteUserById?: Maybe<DeleteUserPayload>
}

export type MutationCreateCommentArgs = {
  input: CreateCommentInput
}

export type MutationCreatePostArgs = {
  input: CreatePostInput
}

export type MutationCreateUserArgs = {
  input: CreateUserInput
}

export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput
}

export type MutationUpdateCommentByIdArgs = {
  input: UpdateCommentByIdInput
}

export type MutationUpdatePostArgs = {
  input: UpdatePostInput
}

export type MutationUpdatePostByIdArgs = {
  input: UpdatePostByIdInput
}

export type MutationUpdateUserArgs = {
  input: UpdateUserInput
}

export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput
}

export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput
}

export type MutationDeleteCommentByIdArgs = {
  input: DeleteCommentByIdInput
}

export type MutationDeletePostArgs = {
  input: DeletePostInput
}

export type MutationDeletePostByIdArgs = {
  input: DeletePostByIdInput
}

export type MutationDeleteUserArgs = {
  input: DeleteUserInput
}

export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput
}

export type Node = {
  nodeId: Scalars['ID']
}

export type PageInfo = {
  __typename?: 'PageInfo'
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['Cursor']>
  endCursor?: Maybe<Scalars['Cursor']>
}

export type Post = Node & {
  __typename?: 'Post'
  nodeId: Scalars['ID']
  id: Scalars['Int']
  title: Scalars['String']
  body: Scalars['String']
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  userId?: Maybe<Scalars['Int']>
  userByUserId?: Maybe<User>
  commentsByPostId: CommentsConnection
}

export type PostCommentsByPostIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CommentsOrderBy>>
  condition?: Maybe<CommentCondition>
}

export type PostCondition = {
  id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  userId?: Maybe<Scalars['Int']>
}

export type PostInput = {
  id?: Maybe<Scalars['Int']>
  title: Scalars['String']
  body: Scalars['String']
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  userId?: Maybe<Scalars['Int']>
}

export type PostPatch = {
  id?: Maybe<Scalars['Int']>
  title?: Maybe<Scalars['String']>
  body?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  userId?: Maybe<Scalars['Int']>
}

export type PostsConnection = {
  __typename?: 'PostsConnection'
  nodes: Array<Maybe<Post>>
  edges: Array<PostsEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type PostsEdge = {
  __typename?: 'PostsEdge'
  cursor?: Maybe<Scalars['Cursor']>
  node?: Maybe<Post>
}

export enum PostsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export type Query = Node & {
  __typename?: 'Query'
  query: Query
  nodeId: Scalars['ID']
  node?: Maybe<Node>
  allComments?: Maybe<CommentsConnection>
  allKnexMigrations?: Maybe<KnexMigrationsConnection>
  allKnexMigrationsLocks?: Maybe<KnexMigrationsLocksConnection>
  allPosts?: Maybe<PostsConnection>
  allUsers?: Maybe<UsersConnection>
  commentById?: Maybe<Comment>
  knexMigrationById?: Maybe<KnexMigration>
  knexMigrationsLockByIndex?: Maybe<KnexMigrationsLock>
  postById?: Maybe<Post>
  userById?: Maybe<User>
  comment?: Maybe<Comment>
  knexMigration?: Maybe<KnexMigration>
  knexMigrationsLock?: Maybe<KnexMigrationsLock>
  post?: Maybe<Post>
  user?: Maybe<User>
}

export type QueryNodeArgs = {
  nodeId: Scalars['ID']
}

export type QueryAllCommentsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CommentsOrderBy>>
  condition?: Maybe<CommentCondition>
}

export type QueryAllKnexMigrationsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>
  condition?: Maybe<KnexMigrationCondition>
}

export type QueryAllKnexMigrationsLocksArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>
  condition?: Maybe<KnexMigrationsLockCondition>
}

export type QueryAllPostsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<PostsOrderBy>>
  condition?: Maybe<PostCondition>
}

export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<UsersOrderBy>>
  condition?: Maybe<UserCondition>
}

export type QueryCommentByIdArgs = {
  id: Scalars['Int']
}

export type QueryKnexMigrationByIdArgs = {
  id: Scalars['Int']
}

export type QueryKnexMigrationsLockByIndexArgs = {
  index: Scalars['Int']
}

export type QueryPostByIdArgs = {
  id: Scalars['Int']
}

export type QueryUserByIdArgs = {
  id: Scalars['Int']
}

export type QueryCommentArgs = {
  nodeId: Scalars['ID']
}

export type QueryKnexMigrationArgs = {
  nodeId: Scalars['ID']
}

export type QueryKnexMigrationsLockArgs = {
  nodeId: Scalars['ID']
}

export type QueryPostArgs = {
  nodeId: Scalars['ID']
}

export type QueryUserArgs = {
  nodeId: Scalars['ID']
}

export type UpdateCommentByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>
  commentPatch: CommentPatch
  id: Scalars['Int']
}

export type UpdateCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>
  nodeId: Scalars['ID']
  commentPatch: CommentPatch
}

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload'
  clientMutationId?: Maybe<Scalars['String']>
  comment?: Maybe<Comment>
  query?: Maybe<Query>
  userByUserId?: Maybe<User>
  postByPostId?: Maybe<Post>
  commentEdge?: Maybe<CommentsEdge>
}

export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: Maybe<Array<CommentsOrderBy>>
}

export type UpdatePostByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>
  postPatch: PostPatch
  id: Scalars['Int']
}

export type UpdatePostInput = {
  clientMutationId?: Maybe<Scalars['String']>
  nodeId: Scalars['ID']
  postPatch: PostPatch
}

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload'
  clientMutationId?: Maybe<Scalars['String']>
  post?: Maybe<Post>
  query?: Maybe<Query>
  userByUserId?: Maybe<User>
  postEdge?: Maybe<PostsEdge>
}

export type UpdatePostPayloadPostEdgeArgs = {
  orderBy?: Maybe<Array<PostsOrderBy>>
}

export type UpdateUserByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>
  userPatch: UserPatch
  id: Scalars['Int']
}

export type UpdateUserInput = {
  clientMutationId?: Maybe<Scalars['String']>
  nodeId: Scalars['ID']
  userPatch: UserPatch
}

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload'
  clientMutationId?: Maybe<Scalars['String']>
  user?: Maybe<User>
  query?: Maybe<Query>
  userEdge?: Maybe<UsersEdge>
}

export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
}

export type User = Node & {
  __typename?: 'User'
  nodeId: Scalars['ID']
  id: Scalars['Int']
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  accountVerified: Scalars['Boolean']
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
  postsByUserId: PostsConnection
  commentsByUserId: CommentsConnection
}

export type UserPostsByUserIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<PostsOrderBy>>
  condition?: Maybe<PostCondition>
}

export type UserCommentsByUserIdArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['Cursor']>
  after?: Maybe<Scalars['Cursor']>
  orderBy?: Maybe<Array<CommentsOrderBy>>
  condition?: Maybe<CommentCondition>
}

export type UserCondition = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  accountVerified?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
}

export type UserInput = {
  id?: Maybe<Scalars['Int']>
  name: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  accountVerified?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
}

export type UserPatch = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  accountVerified?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Datetime']>
  updatedAt?: Maybe<Scalars['Datetime']>
}

export type UsersConnection = {
  __typename?: 'UsersConnection'
  nodes: Array<Maybe<User>>
  edges: Array<UsersEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type UsersEdge = {
  __typename?: 'UsersEdge'
  cursor?: Maybe<Scalars['Cursor']>
  node?: Maybe<User>
}

export enum UsersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  AccountVerifiedAsc = 'ACCOUNT_VERIFIED_ASC',
  AccountVerifiedDesc = 'ACCOUNT_VERIFIED_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export type GetUsersQueryVariables = {}

export type GetUsersQuery = { __typename?: 'Query' } & {
  allUsers: Maybe<
    { __typename?: 'UsersConnection' } & {
      nodes: Array<
        Maybe<
          { __typename?: 'User' } & Pick<
            User,
            'email' | 'id' | 'name' | 'createdAt'
          >
        >
      >
    }
  >
}

export const GetUsersDocument = gql`
  query getUsers {
    allUsers {
      nodes {
        email
        id
        name
        createdAt
      }
    }
  }
`
export type GetUsersComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
  'query'
>

export const GetUsersComponent = (props: GetUsersComponentProps) => (
  <ApolloReactComponents.Query<GetUsersQuery, GetUsersQueryVariables>
    query={GetUsersDocument}
    {...props}
  />
)

export type GetUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetUsersQuery,
  GetUsersQueryVariables
> &
  TChildProps
export function withGetUsers<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetUsersQuery,
    GetUsersQueryVariables,
    GetUsersProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetUsersQuery,
    GetUsersQueryVariables,
    GetUsersProps<TChildProps>
  >(GetUsersDocument, {
    alias: 'getUsers',
    ...operationOptions,
  })
}

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions
  )
}
export function useGetUsersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions
  )
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>
