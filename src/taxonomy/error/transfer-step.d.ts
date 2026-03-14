/**
 * Union type representing TransferStepTaxonomy in the DOMSpec ecosystem.
 * Defines steps in data transfer processes for @dndhub/error.
 *
 * - 'initialization': Setting up the transfer process.
 *   Identifiers: lowercase: 'initialization', camelCase: 'initStep', snake_case: 'init_step', ALL_CAP: 'INITIALIZATION', cache key: 'step:initialization:errId'.
 *   Model Identifier Format: 'init-step-{timestamp}'.
 *   Example Usage: Initializing API requests in DomsError.ts.
 *
 * - 'validation': Validating data or process requirements.
 *   Identifiers: lowercase: 'validation', camelCase: 'validationStep', snake_case: 'validation_step', ALL_CAP: 'VALIDATION', cache key: 'step:validation:errId'.
 *   Model Identifier Format: 'validation-step-{timestamp}'.
 *   Example Usage: Form validation in Trakfox forms.
 *
 * - 'transfer': Actual data or resource transfer.
 *   Identifiers: lowercase: 'transfer', camelCase: 'transferStep', snake_case: 'transfer_step', ALL_CAP: 'TRANSFER', cache key: 'step:transfer:errId'.
 *   Model Identifier Format: 'transfer-step-{timestamp}'.
 *   Example Usage: API data transfer in FetchrRequest.
 *
 * - 'preparation': Pre-transfer setup.
 *   Identifiers: lowercase: 'preparation', camelCase: 'prepStep', snake_case: 'prep_step', ALL_CAP: 'PREPARATION', cache key: 'step:preparation:errId'.
 *   Model Identifier Format: 'prep-step-{timestamp}'.
 *   Example Usage: Setting up headers for API calls.
 *
 * - 'execution': Active transfer execution.
 *   Identifiers: lowercase: 'execution', camelCase: 'execStep', snake_case: 'exec_step', ALL_CAP: 'EXECUTION', cache key: 'step:execution:errId'.
 *   Model Identifier Format: 'exec-step-{timestamp}'.
 *   Example Usage: Running transfer logic in server.
 *
 * - 'completion': Successful transfer completion.
 *   Identifiers: lowercase: 'completion', camelCase: 'completeStep', snake_case: 'complete_step', ALL_CAP: 'COMPLETION', cache key: 'step:completion:errId'.
 *   Model Identifier Format: 'complete-step-{timestamp}'.
 *   Example Usage: Logging successful transfers.
 *
 * - 'rollback': Failure reversal steps.
 *   Identifiers: lowercase: 'rollback', camelCase: 'rollbackStep', snake_case: 'rollback_step', ALL_CAP: 'ROLLBACK', cache key: 'step:rollback:errId'.
 *   Model Identifier Format: 'rollback-step-{timestamp}'.
 *   Example Usage: Reverting failed transactions.
 *
 * - 'retry': Automatic retry attempts.
 *   Identifiers: lowercase: 'retry', camelCase: 'retryStep', snake_case: 'retry_step', ALL_CAP: 'RETRY', cache key: 'step:retry:errId'.
 *   Model Identifier Format: 'retry-step-{timestamp}'.
 *   Example Usage: Retrying failed API calls.
 *
 * - 'notification': Post-transfer notifications.
 *   Identifiers: lowercase: 'notification', camelCase: 'notifyStep', snake_case: 'notify_step', ALL_CAP: 'NOTIFICATION', cache key: 'step:notification:errId'.
 *   Model Identifier Format: 'notify-step-{timestamp}'.
 *   Example Usage: Sending user notifications.
 *
 * - 'audit': Logging or verification post-transfer.
 *   Identifiers: lowercase: 'audit', camelCase: 'auditStep', snake_case: 'audit_step', ALL_CAP: 'AUDIT', cache key: 'step:audit:errId'.
 *   Model Identifier Format: 'audit-step-{timestamp}'.
 *   Example Usage: Audit logs for compliance.
 */
export type TransferStepTaxonomy = CoreTransferStep | CustomTransferStep;
export type CoreTransferStep = 'initialization' | 'validation' | 'transfer' | 'preparation' | 'execution' | 'completion' | 'rollback' | 'retry' | 'notification' | 'audit';
export type CustomTransferStep = string & { __step?: 'CustomTransferStep' };