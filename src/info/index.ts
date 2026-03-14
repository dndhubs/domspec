export type InfoDOMSpecs = {
    version: string;
    title: string;
    description?: string;
    root?: boolean;
    contact?: ContactObject;
    license?: LicenseObject;
    termsOfService?: string;
    metadata?: object;
}

export type ContactObject = {
    name?: string;
    url?: string;
    email?: string;
    phone?: string;
}

export type LicenseObject = {
    name?: string;
    url?: string;
    identifier?: string;
}