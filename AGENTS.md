# AGENTS.md - Project Documentation for AI Coding Agents

## Project Overview

This is a **personal blog website** built with [Jekyll](https://jekyllrb.com/), a static site generator. The site serves as Kecheng Zhang's personal blog (张珂诚的博客) with bilingual content (Chinese primary, English secondary).

**Site Details:**
- **Title:** KZ's Blog (日志条目 Z / Log Entry Z)
- **URL:** kechengzhang28.github.io
- **Author:** Kecheng Zhang
- **Email:** kechengzhang28@163.com
- **GitHub:** kechengzhang28

## Technology Stack

| Component | Technology |
|-----------|------------|
| Static Site Generator | Jekyll 4.4.1 |
| Theme | Minima 2.5 (customized) |
| CSS Framework | Bulma 1.0.4 |
| Templating | Liquid |
| Language | Ruby |
| Icons | Font Awesome 7.0.1 |

### Custom Fonts Used
- **JetBrains Mono** - Monospace font for code (Regular, ExtraBold)
- **LXGWWenKai** (霞鹜文楷) - Chinese serif font
- **LXGWNeoHei** (霞鹜新致黑) - Chinese sans-serif font
- **LXGWWenKaiMono** (霞鹜文楷 Mono) - Chinese monospace font

## Project Structure

```
.
├── _config.yml              # Jekyll configuration
├── Gemfile                  # Ruby dependencies
├── Gemfile.lock             # Locked dependency versions
├── index.html               # Homepage (featured + latest posts)
├── blog.html                # All posts page (grouped by year)
├── about.html               # About me page with music section
├── tag.html                 # Tag filtering page (dynamic via JS)
├── test.html                # Hidden "mystery" page (permalink: /mystery)
├── 404.html                 # 404 error page
│
├── _layouts/                # Layout templates
│   ├── base.html            # Base layout with header/footer
│   ├── plain.html           # Minimal layout (just head)
│   └── post.html            # Blog post layout with TOC
│
├── _includes/               # Reusable components
│   ├── header.html          # Navigation bar with burger menu
│   ├── footer.html          # Site footer
│   ├── title_section.html   # Page title/subtitle component
│   ├── post_block.html      # Post preview card (large)
│   ├── post_block_small.html # Post preview card (compact)
│   ├── tags.html            # Tag display component
│   ├── side_toc.html        # Sticky sidebar table of contents
│   ├── bib.html             # Bibliography/references section
│   ├── ref.html             # Inline citation reference
│   ├── recommend.html       # Related posts recommendation
│   └── music_card.html      # Music album card
│
├── _posts/                  # Blog posts organized by year
│   ├── 2023/                # Year-based subdirectories
│   ├── 2024/
│   ├── 2025/
│   └── 2026/
│
├── _data/                   # Data files (YAML)
│   ├── nav.yml              # Navigation menu items
│   ├── music.yml            # Yearly music favorites
│   └── icon_map.yml         # Music platform icon mappings
│
├── _drafts/                 # Draft posts (empty currently)
├── assets/                  # Static assets
│   ├── css/
│   │   ├── style.css        # Main custom styles
│   │   ├── bulma.css        # Bulma framework (customized)
│   │   ├── syntax.css       # Code syntax highlighting
│   │   └── animation.css    # Custom animations
│   ├── js/
│   │   └── main.js          # JavaScript (currently empty)
│   ├── font/                # Custom fonts
│   └── img/                 # Images
│       ├── avatar.jpg
│       ├── misc/            # Miscellaneous images
│       ├── music/           # Album artwork
│       └── post-img/        # Post featured images
│
└── _site/                   # Generated site (build output)
```

## Build and Development Commands

### Prerequisites
- Ruby installed
- Bundler gem installed

### Setup
```bash
bundle install
```

### Local Development Server
```bash
bundle exec jekyll serve
```

### With Live Reload (recommended)
```bash
bundle exec jekyll serve --livereload
```

### Build for Production
```bash
bundle exec jekyll build
```

**Note:** Jekyll does NOT auto-reload `_config.yml` changes. Restart server if you modify it.

## Post Structure and Front Matter

Posts are Markdown files in `_posts/YYYY/YYYY-MM-DD-title.md` format.

### Required Front Matter
```yaml
---
layout: post
title: "Post Title"
author: Kecheng Zhang
---
```

### Optional Front Matter
```yaml
---
img: /assets/img/post-img/image.jpg      # Featured image
caption: "Image caption"                  # Image caption
lang: zh                                  # Language code
featured: true                            # Show on homepage featured section
tags: [tag1, tag2, tag3]                  # Post tags
excerpt: "Custom excerpt for previews"    # Manual excerpt (auto-generated if omitted)
refs:                                     # Bibliography
  names: ["Reference 1", "Reference 2"]
  links: ["http://example.com/1", "http://example.com/2"]
---
```

### Excerpts
- Auto-generated from first paragraph if `excerpt` not specified
- Use `<!--more-->` in content to control excerpt break point

## Code Conventions

### File Naming
- Posts: `YYYY-MM-DD-kebab-case-title.md`
- Layouts: `lowercase.html`
- Includes: `lowercase.html`
- Data files: `lowercase.yml`

### CSS Classes
- Uses **Bulma** utility classes extensively
- Custom classes in `style.css`:
  - `.is-font-kai` / `.is-font-hei` - Chinese font families
  - `.left-border` - Blue left border accent
  - `.post-img` - Post featured image styling
  - `.toc-*` - Table of contents components
  - `.hide-on-phone` - Mobile-only hide

### Color Variables (CSS)
```css
:root {
    --default-blue: #5c6fff;
    --hover-blue: #41b0f4;
}
```

## Key Features

### 1. Homepage (`index.html`)
- Displays **featured** posts (with `featured: true`)
- Shows 5 latest non-featured posts
- "View all" button links to blog.html

### 2. Blog Archive (`blog.html`)
- Chronological list of all posts
- Grouped by year with sidebar TOC
- Each post shows: title, excerpt, date, tags

### 3. Post Page (`_layouts/post.html`)
- Three-column layout: empty | content | TOC
- Sticky sidebar with auto-generated TOC from H1-H3
- Bibliography support via `refs` front matter
- "Related posts" recommendation at bottom

### 4. Tag System
- Tags link to `/tag?tag=TAGNAME`
- Dynamic filtering via JavaScript
- Tags displayed with Font Awesome tag icon

### 5. About Page (`about.html`)
- Two-column layout: avatar | bio
- "Yearly Music" section from `_data/music.yml`
- Music cards with platform links

### 6. Responsive Design
- Mobile-first with Bulma breakpoints
- `.hide-on-phone` hides elements on mobile (< 768px)
- Fixed navbar with blur backdrop effect

## Data Files Reference

### `_data/nav.yml`
Navigation menu items:
```yaml
- title: 首页 (display name)
  url: / (path)
```

### `_data/music.yml`
Yearly music favorites:
```yaml
- title: Song Title
  release: 2021      # Original release year
  year: 2025         # Featured year
  author: [Artist1, Artist2]
  img: /assets/img/music/cover.jpg
  default-link: "..."  # Default click target
  links:              # Platform links
    - name: Platform
      link: URL
```

### `_data/icon_map.yml`
Maps platform names to Font Awesome icons and colors:
```yaml
- name: Platform Name
  icon: fa-brands fa-iconname
  color: has-text-colorname
```

## Testing

There are no automated tests configured for this project.

**Manual testing checklist:**
- [ ] Site builds without errors: `bundle exec jekyll build`
- [ ] Homepage displays featured and latest posts
- [ ] Post pages render with correct layout
- [ ] Navigation links work correctly
- [ ] Tag filtering works on tag.html
- [ ] TOC sidebar works and highlights correctly
- [ ] Mobile layout looks acceptable
- [ ] Music cards display correctly

## Deployment

This site is configured for **GitHub Pages** deployment:

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Site deploys automatically from main branch

**Note:** Currently using `jekyll` gem directly instead of `github-pages` gem. This allows using latest Jekyll features but requires local build or compatible dependencies.

To use GitHub Pages native build:
1. Replace `gem "jekyll", "~> 4.4.1"` with `gem "github-pages", group: :jekyll_plugins`
2. Remove or adjust `theme: minima` (GitHub Pages has limited theme support)
3. Run `bundle update github-pages`

## Security Considerations

- No sensitive data in repository
- `.gitignore` excludes: `_site`, `.jekyll-cache`, `vendor`
- No user input processing (static site)
- External links open in new tab (`target="_blank"`)

## Troubleshooting

### Build fails with gem errors
```bash
bundle install
# or
bundle update
```

### Changes not reflecting
- `_config.yml` changes require server restart
- Check if file is in `exclude:` list in config
- Clear `_site` folder: `bundle exec jekyll clean`

### Windows-specific issues
- `tzinfo-data` and `wdm` gems are included for Windows compatibility
- Use Git Bash or PowerShell for best results

## License and Copyright

- Content: © 2023-2026 Kecheng Zhang. All rights reserved.
- Site notice: "本站文章请勿转载" (Do not repost articles from this site)
- Bulma CSS: MIT License
- Fonts: Check respective font licenses
