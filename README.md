# Overview

IndexedJobs.com (actual domain TBA) is a job board populated with scraped job postings from Indeed. A large language model applies tags to each job posting based on its description. Examples of tags include “Company is/isn’t run by a female CEO” or “Company requires you to wear suits in the office.” The goal is to enable job applicants to quickly find jobs that match their preferences on unusual metrics.

## Tech Stack

- **Frontend:** Next.js
- **Database:** Postgres (via Supabase)
- **Backend:** AWS Lambda script (https://github.com/maxawzsinger/indexedjobs.com-scraper) running every 24 hours to:
  - Scrape job postings.
  - Post to OpenAI batch processing API.
  - Retrieve results and upload them to Supabase.

### Current Scope

The script is currently scraping jobs in Sydney and deriving standard data from the descriptions (as defined in `table_schema.py`).

---

## To Do List

### Urgent Tasks

- **Implement Pagination:**
  - Add pagination to the jobs list component.
  - Implement paginated backend querying.
- **Type Safety in Table:**
  - Explore type safety when retrieving row values from TanStack Table... currently casting some values to the desired/known type in JSX.
- **Implement Search:**
- Add keyword/vector distance search functionality.
- **Filter Labels:** Ensure filter labels remain visible after a value is chosen and can remove filtering without having to search for value.
- **Type safe URL search parameters:** Enhance type safety when values from the database are cast to strings and put into URL search parameters.

### Optimizations

#### Performance

- **Database Optimization:** Move the database from the US West to the Sydney region for faster DB calls.

#### Cosmetic

- **Markdown Parsing:** Parse markdown from scraped posts into HTML for display in the job detail view.
- **Mobile View Styling:** Improve styling of filters in the mobile view.
- **Better filter label for non profit status:**

### Non-Urgent Tasks

- **Responsive Scroll Area:** Rewrite scroll area height calculation for responsiveness not calc.
- **Fallback Value in TanStack Table:** Add fallback value to `TanStackTable`'s `renderValue` function.
- **URL Search Params:** Update `use-url-search-params` to use Next.js APIs instead of the window API for route changes for consistency.
- **DB Schema Redesign:** Redesign the database schema to third normal form.
- **Lambda Script Logging:** Enhance logging within the Lambda script.
- **Type Generation from Supabase:** Investigate type generation from Supabase to make the Lambda function typesafe.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
