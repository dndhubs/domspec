import type {ErrorObject} from '@dndhub/types';
import type { InfoDOMSpecs } from './info/index.js';
import type { ServerDOMSpecs } from './servers/index.js';
import type {CryptoDOMSpecs} from './crypto/index.ts';

export * from './info/index.js';

export interface DOMSpec {
  doms: string;
  id?: string;
  info: InfoDOMSpecs;
  auth?: unknown;
  router?: unknown;
  server?: ServerDOMSpecs;
  client?: unknown;
  security?: unknown;
  crypto?: CryptoDOMSpecs;
  token?: unknown;
  sw?: unknown;
  fluxr?: unknown;
  cache?: unknown;
  geo?: unknown;
  actions?: Record<string, unknown>;
  reward?: unknown;
  payment?: unknown;
  middlewares?:  unknown // MiddlewareObject & { metadata?: DomsMiddlewareMetadata };
  source?:  unknown // (SourceObject & { metadata?: SourceMetadata })[];
  settings?:  unknown // Record<string, SettingsObject | ReferenceObject> & { metadata?: SettingsObjectMetadata };
  workflows?:  unknown // (Workflow & { metadata?: WorkflowMetadata })[];
  tags?:  unknown // (TagObject & { metadata?: TagObjectMetadata })[];
  error?: ErrorObject;
  parameters?:  unknown // Record<string, ParameterObject | ReferenceObject> & { metadata?: ParameterObjectMetadata };
  webhooks?:  unknown // Record<string, PathItemObject | ReferenceObject> & { metadata?: PathItemObjectMetadata };
  links?:  unknown;
  callbacks?:  unknown // Record<string, CallbackObject | ReferenceObject> & { metadata?: CallbackObjectMetadata };
  options?:  unknown // OptionsObject & { metadata?: OptionsObjectMetadata };
  ui?: {
    colors?: unknown;
    palettes?: unknown,
    elements?: unknown;
    components?: unknown;
    icons?: unknown;
    layouts?: unknown;
    navigations?:  unknown;
    menus?: unknown;
    headers?: unknown;
    footers?: unknown;
    toolbars?: unknown;
    appbars?: unknown;
    widget?: unknown;
    dashboards?: unknown;
    css?: Record<string, unknown>;
    [key: string]: unknown;
  };
  api?: unknown
  apps?: Record<string, unknown>;
  [key: string]: unknown;
}