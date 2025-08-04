# Contributing to DNDHUBS DOMSpec

First off, thank you for considering contributing to DNDHUBS DOMSpec! 🎉

## Code of Conduct

This project and everyone participating in it is governed by the [DNDHUBS DOMSpec Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues at `https://github.com/dndhubs/domspecs/issues`. When creating a bug report, include as many details as possible using our issue template.

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues at `https://github.com/dndhubs/domspecs/issues`. When creating an enhancement suggestion, include:
- A clear and descriptive title
- A detailed description of the proposed enhancement
- Examples of how it would be used
- Why this enhancement would be useful

### 🔧 Pull Requests

1. Fork the repo at `https://github.com/dndhubs/domspecs` and create your branch from `main`.
2. If you've added code, add tests.
3. Ensure the test suite passes.
4. Make sure your code lints.
5. Issue that pull request!

## Development Setup

```bash
# Clone your fork
git clone https://github.com/dndhubs/domspecs.git
cd domspecs

# Install dependencies
npm install

# Run tests
npm test

# Build documentation
npm run build:docs

# Serve documentation locally
npm run serve:docs
```

## Taxonomy Contributions
When contributing to the DNDHUBS DOMSpec taxonomy:

- Follow the existing patterns in `src/taxonomy/`.
- Include comprehensive documentation with JSDoc, following rules in `taxonomy-rules.md`.
- Add examples for new categories.
- Ensure backward compatibility.

Example:

```typescript
// Good taxonomy addition
type NewCategoryTaxonomy = CoreNewCategory | CustomNewCategory;
type CoreNewCategory = 'education' | 'entertainment';
type CustomNewCategory = string & { __newCategory?: 'CustomNewCategory' };

/**
 * @see https://github.com/dndhubs/domspecs/blob/main/src/taxonomy/new-category-taxonomy.ts
 * @see https://github.com/dndhubs/domspecs/wiki/NewCategoryTaxonomy
 * @see https://github.com/dndhubs/domspecs/discussions/new?category=general&title=Feedback%20on%20NewCategoryTaxonomy
 * - 'education': Educational resources and learning materials
 * - 'entertainment': Media and entertainment content
 */
```

## Commit Guidelines
We follow Conventional Commits:

- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Code style changes (formatting, etc)
- refactor: Code refactoring
- test: Adding tests
- chore: Maintenance tasks

Example:

```
feat: add healthcare taxonomy category

- Add healthcare resource types
- Include HL7 compliance notes
- Add usage examples
```

## Documentation Style Guide

- Use Markdown for all documentation.
- Include code examples where applicable.
- Keep language clear and concise.
- Add navigation links between related topics in the wiki (`https://github.com/dndhubs/domspecs/wiki`).

## Questions?
Feel free to open an issue with the question label or start a discussion at `https://github.com/dndhubs/domspecs/discussions`.

## Recognition
Contributors will be recognized in:

- The project README (`https://github.com/dndhubs/domspecs/blob/main/README.md`)
- Release notes
- Our documentation site (`https://dndhubs.com/docs/domspecs`)

Thank you for contributing to DNDHUBS DOMSpec, managed by DNDHUBS LIMITED! 🚀