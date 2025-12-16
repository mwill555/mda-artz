# SEO and Pinterest Generator

## Overview

The `mdz-seo-pins.ts` script generates SEO metadata and Pinterest CSV files from product JSON data.

## Prerequisites

Install dependencies:
```bash
npm install
```

## Usage

```bash
npm run generate:seo-pins <input-json-file>
```

Or directly:
```bash
npx ts-node apps/generators/mdz-seo-pins.ts <input-json-file>
```

## Input Format

The input JSON file should contain an array of products with the following structure:

```json
[
  {
    "handle": "product-slug",
    "title": "Product Title (max 60 chars for SEO)",
    "description": "Product description (max 160 chars for SEO)",
    "alt": "Image alt text (max 150 chars)",
    "board": "Pinterest Board Name",
    "url": "https://your-store.com/products/product-slug",
    "tags": ["tag1", "tag2", "tag3"],
    "image_url": "https://cdn.your-store.com/image.jpg"
  }
]
```

## Output

The script generates two types of files:

### 1. SEO JSON Files
Location: `build/seo/{handle}.json`

Contains optimized metadata for each product:
- `product_handle`: Product identifier
- `meta_title`: Truncated title (60 chars)
- `meta_description`: Truncated description (160 chars)  
- `image_alt_text`: Truncated alt text (150 chars)

### 2. Pinterest CSV
Location: `build/pins/pins.csv`

CSV file ready for Pinterest bulk upload with columns:
- Title
- Description
- Alt Text
- Board
- URL
- Tags
- Image_URL

## Content Validation

The generator enforces content constraints:

### Banned Words
By default, the following words are banned from all content fields:
- `pink`
- `rainbow`

To allow these words, set the environment variable:
```bash
ALLOW_PASTEL=true npm run generate:seo-pins <input-json-file>
```

### Text Truncation
Text fields are automatically truncated to SEO-optimal lengths:
- Titles: 60 characters
- Descriptions: 160 characters
- Alt text: 150 characters

## Example

```bash
# Create sample input
cat > products.json << 'EOF'
[
  {
    "handle": "neon-warrior-tee",
    "title": "Neon Warrior Afro-Anime Streetwear Tee",
    "description": "Premium quality t-shirt featuring original Afro-futuristic character design with electric blue neon accents. Adult sizes available.",
    "alt": "Neon warrior character in futuristic armor with blue lighting effects",
    "board": "Anime Fashion",
    "url": "https://mda-artz.com/products/neon-warrior-tee",
    "tags": ["anime", "streetwear", "neon", "afrofuturism"],
    "image_url": "https://cdn.mda-artz.com/neon-warrior.jpg"
  }
]
EOF

# Generate files
npm run generate:seo-pins products.json

# Check output
cat build/seo/neon-warrior-tee.json
cat build/pins/pins.csv
```

## Error Handling

If a banned word is detected, the script will throw an error:
```
Error: Banned word "pink" detected in: Pink Warrior Design
```

Review and fix the content before regenerating.
