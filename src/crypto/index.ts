import type {
    SigningAlgorithmTaxonomy,
    HashAlgorithmTaxonomy,
    EncryptionAlgorithmTaxonomy,
    DerivationAlgorithmTaxonomy,
    WrappingAlgorithmTaxonomy,
    CryptoEncodingTaxonomy,
    TokenTypeTaxonomy
} from '@dndhub/taxonomy';

export type CryptoDOMSpecs = {
  storagePrefix?: string;
  algorithmConfigs?: {
    signing: {
      defaultAlgorithm: SigningAlgorithmTaxonomy;
      defaultHash: HashAlgorithmTaxonomy;
      keyUsages: KeyUsage[],
    },
    encryption: {
      defaultAlgorithm: EncryptionAlgorithmTaxonomy;
      defaultHash: HashAlgorithmTaxonomy;
      keyUsages: KeyUsage[],
    },
    derivation: {
      defaultAlgorithm: DerivationAlgorithmTaxonomy;
      defaultHash: HashAlgorithmTaxonomy;
      keyUsages: KeyUsage[],
    },
    wrapping: {
      defaultAlgorithm: WrappingAlgorithmTaxonomy;
      defaultHash: HashAlgorithmTaxonomy;
      keyUsages: KeyUsage[],
    },
  }
  sign?: SignOptions;
  verify?: VerifyOptions;
  encryption?: CryptoEncrption;
  decryption?: {
    encoding: string
  };
  hashing?: {
    algorithms: string[];
    saltLength: number;
    [key: string]: any; // Allows for any additional properties in hashing
  };
  keyManagement?: {
    storage: string;
    rotationInterval: string;
    derivation: {
      function: string;
      salt: string;
      info: string;
      [key: string]: any; // Allows for any additional properties in derivation
    };
    [key: string]: any; // Allows for any additional properties in keyManagement
  };
  keyPolicies?: CryptoKeyPolicies;
  blockchain?: {
    consensusMechanism: string;
    smartContracts: {
      language: string;
      runtime: string;
      [key: string]: any; // Allows for any additional properties in smartContracts
    };
    blockTime: string;
    blockSize: string;
    transactionFees: {
      calculationMethod: string;
      distribution: {
        [key: string]: number;
      };
      [key: string]: any;
    };
    [key: string]: any;
  };
  wallet?: {
    type: string;
    storage: string;
    encryption: string;
    multiSignature: {
      enabled: boolean;
      requiredSignatures: number;
      [key: string]: any;
    };
    [key: string]: any;
  };
  tokenization?: {
    standards: string[];
    minting: {
      enabled: boolean;
      initialSupply: number;
      [key: string]: any;
    };
    burning: {
      enabled: boolean;
      maxBurnAmount: number;
      [key: string]: any;
    };
    [key: string]: any;
  };
  crossPlatform?: {
    web: {
      cryptoLib: string;
      blockchainLib: string;
      [key: string]: any; // Allows for any additional properties in web
    };
    mobile?: {
      cryptoLib: string;
      blockchainLib: string;
      [key: string]: any; // Allows for any additional properties in mobile
    };
    desktop?: {
      cryptoLib: string;
      blockchainLib: string;
      [key: string]: any; // Allows for any additional properties in desktop
    };
    [key: string]: any; // Allows for any additional properties in crossPlatform
  };
  integration?: {
    cryptoAPIs: {
      [key: string]: string; // Allows for any API name with a URL string value
    };
    [key: string]: any; // Allows for any additional properties in integration
  };
  performance?: {
    caching: {
      enabled: boolean;
      cacheDuration: string;
      [key: string]: any; // Allows for any additional properties in caching
    };
    optimization: {
      batchProcessing: boolean;
      threading: boolean;
      lazyLoading: boolean;
      [key: string]: any; // Allows for any additional properties in optimization
    };
    [key: string]: any; // Allows for any additional properties in performance
  };
  compliance?: {
    kyc: {
      required: boolean;
      providers: string[];
      [key: string]: any; // Allows for any additional properties in kyc
    };
    aml: {
      monitoring: boolean;
      reportingThreshold: number;
      [key: string]: any; // Allows for any additional properties in aml
    };
    taxReporting: {
      enabled: boolean;
      provider: string;
      [key: string]: any; // Allows for any additional properties in taxReporting
    };
    [key: string]: any; // Allows for any additional properties in compliance
  };
  rewards?: {
    types: string[];
    distribution: {
      method: string;
      frequency: string;
      [key: string]: any; // Allows for any additional properties in distribution
    };
    loyalty: {
      tiers: string[];
      pointsToToken: number;
      [key: string]: any; // Allows for any additional properties in loyalty
    };
    [key: string]: any; // Allows for any additional properties in rewards
  };
  oracles?: {
    enabled: boolean;
    providers: string[];
    [key: string]: any; // Allows for any additional properties in oracles
  };
  interoperability?: {
    protocols: string[];
    bridges: string[];
    [key: string]: any; // Allows for any additional properties in interoperability
  };
  constants?: {
    [key: string]: unknown;
  }
  [key: string]: any; // Allows for any additional properties in the main CryptoConfig object
}

export type SignOptions = {
  algorithm?: string;
  encoding?: CryptoEncodingTaxonomy;
  dsaEncoding?: 'der' | 'ieee-p1363';
  expiresIn?: string | number;
  padding?: number;
  saltLength?: number;
  outputEncoding?: CryptoEncodingTaxonomy;
};

export type VerifyOptions = {
  algorithm?: string;
  encoding?: CryptoEncodingTaxonomy;
  ignoreExpiration?: boolean;
  dsaEncoding?: 'der' | 'ieee-p1363';
  padding?: number;
  saltLength?: number;
};

export interface EncryptionOptions {
  iv?: Uint8Array;
  ivLength?: number;
  tagLength?: number;
}

export type CryptoEncrption = {
  algorithms?: {
    symmetric: string[];
    asymmetric: string[];
  };
  keySize?: {
    [key: string]: number;
  };
  ivLength?: number;
  [key: string]: any;
}

export type CryptoKeyPolicy = {
  allowImport: boolean;
  extractable: boolean;
  keyPairType: "RSA" | "EC" | "HKDF" | "AES";
  imexport: boolean; // Whether import/export operations are enabled
  keyValidity: string; // Validity period (e.g., "365d", "90d")
  keyUsages: KeyUsage[];
};
export type CryptoKeyPolicies = {
  [key in TokenTypeTaxonomy]?: CryptoKeyPolicy;
};