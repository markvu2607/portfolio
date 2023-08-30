## Mark Vu Portfolio

Mark Vu Portfolio is my portfolio.

## Technology

- [Nextjs](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com/)

## System Requirement

- [NodeJS](https://nodejs.org/en) (>= v18.17.0)
- [pnpm](https://pnpm.io/) (>= v8.6.12).

## Getting Started

```bash
pnpm install && pnpm dev
```

## Contributing

- Go to Github Project to create task and reference to an issue.

- Issue name template: `[<issue_type>] <name_of_issue>`:

  - `<issue_type>`: Feature, Docs, Bugfix, Config,...
  - Example: `[Feature] Do somethings`

- Branch name template: `<pr_type>/<issue_id>-<name_of_issue>`:

  - `<pr_type>`: feature, docs, bugfix, config,...
  - Example: `feature/123-do-somethings`.

- Commit template: `<name_of_issue>`:

  - Example: `Do somethings`.

- Pull request template:

  - Title: `[<issue_type>] <name_of_issue>`. Example: `[Feature] Do somethings`.
  - Description: Describe detail pr (if pr is so simple, do not need it), reference to issue_id.
  - Example for description:
    - `- Do somethings`
    - `- Fixes: #123`
  - Add more infomation in right side.

- Merging:

  - Only allow `Squash and Merge` option.
  - Add `<issue_type>` before default title. Example: `[Feature] Do somethings (#123)`.
