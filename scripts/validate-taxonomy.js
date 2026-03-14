#!/usr/bin/env node

/**
 * Validate DNDHUBS DOMSpec Taxonomy Changes
 * This script validates taxonomy modifications in pull requests
 */

const fs = require('fs');
const path = require('path');

// Core taxonomy definition
const CORE_TAXONOMY = ['ui', 'content', 'geospatial', 'financial', 'healthcare'];

// Validation rules
const TAXONOMY_RULES = {
  naming: /^[a-z][a-z0-9-]*$/,
  maxLength: 30,
  reserved: ['admin', 'system', 'internal', 'private', 'public'],
};

// Color codes for terminal output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
};

// Validation results
let errors = [];
let warnings = [];

/**
 * Log an error
 */
function logError(message) {
  errors.push(message);
  console.error(`${colors.red}✗ ${message}${colors.reset}`);
}

/**
 * Log a warning
 */
function logWarning(message) {
  warnings.push(message);
  console.warn(`${colors.yellow}⚠ ${message}${colors.reset}`);
}

/**
 * Log success
 */
function logSuccess(message) {
  console.log(`${colors.green}✓ ${message}${colors.reset}`);
}

/**
 * Log info
 */
function logInfo(message) {
  console.log(`${colors.blue}ℹ ${message}${colors.reset}`);
}

/**
 * Validate taxonomy name
 */
function validateTaxonomyName(name) {
  if (!TAXONOMY_RULES.naming.test(name)) {
    logError(`Invalid taxonomy name "${name}". Must start with lowercase letter and contain only lowercase letters, numbers, and hyphens.`);
    return false;
  }

  if (name.length > TAXONOMY_RULES.maxLength) {
    logError(`Taxonomy name "${name}" exceeds maximum length of ${TAXONOMY_RULES.maxLength} characters.`);
    return false;
  }

  if (TAXONOMY_RULES.reserved.includes(name)) {
    logError(`Taxonomy name "${name}" is reserved and cannot be used.`);
    return false;
  }

  return true;
}

/**
 * Find TypeScript taxonomy files
 */
function findTaxonomyFiles(dir) {
  const files = [];
  
  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir);
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !entry.startsWith('.') && entry !== 'node_modules') {
        walk(fullPath);
      } else if (stat.isFile() && entry.includes('taxonomy') && entry.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

/**
 * Extract taxonomy definitions from TypeScript file
 */
function extractTaxonomies(content) {
  const taxonomies = [];
  
  // Match type definitions
  const typeMatches = content.matchAll(/type\s+\w*Taxonomy\s*=\s*([^;]+);/g);
  for (const match of typeMatches) {
    const values = match[1]
      .split('|')
      .map(v => v.trim())
      .filter(v => v.startsWith("'") || v.startsWith('"'))
      .map(v => v.slice(1, -1));
    taxonomies.push(...values);
  }
  
  return [...new Set(taxonomies)]; // Remove duplicates
}

/**
 * Validate TypeScript file
 */
function validateFile(filePath) {
  logInfo(`Validating ${path.relative(process.cwd(), filePath)}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const taxonomies = extractTaxonomies(content);
  
  if (taxonomies.length === 0) {
    logWarning(`No taxonomy definitions found in ${path.basename(filePath)}`);
    return;
  }
  
  // Check if core taxonomies are modified
  const modifiedCore = taxonomies.filter(t => CORE_TAXONOMY.includes(t));
  if (modifiedCore.length > 0 && modifiedCore.length !== CORE_TAXONOMY.length) {
    logWarning('Core taxonomies detected. Ensure backward compatibility is maintained.');
  }
  
  // Validate custom taxonomies
  const customTaxonomies = taxonomies.filter(t => !CORE_TAXONOMY.includes(t));
  for (const taxonomy of customTaxonomies) {
    validateTaxonomyName(taxonomy);
  }
  
  // Check for documentation
  if (!content.includes('/**') && customTaxonomies.length > 0) {
    logWarning(`Custom taxonomies in ${path.basename(filePath)} should include JSDoc documentation with links to https://github.com/dndhubs/domspecs.`);
  }
  
  logSuccess(`Found ${taxonomies.length} taxonomies (${customTaxonomies.length} custom)`);
}

/**
 * Validate taxonomy structure
 */
function validateStructure() {
  // Check for required files
  const requiredFiles = [
    'src/taxonomy/index.ts',
    'docs/taxonomy/index.md',
  ];
  
  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      logWarning(`Expected file "${file}" not found. This may be intentional if structure differs.`);
    }
  }
}

/**
 * Main validation function
 */
function main() {
  console.log('🔍 DNDHUBS DOMSpec Taxonomy Validator\n');
  
  // Validate structure
  validateStructure();
  
  // Find and validate taxonomy files
  const srcDir = path.join(process.cwd(), 'src');
  if (fs.existsSync(srcDir)) {
    const files = findTaxonomyFiles(srcDir);
    
    if (files.length === 0) {
      logWarning('No taxonomy files found in src directory.');
    } else {
      logInfo(`Found ${files.length} taxonomy file(s)\n`);
      files.forEach(validateFile);
    }
  } else {
    logInfo('No src directory found. Skipping TypeScript validation.');
  }
  
  // Summary
  console.log('\n📊 Validation Summary');
  console.log(`${colors.green}✓ Validations passed${colors.reset}`);
  
  if (warnings.length > 0) {
    console.log(`${colors.yellow}⚠ ${warnings.length} warning(s)${colors.reset}`);
  }
  
  if (errors.length > 0) {
    console.log(`${colors.red}✗ ${errors.length} error(s)${colors.reset}`);
    process.exit(1);
  }
  
  console.log('\n✨ Taxonomy validation completed successfully!');
}

// Run validation
main();