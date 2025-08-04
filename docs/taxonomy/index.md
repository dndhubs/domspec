---
layout: default
title: DNDHUBS DOMSpec Taxonomy
---

# DNDHUBS DOMSpec Taxonomy

The DNDHUBS DOMSpec Taxonomy, managed by DNDHUBS LIMITED (`https://dndhubs.com`), provides a comprehensive classification system for web development resources. It's designed to be both exhaustive and extensible, allowing projects to use it as-is or adapt it to their specific needs.

## Core Taxonomy

### Base Categories

```typescript
type ResourceTaxonomy = CoreResource | CustomResource;
type CoreResource = 'ui' | 'content' | 'geospatial' | 'financial' | 'healthcare';
type CustomResource = string & { __resource?: 'CustomResource' };
```

### Detailed Category Definitions

#### UI (User Interface)
The `ui` category encompasses all visual and interactive elements:

```typescript
interface UIResource extends ResourceSpec {
  taxonomy: 'ui';
  subtype: 'component' | 'layout' | 'theme' | 'animation';
  // UI-specific properties
  accessibility?: {
    role: string;
    aria: Record<string, any>;
  };
  responsive?: {
    breakpoints: string[];
    behavior: 'stack' | 'hide' | 'resize';
  };
}
```

Examples:
- Buttons, forms, modals
- Navigation menus
- Grid systems
- Theme configurations

#### Content
The `content` category covers all informational resources:

```typescript
interface ContentResource extends ResourceSpec {
  taxonomy: 'content';
  subtype: 'article' | 'media' | 'document' | 'dataset';
  metadata?: {
    author?: string;
    publishDate?: Date;
    tags?: string[];
    license?: string;
  };
}
```

Examples:
- Blog posts, articles
- Images, videos, audio
- PDFs, spreadsheets
- JSON/CSV datasets

#### Geospatial
The `geospatial` category handles location-based data:

```typescript
interface GeospatialResource extends ResourceSpec {
  taxonomy: 'geospatial';
  subtype: 'location' | 'route' | 'boundary' | 'feature';
  coordinates?: {
    lat: number;
    lng: number;
    altitude?: number;
  };
  projection?: string;
}
```

Examples:
- Points of interest
- Routes and directions
- Administrative boundaries
- Geographic features

#### Financial
The `financial` category manages monetary and economic data:

```typescript
interface FinancialResource extends ResourceSpec {
  taxonomy: 'financial';
  subtype: 'transaction' | 'account' | 'report' | 'instrument';
  compliance?: {
    standards: string[]; // ['ISO-4217', 'GAAP', etc.]
    jurisdiction?: string;
  };
}
```

Examples:
- Transactions, invoices
- Account statements
- Financial reports
- Trading instruments

#### Healthcare
The `healthcare` category covers medical and health data:

```typescript
interface HealthcareResource extends ResourceSpec {
  taxonomy: 'healthcare';
  subtype: 'patient' | 'provider' | 'clinical' | 'administrative';
  compliance?: {
    standards: string[]; // ['HL7', 'FHIR', 'HIPAA']
    privacy: 'public' | 'protected' | 'restricted';
  };
}
```

Examples:
- Patient records
- Clinical observations
- Provider information
- Insurance claims

## Extending the Taxonomy

### Custom Categories
Add domain-specific categories:

```typescript
// Education domain
type EducationTaxonomy = CoreEducation | CustomEducation;
type CoreEducation = 'education';
type CustomEducation = string & { __education?: 'CustomEducation' };

interface EducationResource extends ResourceSpec {
  taxonomy: 'education';
  subtype: 'course' | 'lesson' | 'assessment' | 'credential';
  level?: 'K12' | 'undergraduate' | 'graduate' | 'professional';
}
```

### Composite Resources
Create resources that span multiple taxonomies:

```typescript
interface CompositeResource extends ResourceSpec {
  taxonomy: ResourceTaxonomy[];
  primary: ResourceTaxonomy;
  relationships: {
    [key in ResourceTaxonomy]?: string;
  };
}

// Example: A medical imaging study
const imagingStudy: CompositeResource = {
  taxonomy: ['healthcare', 'content'],
  primary: 'healthcare',
  type: 'imaging-study',
  name: 'ChestXRay',
  relationships: {
    healthcare: 'clinical observation',
    content: 'DICOM image set'
  }
};
```

## Compliance and Standards
### Industry Standards Alignment
Each taxonomy category aligns with relevant industry standards:

| Category     | Standards                              |
|--------------|----------------------------------------|
| UI           | WCAG, WAI-ARIA, Material Design       |
| Content      | Dublin Core, Schema.org               |
| Geospatial   | OGC, GeoJSON, KML                     |
| Financial    | ISO-4217, XBRL, FIX                   |
| Healthcare   | HL7 FHIR, DICOM, ICD-10               |

### Validation
Use the built-in validation system:

```typescript
import { validateTaxonomy } from '@dndhubs/domspecs/taxonomy';

const result = validateTaxonomy(myResource);
if (!result.valid) {
  console.error('Validation errors:', result.errors);
}
```

## Best Practices
- **Choose the Most Specific Category**: Always use the most specific taxonomy that fits your resource.
- **Document Extensions**: When extending the taxonomy, provide clear documentation with JSDoc, including links to `https://github.com/dndhubs/domspecs`.
- **Maintain Compatibility**: Extensions should not break existing implementations.
- **Consider Compliance**: Ensure your usage aligns with relevant industry standards.
- **Use Composite Resources Sparingly**: Only when a resource truly belongs to multiple categories.

## Migration Guide
### From Custom Systems

```typescript
// Before: Custom categorization
const oldResource = {
  category: 'user-elements',
  type: 'button'
};

// After: DNDHUBS DOMSpec Taxonomy
const newResource: ResourceSpec = {
  taxonomy: 'ui',
  type: 'component',
  name: 'Button',
  subtype: 'interactive'
};
```

### Version Compatibility
The taxonomy is designed for forward compatibility:

```typescript
// Version 1.0
type TaxonomyV1 = CoreTaxonomyV1 | CustomTaxonomyV1;
type CoreTaxonomyV1 = 'ui' | 'content' | 'geospatial' | 'financial' | 'healthcare';
type CustomTaxonomyV1 = string & { __taxonomyV1?: 'CustomTaxonomyV1' };

// Future versions will extend, not replace
type TaxonomyV2 = TaxonomyV1 | 'education' | 'entertainment';
```

## Tools and Utilities
### Taxonomy Browser
Explore the taxonomy interactively:

```bash
npx @dndhubs/domspecs browse-taxonomy
```

### Code Generation
Generate TypeScript types from taxonomy:

```bash
npx @dndhubs/domspecs generate-types --taxonomy ui --output ./types
```

### Validation CLI
Validate your resources:

```bash
npx @dndhubs/domspecs validate ./my-resources/**/*.json
```

## Contributing to the Taxonomy
We welcome contributions! To propose new categories or modifications:

- Open an issue describing the use case at `https://github.com/dndhubs/domspecs/issues`
- Provide examples of resources that would use the category
- List any relevant industry standards
- Submit a PR with documentation and tests

See our [Contributing Guide](https://github.com/dndhubs/domspecs/blob/main/CONTRIBUTING.md) for details.