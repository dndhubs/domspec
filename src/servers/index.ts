import type {FluxrProtocolTaxonomy} from '@dndhub/taxonomy';

export type ServerDOMSpecs = {
    [key: string]: ServerObject;
}

export type ServerObject = {
    baseUrl: string;
    url?: string;
    description?: string;
    port: number;
    host: string;
    protocol: FluxrProtocolTaxonomy;
    variables?: {
      [variable: string]: ServerVariableObject;
    };
    dockerCompose?: string;
}

export type ServerVariableObject = {
    enum?: [string, ...string[]];
    default: string;
    description?: string;
}