---
layout: default
title: Getting Started with DNDHUBS DOMSpec
---

# Getting Started with DNDHUBS DOMSpec

Welcome to DNDHUBS DOMSpec, managed by DNDHUBS LIMITED (`https://dndhubs.com`)! This guide will help you understand and start using DNDHUBS DOMSpec in your projects.

## Installation

### Using npm
```bash
npm install @dndhubs/domspec
```

### Using Yarn
```bash
yarn add @dndhubs/domspec
```

## Basic Concepts
### 1. Resource Taxonomy
DNDHUBS DOMSpec uses a taxonomy system to categorize different types of resources:

```typescript
type ResourceTaxonomy = CoreResource | CustomResource;
type CoreResource = 'ui' | 'content' | 'geospatial' | 'financial' | 'healthcare';
type CustomResource = string & { __resource?: 'CustomResource' };
```

### 2. Resource Specifications

Define your resources using the ResourceSpec interface:

```typescript
interface ResourceSpec {
  taxonomy: ResourceTaxonomy;
  type: string;
  name: string;
  description?: string;
  props?: Record<string, any>;
  methods?: string[];
  events?: string[];
}
```

## Your First DNDHUBS DOMSpec Resource
Let's create a simple button component specification:

```typescript
import { ResourceSpec } from '@dndhubs/domspec';

const buttonSpec: ResourceSpec = {
  taxonomy: 'ui',
  type: 'component',
  name: 'Button',
  description: 'Interactive button element',
  props: {
    variant: {
      type: 'enum',
      values: ['primary', 'secondary', 'danger'],
      default: 'primary'
    },
    size: {
      type: 'enum',
      values: ['small', 'medium', 'large'],
      default: 'medium'
    },
    disabled: {
      type: 'boolean',
      default: false
    }
  },
  methods: ['click', 'focus', 'blur'],
  events: ['onClick', 'onFocus', 'onBlur']
};
```

## Extending the Taxonomy
You can extend the base taxonomy for your specific needs:

```typescript
// Extend for your industry
type ExtendedTaxonomy = ResourceTaxonomy | 'education' | 'entertainment';

const courseSpec: ResourceSpec = {
  taxonomy: 'education',
  type: 'resource',
  name: 'Course',
  props: {
    title: { type: 'string', required: true },
    duration: { type: 'number', unit: 'hours' },
    level: {
      type: 'enum',
      values: ['beginner', 'intermediate', 'advanced']
    }
  }
};
```

## Integration Examples
### With React
```typescript
import React from 'react';
import { useResourceSpec } from '@dndhubs/domspec/react';

function Button() {
  const spec = useResourceSpec(buttonSpec);
  
  return (
    <button 
      className={`btn btn-${spec.props.variant} btn-${spec.props.size}`}
      disabled={spec.props.disabled}
    >
      {spec.props.children}
    </button>
  );
}
```

### With Node.js
```typescript
import { validateSpec, ResourceRegistry } from '@dndhubs/domspec';

// Create a registry
const registry = new ResourceRegistry();

// Register your spec
registry.register(buttonSpec);
registry.register(courseSpec);

// Validate data against spec
const isValid = validateSpec(buttonSpec, {
  variant: 'primary',
  size: 'large',
  disabled: false
});
```

## Best Practices
- **Start Simple**: Begin with basic taxonomies and expand as needed
- **Document Everything**: Use descriptions for all spec with JSDoc, including links to `https://github.com/dndhubs/domspec`
- **Version Your Spec**: Track changes to specifications
- **Test Thoroughly**: Validate your spec with real data
- **Share and Collaborate**: Contribute to the community

## Next Steps
- [Explore the Taxonomy](https://github.com/dndhubs/domspec/wiki/Taxonomy) in detail
- [Read our Journey](https://github.com/dndhubs/domspec/wiki/Journey) to understand our vision
- [Contribute](https://github.com/dndhubs/domspec/blob/main/CONTRIBUTING.md) to the project
- [Join the Discussion](https://github.com/dndhubs/domspec/discussions)

## Need Help?
- 📖 Check our [FAQ](https://github.com/dndhubs/domspec/wiki/FAQ)
- 💬 Ask in [GitHub Discussions](https://github.com/dndhubs/domspec/discussions)
- 🐛 Report issues on [GitHub](https://github.com/dndhubs/domspec/issues)
- 📧 Email us at jetroolowole@dndhubs.com