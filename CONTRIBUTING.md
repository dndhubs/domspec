# Contributing to @dndhub/domspec

First off, thank you for considering contributing to @dndhub/domspec! 🎉

## Code of Conduct

This project and everyone participating in it is governed by the [DNDHUBS Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues at `https://github.com/dndhub/domspec/issues`. When creating a bug report, include as many details as possible using our issue template.

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues at `https://github.com/dndhub/domspec/issues`. When creating an enhancement suggestion, include:
- A clear and descriptive title
- A detailed description of the proposed enhancement
- Examples of how it would be used (preferably in Fluxr / DataOrb / Trakrr context)
- Why this enhancement would be useful

### 🔧 Pull Requests

1. Fork the repo at `https://github.com/dndhub/domspec` and create your branch from `main`.
2. If you've added or modified types/interfaces, add/update corresponding tests (if applicable).
3. Ensure the type-check passes (`npm run typecheck`).
4. Make sure your code lints (`npm run lint`).
5. Issue that pull request!

## Development Setup

```bash
# Clone your fork
git clone https://github.com/dndhub/domspec.git
cd domspec

# Install dependencies
npm install

# Type-check
npm run typecheck

# Lint
npm run lint

# Build
npm run build
```

## DOMSpec Contributions

When contributing to `@dndhub/domspec`:

- Strictly follow the naming, structure, and documentation rules defined in **[DNDHUB_TERMINOLOGY_STANDARDS.md](./DNDHUB_TERMINOLOGY_STANDARDS.md)**.
- Every **exported symbol** must include the standard JSDoc block with `@see` links as shown in section 23 of the terminology guide.
- Use `interface` for extensible object shapes (schemas)
- Use `type` for unions, literal sets, branded types, and complex compositions
- Include practical usage examples — preferably showing real-world usage in Fluxr, DataOrb, Trakrr, or similar DNDHUBS products
- Maintain backward compatibility

**Example** (following official DNDHUB terminology & JSDoc standards):

```typescript
// Schema (extensible object shape)
export interface ServerObject {
  baseUrl: string;
  url?: string;
  description?: string;
  port: number;
  host: string;
  protocol: FluxrProtocolTaxonomy;
  variables?: Record<string, ServerVariableObject>;
  dockerCompose?: Record<string, unknown>;
}

/**
 * @see https://github.com/dndhub/domspec/blob/main/src/server/ServerObject.ts
 * @see https://github.com/dndhub/domspec/wiki/ServerObject
 * @see https://github.com/dndhub/domspec/discussions/new?category=general&title=Feedback%20on%20ServerObject
 *
 * Represents configuration for a single named server/environment (production, staging, dev, edge, etc.)
 * in the DNDHUBS multi-server model.
 *
 * @example
 * const prodServer: ServerObject = {
 *   baseUrl: "https://api.fluxr.dndhubs.com",
 *   protocol: "https",
 *   port: 443,
 *   host: "api.fluxr.dndhubs.com",
 *   description: "Production Fluxr API endpoint",
 *   variables: {
 *     region: { default: "eu-west-1", enum: ["eu-west-1", "us-east-1"] }
 *   }
 * };
 */

// Union type (state / variant shape)
export type FluxrProtocolTaxonomy =
  | "http"
  | "https"
  | "ws"
  | "wss"
  | "grpc"
  | "grpcs";

/**
 * @see https://github.com/dndhub/domspec/blob/main/src/taxonomy/FluxrProtocolTaxonomy.ts
 * @see https://github.com/dndhub/domspec/wiki/FluxrProtocolTaxonomy
 *
 * Allowed protocol identifiers used across Fluxr server definitions and client routing.
 */
```

## Commit Guidelines

We follow **Conventional Commits**:

- `feat:` New feature / new type / new section
- `fix:` Bug fix / type correction
- `docs:` Documentation / JSDoc / README / wiki changes
- `style:` Formatting, missing semicolons, etc.
- `refactor:` Code restructuring without behavior change
- `test:` Adding or correcting tests
- `chore:` Maintenance / tooling / CI

Example:
```
feat: add ServerVariableObject and FluxrProtocolTaxonomy

- Follow DNDHUB_TERMINOLOGY_STANDARDS.md naming & JSDoc rules
- Include full @see links and practical Fluxr example
- Update PUBLIC_API.md description (if needed)
```

## Documentation Style Guide

- Use Markdown for all documentation files
- Include code examples for every non-trivial exported type/interface
- Keep language clear, concise and professional
- Add navigation links between related wiki pages (`https://github.com/dndhub/domspec/wiki`)

## Questions?

Feel free to open an issue with the question label or start a discussion at  
`https://github.com/dndhub/domspec/discussions`

## Recognition

Contributors will be recognized in:

- The project README (`https://github.com/dndhub/domspec/blob/main/README.md`)
- Release notes
- Documentation site (`https://dndhubs.com/docs/domspec`)

Thank you for helping build the foundational type layer of the DNDHUBS ecosystem! 🚀