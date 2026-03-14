# @dndhub/domspec

[![npm version](https://img.shields.io/npm/v/@dndhub/domspec)](https://www.npmjs.com/package/@dndhub/domspec)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/dndhub/domspec/blob/main/LICENSE)

**Document Object Model Specifications**  
An open-source initiative by **DNDHUBS LIMITED** for standardizing DOM APIs and web development taxonomy.

---

## Overview

`@dndhub/domspec` is a **TypeScript-first** library that defines the canonical `DOMSpec` contract used across the entire DNDHUBS ecosystem (Fluxr, GEOCoLab, Trakrr, DataOrb, and beyond).

It provides strongly-typed interfaces for:
- Application metadata (`InfoDOMSpecs`)
- Multi-server configurations (`ServerDOMSpecs`)
- Full-spectrum cryptographic policies (`CryptoDOMSpecs`)
- Extensible sections for auth, routing, caching, geo, rewards, workflows, and more

This package is the **foundational layer (L1)** of the DNDHUBS architecture, ensuring every platform and product adheres to the same structured manifest.

**Homepage:** https://dndhubs.com/docs/domspec  
**Repository:** https://github.com/dndhub/domspec

---

## Installation

```bash
npm install @dndhub/domspec
# or
yarn add @dndhub/domspec
# or
pnpm add @dndhub/domspec
```

**Requirements**  
- Node.js ≥ 23.0.0  
- TypeScript ≥ 5.0

---

## Quick Start

```ts
import type {
  DOMSpec,
  InfoDOMSpecs,
  ContactObject,
  LicenseObject,
  ServerDOMSpecs,
  ServerObject,
  CryptoDOMSpecs
} from '@dndhub/domspec';

const myAppSpec: DOMSpec = {
  doms: "my-product-v1",
  info: {
    version: "1.2.0",
    title: "My Awesome Product",
    description: "A modern web platform built on DNDHUBS standards",
    contact: { name: "Team", email: "team@example.com" },
    license: { name: "MIT", url: "https://opensource.org/licenses/MIT" }
  },
  server: {
    production: {
      baseUrl: "https://api.myproduct.com",
      port: 443,
      protocol: "https",
      dockerCompose: { /* ... */ }
    }
  },
  crypto: {
    algorithmConfigs: { /* signing, encryption, derivation */ },
    keyPolicies: { /* per token type */ },
    compliance: { iso: true, hl7: true }
  },
  // optional sections: auth, fluxr, geo, rewards, workflows...
};
```

---

## Public API Reference

Full contract and all inlined types are defined in **[PUBLIC_API.md](./PUBLIC_API.md)** (auto-generated).

### Key Sections
- **Core Contract** — `DOMSpec` root object  
- **Info** — `InfoDOMSpecs`, `ContactObject`, `LicenseObject`  
- **Server** — `ServerDOMSpecs`, `ServerObject`, `ServerVariableObject` (supports FluxrProtocolTaxonomy)  
- **Crypto** — `CryptoDOMSpecs`, `SignOptions`, `VerifyOptions`, `EncryptionOptions`, `CryptoKeyPolicy`, `CryptoKeyPolicies`, plus blockchain, tokenization, oracles, rewards, and interoperability

All sub-types are fully inlined — no further re-exports needed.

---

## Features

- ✅ Pure TypeScript definitions (no runtime code)  
- ✅ Industry-standard compliance hooks (ISO, HL7, SCOR)  
- ✅ Extensible & future-proof (arbitrary `[key: string]` fields)  
- ✅ Works with `@dndhub/taxonomy` and `@dndhub/config`  
- ✅ ESM-only, tree-shakable  

---

## Project Status

- **Version**: 0.0.0-alpha  
- **Stage**: Public foundational layer  
- **License**: MIT  
- **Publish Config**: Public npm registry

---

## Links

- [PUBLIC_API.md](./PUBLIC_API.md) — Complete type reference  
- [Homepage](https://dndhubs.com/docs/domspec)  
- [Issues](https://github.com/dndhub/domspec/issues)  
- [DNDHUBS Sponsors](https://github.com/sponsors/dndhubs)

---

## Start Here

### For developers
- Explore our public foundational repositories
- Start with [DOMSpec](https://github.com/dndhub/domspec)
- Review package-level READMEs, contribution guides, and security policies
- Follow the architecture and naming patterns used across the ecosystem

### For founders and product teams
- Explore how DNDHUBS approaches reusable infrastructure
- Follow the evolution of platforms like Fluxr, GEOCoLab, Trakrr, and DataOrb
- Watch for open libraries that can be adopted independently

### For contributors
We welcome contributors interested in:
- architecture
- standards
- TypeScript libraries
- developer tooling
- integrations
- documentation
- AI-assisted engineering systems

Please check each repository for its local contribution and security guidelines before contributing.

---

## Featured Public Direction

We are especially interested in advancing:

- ecosystem standards
- structured platform manifests
- modular library design
- developer experience
- AI-ready documentation and architecture
- reusable infrastructure for modern digital products

---

## Sponsors

Support from sponsors helps us build and maintain open-source foundations, shared standards, tooling, and ecosystem infrastructure across DNDHUBS.

➡️ **Become a sponsor:** [View sponsorship packages](./SPONSORSHIP.md)  
➡️ **Sponsor on GitHub:** [github.com/sponsors/dndhubs](https://github.com/sponsors/dndhubs)  
➡️ **Sponsor on Open Collective:** [https://opencollective.com/dndhub](https://opencollective.com/dndhub)

---

## 📚 What is DNDHUBS?

Data & Digital Hubs ecosystem is an Open-source, marketplace for community-to-enterprise solutions, managed by DNDHUBS LIMITED (`https://dndhubs.com`), that provides:

- 📊 Comprehensive tools for web development
- 🔧 TypeScript-first approach
- 🌐 Industry-standard compliance (ISO, HL7, SCOR)

🤝 **Contributing**  
We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.  
Ways to Contribute:

- 🐛 Report bugs and issues
- 💡 Suggest new features
- 📖 Improve documentation
- 🧪 Write tests
- 🎨 Submit logo designs

📖 **Documentation**

- [Getting Started](https://github.com/dndhubs/taxonomy/wiki/Getting-Started)
- [Taxonomy Guide](https://github.com/dndhubs/taxonomy/wiki/Taxonomy)
- [Development Journey](https://github.com/dndhubs/taxonomy/wiki/Development-Journey)
- [API Reference](https://github.com/dndhubs/taxonomy/wiki/API-Reference) (see also [PUBLIC_API.md](./PUBLIC_API.md))

🏆 **Community**

- GitHub Discussions: Join the conversation at `https://github.com/dndhubs/taxonomy/discussions`
- Twitter/X: Follow [@dndhubs](https://x.com/dndhubs) for updates
- LinkedIn: DNDHUBS LIMITED Updates (`https://dndhubs.com`)

📊 **Project Status**

- ✅ Taxonomy v1.0 defined
- 🔄 Documentation in progress
- 🔄 Community building
- 📅 Official launch: August 2025

📝 **License**  
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

🙏 **Acknowledgments**  
Special thanks to all contributors and the open-source community for making this project possible, managed by DNDHUBS LIMITED.

<p align="center">
  Made with ❤️ by the DNDHUBS DOMSpec Community
</p>