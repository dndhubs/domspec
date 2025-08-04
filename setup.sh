#!/bin/bash

# DNDHUBS DOMSpec Quick Setup Script
# This script automates the initial setup of the DNDHUBS DOMSpec repository

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Header
echo -e "${BLUE}"
echo "╔════════════════════════════════════════╗"
echo "║     DNDHUBS DOMSpec Setup Script       ║"
echo "║    Setting up @dndhubs/domspecs        ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install git first."
    exit 1
fi

# Check if node is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if we're in the right directory
if [ -d ".git" ]; then
    print_warning "Git repository already initialized."
else
    print_info "Initializing git repository..."
    git init
    print_success "Git repository initialized"
fi

# Create directory structure
print_info "Creating directory structure..."

directories=(
    ".github/workflows"
    ".github/ISSUE_TEMPLATE"
    "docs/taxonomy"
    "docs/journey"
    "docs/assets/css"
    "docs/assets/images"
    "src/taxonomy"
    "src/types"
    "src/utilities"
    "scripts"
)

for dir in "${directories[@]}"; do
    mkdir -p "$dir"
    print_success "Created $dir"
done

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    print_info "Creating .gitignore..."
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/
*.tsbuildinfo

# Jekyll
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Environment
.env
.env.local
.env.*.local

# Logs
logs/
*.log
EOF
    print_success "Created .gitignore"
fi

# Initialize npm if package.json doesn't exist
if [ ! -f "package.json" ]; then
    print_info "Initializing npm package..."
    npm init -y > /dev/null 2>&1
    print_success "Initialized package.json"
fi

# Install dependencies
#print_info "Installing npm dependencies..."
#npm install --save-dev typescript@^5.8.3 @types/node@^20.0.0 eslint prettier > /dev/null 2>&1
#print_success "Installed npm dependencies"

# Create the taxonomy TypeScript file
print_info "Creating TypeScript taxonomy file..."
mkdir -p src/taxonomy
# Note: You'll need to copy the taxonomy.ts content here
print_success "Created src/taxonomy directory"

# Create the validation script
print_info "Creating validation script..."
mkdir -p scripts
# Note: You'll need to copy the validate-taxonomy.js content here
chmod +x scripts/validate-taxonomy.js
print_success "Created scripts/validate-taxonomy.js"

# Setup GitHub Pages
print_info "Setting up GitHub Pages structure..."
if [ ! -f "docs/Gemfile" ]; then
    cat > docs/Gemfile << 'EOF'
source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "jekyll-theme-minimal"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jemoji"
end
EOF
    print_success "Created docs/Gemfile"
fi

# Create a simple setup confirmation file
cat > SETUP_COMPLETE.md << 'EOF'
# DNDHUBS DOMSpec Setup Complete! 🎉

Your DNDHUBS DOMSpec repository has been initialized successfully, managed by DNDHUBS LIMITED.

## Next Steps:

1. **Review and customize the files**
   - Update README.md with your specific information
   - Modify the logo if desired in `docs/assets/images/`
   - Adjust social media links

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: DNDHUBS DOMSpec repository"
   git branch -M main
   git remote add origin https://github.com/dndhubs/domspecs.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: main, folder: /docs
   - Save

4. **Configure repository settings**
   - Enable Issues
   - Enable Discussions
   - Add topics: domspec, typescript, web-standards
   - Set description: "DNDHUBS DOMSpec - TypeScript type definitions and classifications"

5. **Launch on social media**
   - Use the provided social media templates
   - Tag relevant communities
   - Share in developer forums

## Important URLs:
- Repository: https://github.com/dndhubs/domspecs
- Documentation: https://dndhubs.com/docs/domspecs
- Discussions: https://github.com/dndhubs/domspecs/discussions
- Website: https://dndhubs.com

Good luck with your launch! 🚀
EOF

print_success "Setup complete! Check SETUP_COMPLETE.md for next steps."

# Summary
echo -e "\n${GREEN}════════════════════════════════════════${NC}"
echo -e "${GREEN}✨ DNDHUBS DOMSpec repository setup completed!${NC}"
echo -e "${GREEN}════════════════════════════════════════${NC}\n"

print_info "Summary of created structure:"
tree -d -L 3 2>/dev/null || find . -type d -not -path '*/\.*' -not -path '*/node_modules*' | sed -e "s/[^-][^\/]*\// |/g" -e "s/|\([^ ]\)/|-\1/"

echo -e "\n${YELLOW}⚠️  Important:${NC}"
echo "1. Copy all the file contents from the implementation strategy"
echo "2. Add the DNDHUBS DOMSpec logo SVG to docs/assets/images/"
echo "3. Push to GitHub and enable GitHub Pages"
echo "4. Launch on social media!"

print_success "Happy building! 🎨"