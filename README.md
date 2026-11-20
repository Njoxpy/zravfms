# zravfms

This repository hosts the Zanzibar Revenue Authority (ZRA) VFMS Hotel API documentation site.
It is built with Next.js and a custom documentation source layer, with content authored in `content/docs`.

> This project is not affiliated with ZRA or VFMS. It is an independent documentation example created to help people understand how the system works.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser, then navigate to `/docs` to view the documentation.

## Project Structure

- `app/(home)` - landing and home pages for the site.
- `app/docs` - documentation routes and layout.
- `app/api/search/route.ts` - search API route used by the documentation site.
- `content/docs` - Markdown/MDX documentation pages.
- `lib/source.ts` - content source adapter for the docs.
- `source.config.ts` - documentation source configuration.

## Documentation Content

The main docs pages are:

- `content/docs/index.mdx` - documentation homepage.
- `content/docs/1intro.mdx` - VFMS hotel API introduction and required headers.
- `content/docs/2.mdx` - endpoint reference and example requests.
- `content/docs/3.mdx` - response codes and reporting requirements.
- `content/docs/test.mdx` - developer notes and implementation guidance.
- `content/docs/basic/` - VFMS Basic API (sales, B2B, institution, relief, seaport, error correction), based on `assets/VFMS_basicAPI_TESTV1.5 April 2024.pdf`.
- `content/docs/meta.json` - sidebar order and section separators.

## Build

Build the app for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Notes

Update or expand documentation by editing the files in `content/docs`.
Frontmatter metadata is used to surface titles and descriptions in the docs site.
