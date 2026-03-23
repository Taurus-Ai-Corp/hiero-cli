import type {
  Key,
  TopicCreateTransaction,
  TopicMessageSubmitTransaction,
  TopicUpdateTransaction,
} from '@hashgraph/sdk';

export interface TopicCreateResult {
  transaction: TopicCreateTransaction;
}

export interface MessageSubmitResult {
  transaction: TopicMessageSubmitTransaction;
  sequenceNumber?: number;
}

// Parameter types for topic operations
export interface CreateTopicParams {
  memo?: string;
  adminKey?: Key;
  submitKey?: Key;
}

export interface SubmitMessageParams {
  topicId: string;
  message: string;
}

export interface UpdateTopicParams {
  topicId: string;
  memo?: string | null;
  adminKey?: Key;
  submitKey?: Key | null;
  autoRenewAccountId?: string | null;
  autoRenewPeriod?: number;
  expirationTime?: Date;
}

export interface TopicUpdateResult {
  transaction: TopicUpdateTransaction;
}
