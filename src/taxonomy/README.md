# @trakfox/taxonomy Repository

Welcome to the `@trakfox/taxonomy` repository, an open-source GitHub project for managing standardized taxonomies within the Trakfox ecosystem. This library provides a global naming convention for classifying resources and entities, enabling seamless data management, ETL operations, and integration with Open API tools and the DOMSpec configuration. Organizations and contributors can submit and maintain versioned taxonomies with JSON/YAML schemas for validation, supporting diverse industry domains and custom use cases. Join our journey to the Trakfox platform launch, documented through GitHub, social media, and blog content to create buzz and foster community collaboration.

## Table of Contents
- [Purpose](#purpose)
- [Repository Structure](#repository-structure)
- [Marketing Campaign & Journey Documentation](#marketing-campaign--journey-documentation)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Validation](#validation)
- [Roadmap & Governance](#roadmap--governance)
- [Comparative Research](#comparative-research)
- [Sponsorship](#sponsorship)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Purpose
- **Standardized Taxonomy Framework**: Defines a consistent classification system for entities (e.g., `ResourceTaxonomy`, `CoreResource`) across the Trakfox ecosystem, as detailed in [src/doc/core/ResourceTaxonomy.md](src/doc/core/ResourceTaxonomy.md).
- **Schema-Based Validation**: Provides JSON/YAML schemas for brands to define and validate taxonomies in a form-like manner, ensuring consistency and adherence to the Trakfox Taxonomy Classification guidelines.
- **Community-Driven**: Open for contributions from organizations, developers, and researchers to expand and maintain the taxonomy, fostering a collaborative global standard.
- **Integration**: Supports Trakfox sub-monorepos (e.g., `fluxr`, `mapr`, `products`) and external systems via mappings to industry standards (e.g., ISO, HL7, SCOR).
- **Versioning**: Uses semantic versioning (e.g., `v1.0.0`) to ensure compatibility and track taxonomy evolution, with releases documented in [CHANGELOG.md](CHANGELOG.md).

## Repository Structure
```
@trakfox/taxonomy/
├── src/
│   ├── schemas/
│   │   ├── core/
│   │   │   └── resource-taxonomy.yaml (JSON/YAML schema for core taxonomies)
│   │   ├── industry/
│   │   │   └── geospatial-taxonomy.yaml (Industry-specific schemas)
│   │   ├── custom/
│   │   │   └── organization-name-taxonomy.yaml (Custom schemas)
│   ├── types/
│   │   ├── core/
│   │   │   └── ResourceTaxonomy.ts (TypeScript union types)
│   │   ├── industry/
│   │   │   └── GeospatialTaxonomy.ts
│   │   ├── platform/
│   │   │   └── FluxrTaxonomy.ts
│   │   ├── custom/
│   │   │   └── CustomResourceTaxonomy.ts
│   ├── enum/
│   │   ├── core/
│   │   │   └── ResourceGroupEnum.ts
│   ├── const/
│   │   ├── core/
│   │   │   └── RESOURCE_GROUPS.ts
│   ├── utils/
│   │   ├── core/
│   │   │   └── validateResourceGroup.ts
│   ├── mapping/
│   │   ├── standards/
│   │   │   └── ISO_TO_RESOURCE.ts
│   │   ├── platform/
│   │   │   └── FLUXR_TO_RESOURCE.ts
│   ├── doc/
│   │   ├── core/
│   │   │   └── ResourceTaxonomy.md
│   │   ├── guides/
│   │   │   └── GettingStarted.md
│   │   ├── journey/
│   │   │   └── PlatformDevelopment.md (Launch journey documentation)
│   ├── research/
│   │   ├── core/
│   │   │   └── ResourceTaxonomyResearch.md
│   │   ├── comparisons/
│   │   │   └── ClaudeVsGrok.md
├── package.json
├── tsconfig.json
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── FUNDING.md
├── CHANGELOG.md
├── LICENSE (MIT)
├── .github/
│   └── workflows/
│       └── validate-taxonomy.yaml (CI pipeline for schema validation)
```

## Marketing Campaign & Journey Documentation
We’re documenting our journey to the Trakfox platform launch to build anticipation, showcase our taxonomy development, and engage the community. Follow along and contribute through multiple channels:
- **GitHub Pages**: Explore [trakfox.github.io/taxonomy](https://trakfox.github.io/taxonomy) for research deep dives, “Making Of” series, and a living glossary. Track milestones in [src/doc/journey/](src/doc/journey/) and join discussions via [GitHub Issues](https://github.com/trakfox/taxonomy/issues) or [GitHub Discussions](https://github.com/trakfox/taxonomy/discussions).
- **Social Media**: Follow `#TrakfoxJourney` and `#TrakfoxChallenge` on [LinkedIn](https://linkedin.com/company/trakfox), [Twitter/X](https://twitter.com/trakfox), and [TikTok](https://tiktok.com/@trakfox) for teasers, polls, and behind-the-scenes content. Cross-posts on [Dev.to](https://dev.to/trakfox) and [Medium](https://medium.com/@trakfox) share blog snippets.
- **Blog Content**: Read bi-weekly posts on [trakfox.org/blog](https://trakfox.org/blog) covering taxonomy architecture, industry use cases, and platform features.
- **Video Content**: Watch tutorials, office hours, and launch events on [YouTube](https://youtube.com/@trakfox) or TikTok for short explainers (e.g., “What is a Taxonomy?”).
- **Engagement Opportunities**:
  - 💡 **Submit Ideas**: Propose taxonomies via GitHub Issues using our suggestion template.
  - 🗣️ **Join Discussions**: Share feedback in GitHub Discussions or weekly Twitter/X polls.
  - 🏆 **Trakfox Taxonomy Challenge**: Submit taxonomy ideas for community recognition and potential swag (#TrakfoxChallenge).
  - 📖 **Share Your Story**: Using Trakfox taxonomies? Submit case studies via GitHub Discussions for our monthly community spotlight.
- **Research Collaboration**: Explore AI model comparisons (e.g., Claude, Grok, Gemini) in [src/research/comparisons/](src/research/comparisons/) and contribute insights to shape our standards.

## Getting Started

### Prerequisites
- GitHub account to contribute.
- Node.js (v16+) for local development and validation.
- TypeScript knowledge for working with types and utilities.
- Familiarity with JSON/YAML for schema-based taxonomy submissions.

### Installation
1. Clone the repository for local development:
   ```bash
   git clone https://github.com/trakfox/taxonomy.git
   cd taxonomy
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. For project integration, install the library:
   ```bash
   npm install @trakfox/taxonomy
   ```

## Usage
### For Brands/Organizations
- Create a taxonomy file (e.g., `src/types/custom/organization-name-taxonomy.ts`) and a corresponding schema (e.g., `src/schemas/custom/organization-name-taxonomy.yaml`).
- Example Taxonomy (`src/types/core/ResourceTaxonomy.ts`):
  ```typescript
  // Version A: Compact
  type ResourceTaxonomy = 'page' | 'component' | 'article' | 'order' | 'customer';

  // Version B: Expanded with comments
  type ResourceTaxonomy =
    /** A standalone page served to users (e.g., a landing page) */
    'page' |
    /** A reusable UI component (e.g., a button, card) */
    'component' |
    /** A content item (e.g., blog post, news article) */
    'article' |
    /** An e-commerce order */
    'order' |
    /** A retail customer profile */
    'customer';
  ```
- Example Schema (`src/schemas/core/resource-taxonomy.yaml`):
  ```yaml
  type: object
  properties:
    type:
      type: string
      enum: ['page', 'component', 'article', 'order', 'customer']
    group:
      type: string
      enum: ['ui', 'content', 'ecommerce', 'retail']
    custom:
      type: object
      additionalProperties: true
  required: ['type', 'group']
  ```
- Validate the taxonomy:
  ```bash
  npm run validate -- src/schemas/core/resource-taxonomy.yaml src/types/core/ResourceTaxonomy.ts
  ```
- Submit a pull request (see [CONTRIBUTING.md](CONTRIBUTING.md)).

### For Developers
- Import taxonomies in your project:
  ```typescript
  import { ResourceTaxonomy } from '@trakfox/taxonomy/src/types/core/ResourceTaxonomy';
  import { validateResourceGroup } from '@trakfox/taxonomy/src/utils/core/validateResourceGroup';
  ```
- Validate data at runtime using JSON schemas with libraries like `ajv`:
  ```typescript
  import Ajv from 'ajv';
  import resourceSchema from '@trakfox/taxonomy/src/schemas/core/resource-taxonomy.yaml';

  const ajv = new Ajv();
  const validate = ajv.compile(resourceSchema);
  const valid = validate({ type: 'page', group: 'ui' });
  console.log(valid); // true or false
  ```
- Use utilities for DOMSpec integration or fetch mappings for interoperability (e.g., `src/mapping/standards/ISO_TO_RESOURCE.ts`).

## Contributing
We welcome contributions from brands, developers, and researchers! To contribute:
1. Fork the repository.
2. Add a taxonomy file in `src/types/<category>/<taxonomy>.ts` and a schema in `src/schemas/<category>/<taxonomy>.yaml`.
3. Contribute journey documentation in `src/doc/journey/` or research notes in `src/research/`.
4. Validate changes:
   ```bash
   npm run validate -- src/schemas/<category>/<taxonomy>.yaml
   ```
5. Generate API documentation:
   ```bash
   npm run docs
   ```
6. Run tests:
   ```bash
   npm test
   ```
7. Update documentation in `src/doc/<category>/<taxonomy>.md` or `src/doc/guides/`.
8. Submit a pull request, following [CONTRIBUTING.md](CONTRIBUTING.md).
9. Share your contributions on social media with `#TrakfoxChallenge` to join the launch campaign.

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) and report security issues via [SECURITY.md](SECURITY.md).

Core maintainers will update versions using `npm version [major|minor|patch]` per Semantic Versioning, updating [CHANGELOG.md](CHANGELOG.md) accordingly.

## Validation
A GitHub Actions workflow (`validate-taxonomy.yaml`) validates taxonomy files against their schemas and Trakfox Taxonomy Classification guidelines on push and pull requests. This ensures unique taxonomy names, valid types, and correct syntax.

## Roadmap & Governance
### Roadmap
- **New Taxonomy Domains**: Expand into domains like IoT, blockchain, and quantum computing.
- **Enhanced Schema Tools**: Develop advanced tooling for schema generation and validation.
- **Integrations**: Add mappings for additional standards and Trakfox sub-monorepos.
- **Performance Optimizations**: Improve validation utilities for large datasets.
- **Launch Campaign**: Document the journey in [src/doc/journey/](src/doc/journey/) and engage via social media.
- View specific feature requests and planned work in [GitHub Issues](https://github.com/trakfox/taxonomy/issues).

### Governance
- **Code Review**: Pull requests are reviewed by core maintainers for quality and alignment.
- **Release Cadence**: Monthly releases follow Semantic Versioning, documented in [CHANGELOG.md](CHANGELOG.md).
- **New Taxonomy Proposals**: Propose new domains via GitHub Issues, reviewed by maintainers and discussed with the community.

## Comparative Research
The taxonomy incorporates research comparing approaches from AI models (e.g., Grok, Claude, Gemini, ChatGPT). Findings are documented in [src/research/comparisons/ClaudeVsGrok.md](src/research/comparisons/ClaudeVsGrok.md) to ensure a robust, globally applicable standard.

## Sponsorship
To support scope expansion and ongoing maintenance, consider donating via [GitHub Sponsors](https://github.com/sponsors/trakfox) or [Open Collective](https://opencollective.com/trakfox). Your contributions help fund new taxonomy domains, tooling improvements, and community engagement. See [FUNDING.md](FUNDING.md) for details.

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact
- Issues: [GitHub Issues](https://github.com/trakfox/taxonomy/issues)
- Email: support@trakfox.org
- Documentation: [src/doc/guides/GettingStarted.md](src/doc/guides/GettingStarted.md)
- Community: [trakfox.github.io/taxonomy](https://trakfox.github.io/taxonomy), [LinkedIn](https://linkedin.com/company/trakfox), [Twitter/X](https://twitter.com/trakfox), [YouTube](https://youtube.com/@trakfox)

## Acknowledgments
- Built for the Trakfox ecosystem, integrating with sub-monorepos like `fluxr`, `mapr`, and `products`.
- Inspired by community-driven open-source projects and industry standards (e.g., ISO, HL7, SCOR).
- Incorporates research from the Trakfox Taxonomy Classification project, with comparative analyses across AI models.