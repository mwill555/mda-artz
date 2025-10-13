# GitHub Copilot Instructions - MDA Artz

## Project Context

This is the **mda-artz** repository, supporting a Shopify-based digital art store specializing in cyberpunk and Afro-anime aesthetic art prints. The store focuses on neon-themed, futuristic artwork with strong SEO optimization and social media marketing integration.

## Content Guidelines

### Brand Identity
- **Aesthetic**: Cyberpunk, Afro-futurism, anime-inspired digital art
- **Color palette**: Neon colors (teal, electric blue, indigo), avoid pink and rainbow unless explicitly allowed
- **Target audience**: Digital art enthusiasts, anime fans, collectors of cyberpunk artwork

### SEO Best Practices
- **Meta titles**: Keep under 60 characters, keyword-rich
- **Meta descriptions**: Keep under 160 characters, compelling and descriptive
- **Image alt text**: Keep under 150 characters, descriptive and accessible
- **Product titles**: Use 4-6 words describing the core concept plus size (e.g., "Symbiotic Bio-Armored Poster – 16×20")
- Ensure unique meta tags for every page
- Use proper heading structure (single H1, meaningful H2/H3)

### Content Validation Rules
- **Banned words**: `pink`, `rainbow` (unless `ALLOW_PASTEL=true` environment variable is set)
- Always validate content against banned words before generating SEO files
- Truncate text to specified limits: titles (60 chars), descriptions (160 chars), alt text (150 chars)

## Code Standards

### TypeScript/JavaScript
- Use TypeScript for all generator scripts
- Follow functional programming patterns where appropriate
- Use explicit types and interfaces
- Handle errors gracefully with clear error messages
- Use `fs` and `path` modules for file operations

### File Structure
```
apps/
  generators/     # Scripts for generating SEO and marketing content
  flows/          # Workflow automation
prompts/          # AI prompts for content generation
build/
  seo/            # Generated SEO JSON files
  pins/           # Generated Pinterest CSV files
```

### Code Patterns
```typescript
// Use interface definitions for data structures
interface ProductInput {
  handle: string;
  title: string;
  description: string;
  alt: string;
  board: string;
  url: string;
  tags: string[];
  image_url: string;
}

// Validate content before processing
function validateContent(text: string): void {
  const banned = ['pink', 'rainbow'];
  if (process.env.ALLOW_PASTEL === 'true') return;
  banned.forEach(word => {
    if (new RegExp(`\\b${word}\\b`, 'i').test(text)) {
      throw new Error(`Banned word "${word}" detected in: ${text}`);
    }
  });
}

// Truncate text to specified limits
function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max).trim() : str.trim();
}
```

## Output Generation

### SEO Files
- Generate JSON files in `build/seo/{handle}.json`
- Include: `product_handle`, `meta_title`, `meta_description`, `image_alt_text`
- Create directories recursively if they don't exist

### Pinterest CSV
- Generate CSV in `build/pins/pins.csv`
- Headers: Title, Description, Alt Text, Board, URL, Tags, Image_URL
- Properly escape fields containing commas with quotes
- Remove quotes from titles/descriptions, join tags with spaces

## Marketing & Growth Strategy

When working on marketing content or growth strategies:
- Focus on data-driven KPIs (CTR ≥2.5%, CVR ≥5%, CPA ≤60% AOV)
- Leverage Meta, TikTok, and Etsy advertising channels
- Use influencer partnerships and UGC (user-generated content)
- Implement email sequences (launch, follow-up, cart abandonment)
- Track metrics using Shopify Analytics and Meta/TikTok Ads Manager

## Testing & Validation

- Validate JSON against schemas before committing
- Check for banned words in generated content
- Ensure all text truncation respects character limits
- Test file generation with sample data before production use

## Documentation

- Use JSDoc comments for public functions
- Include usage examples in script headers
- Document expected input/output formats
- Keep README.md updated with actionable steps for store management

## Workflow Integration

- GitHub Actions workflow validates SEO and pins content
- Runs on push to main and all pull requests
- Checks for banned words and validates JSON schema
- Node.js version: 18

## Build & Test Instructions

### Building the Project
This is a content-focused repository without traditional build steps. TypeScript files in `apps/generators/` are executed directly with `ts-node` or compiled on-the-fly.

### Running Generators
```bash
# Run the SEO and Pinterest CSV generator
npx ts-node apps/generators/mdz-seo-pins.ts <input-products.json>

# This will create:
# - build/seo/{handle}.json files
# - build/pins/pins.csv file
```

### Testing
- Manual validation of generated SEO JSON files against schema
- Content validation for banned words using grep
- GitHub Actions workflow runs automated validation on PRs

### Validation Commands
```bash
# Validate SEO JSON files (requires ajv-cli)
npx ajv validate -s schemas/seo.schema.json -d build/seo/*.json --strict=false

# Check for banned words in generated content
grep -r -E '\b(pink|rainbow)\b' build/seo
```

## Development Setup

### Prerequisites
- Node.js 18 or higher
- TypeScript knowledge for generator scripts
- Basic understanding of Shopify store structure

### Getting Started
1. Clone the repository
2. No npm install needed for basic content updates
3. For running generators, install TypeScript globally: `npm install -g typescript ts-node`
4. For validation, install ajv-cli: `npm install -g ajv-cli`

### Repository Structure
- `apps/generators/` - TypeScript scripts for generating SEO and marketing content
- `apps/flows/` - YAML workflow definitions for automation
- `prompts/` - AI prompt templates for content generation
- `build/seo/` - Generated SEO JSON files (created by generators)
- `build/pins/` - Generated Pinterest CSV files (created by generators)
- `.github/workflows/` - GitHub Actions workflow definitions

## Dependencies & Tools

### Runtime Dependencies
- Node.js 18+ (for running TypeScript generators)
- TypeScript/ts-node (for executing .ts files)

### Development Tools
- ajv-cli - JSON schema validation
- TypeScript - For generator scripts
- Markdown - For documentation and prompts

### External Services
- Shopify - E-commerce platform
- Pinterest - Social media marketing
- Meta/TikTok Ads - Paid advertising channels
- Etsy - Additional marketplace

## Common Commands

### Content Generation
```bash
# Generate SEO and Pinterest content from product JSON
npx ts-node apps/generators/mdz-seo-pins.ts products.json
```

### Content Validation
```bash
# Validate all SEO JSON files
npx ajv validate -s schemas/seo.schema.json -d build/seo/*.json --strict=false

# Check for banned color words
grep -r -E '\b(pink|rainbow)\b' build/seo || echo "No banned words found"
```

### Git Workflow
```bash
# Check status and view changes
git status
git diff

# Commit changes
git add .
git commit -m "Your commit message"
git push
```

## Best Practices for Contributors

- **Start with simple tasks**: Begin with documentation updates or single-file changes
- **Clear commit messages**: Describe what changed and why
- **Test before committing**: Always validate generated content before pushing
- **Minimal changes**: Make the smallest possible changes to achieve the goal
- **Follow existing patterns**: Match the code style and structure of existing files
- **Document your work**: Update README.md if you add new features or change workflows
