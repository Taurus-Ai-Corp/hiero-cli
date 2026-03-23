/**
 * Interface for Account-related operations
 * All account services must implement this interface
 */
export interface AccountService {
  createAccount(params: CreateAccountParams): AccountCreateResult;
  updateAccount(params: UpdateAccountParams): AccountUpdateResult;
  getAccountInfo(accountId: string): AccountInfoQuery;
}

export interface UpdateAccountParams {
  accountId: string;
  key?: string;
  memo?: string;
  maxAutoAssociations?: number;
  stakedAccountId?: string;
  stakedNodeId?: number;
  declineStakingReward?: boolean;
  autoRenewPeriod?: number;
  receiverSignatureRequired?: boolean;
  expirationTime?: Date;
}

export interface AccountUpdateResult {
  transaction: AccountUpdateTransaction;
}

export interface AccountCreateResult {
  transaction: AccountCreateTransaction;
  publicKey: string;
}

// Parameter types for account operations
export interface CreateAccountParams {
  balanceRaw: bigint;
  maxAutoAssociations?: number;
  publicKey: string;
}

// Import Hedera SDK types
import type {
  AccountCreateTransaction,
  AccountInfoQuery,
  AccountUpdateTransaction,
} from '@hashgraph/sdk';
