/* tslint:disable */

/* A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the &#x60;date-time&#x60; format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = any;

export interface Query {
  allChats?: Chat[] | null; 
  allMessages?: Message[] | null; 
  allMembers?: Member[] | null; 
  Chat?: Chat | null; 
}

export interface Chat {
  createdAt: DateTime; 
  id: string; 
  members: Member[]; 
  messages: Message[]; 
}

export interface Member {
  chats: Chat[]; 
  createdAt: DateTime; 
  id: string; 
  messages: Message[]; 
  name: string; 
  title?: string | null; 
}

export interface Message {
  author?: Member | null; 
  chat?: Chat | null; 
  content: string; 
  createdAt: DateTime; 
  id: string; 
}

export interface Mutation {
  createChat?: Chat | null; 
  deleteChat?: Chat | null; 
  createMessage?: Message | null; 
}

export interface Subscription {
  Message?: MessageSubscriptionPayload | null; 
  Chat?: ChatSubscriptionPayload | null; 
}

export interface MessageSubscriptionPayload {
  node?: Message | null; 
}

export interface ChatSubscriptionPayload {
  node?: Chat | null; 
  previousValues?: ChatPreviousValues | null; 
}

export interface ChatPreviousValues {
  id: string; 
}

export interface ChatFilter {
  id?: string | null; 
  id_in: string[]; 
  members_some?: MemberFilter | null; 
}

export interface MemberFilter {
  id?: string | null; 
  id_not?: string | null; 
  name_contains?: string | null; 
}

export interface MessageFilter {
  chat?: ChatFilter | null; 
}

export interface MessageSubscriptionFilter {
  AND: MessageSubscriptionFilter[]; 
  mutation_in: _ModelMutationType[]; 
  node?: MessageSubscriptionFilterNode | null; 
}

export interface MessageSubscriptionFilterNode {
  chat?: ChatFilter | null; 
}

export interface ChatSubscriptionFilter {
  AND: ChatSubscriptionFilter[]; 
  mutation_in: _ModelMutationType[]; 
  node?: ChatSubscriptionFilterNode | null; 
}

export interface ChatSubscriptionFilterNode {
  members_some?: MemberFilter | null; 
}
export interface AllChatsQueryArgs {
  filter?: ChatFilter | null; 
  orderBy?: OrderBy | null; 
}
export interface AllMessagesQueryArgs {
  filter?: MessageFilter | null; 
}
export interface AllMembersQueryArgs {
  filter?: MemberFilter | null; 
  first?: number | null; 
}
export interface ChatQueryArgs {
  filter?: ChatFilter | null; 
  id?: string | null; 
}
export interface MembersChatArgs {
  filter?: MemberFilter | null; 
}
export interface MessagesChatArgs {
  last?: number | null; 
}
export interface ChatsMemberArgs {
  filter?: ChatFilter | null; 
  first?: number | null; 
}
export interface CreateChatMutationArgs {
  membersIds: string[]; 
}
export interface DeleteChatMutationArgs {
  id: string; 
}
export interface CreateMessageMutationArgs {
  authorId?: string | null; 
  chatId: string; 
  content: string; 
}
export interface MessageSubscriptionArgs {
  filter?: MessageSubscriptionFilter | null; 
}
export interface ChatSubscriptionArgs {
  filter?: ChatSubscriptionFilter | null; 
}

export type OrderBy = "createdAt_DESC";


export type _ModelMutationType = "CREATED" | "UPDATED" | "DELETED";

export namespace AllMembers {
  export type Variables = {
  }

  export type Query = {
    allMembers?: AllMembers[] | null; 
  } 

  export type AllMembers = {
    name: string; 
  } 
}
