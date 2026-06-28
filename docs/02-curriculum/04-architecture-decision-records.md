# Architecture Decision Records Catalogue

## Purpose

The ADR catalogue lists major technology decisions planned for the handbook. Each ADR entry is a curriculum placeholder, not a final implementation decision.

| ADR | Technology | Decision area | Rationale | Alternatives | Introduced |
| --- | --- | --- | --- | --- | --- |
| ADR-001 | Material for MkDocs | Documentation publishing platform | Supports professional navigation, search, themes, and Markdown extensions. | Plain MkDocs, Docusaurus, Sphinx | Repository setup |
| ADR-002 | Markdown | Primary authoring format | Portable, reviewable, and friendly to technical contributors. | AsciiDoc, reStructuredText | Editorial standards |
| ADR-003 | Mermaid | Diagram source format | Keeps diagrams version-controlled and text-reviewable. | Draw.io, Lucidchart, PlantUML | Diagram standards |
| ADR-004 | Git | Version control | Tracks curriculum, content, review history, and releases. | Mercurial, SVN | Getting started |
| ADR-005 | GitHub | Collaboration and review | Supports pull requests, issues, code review, and release workflows. | GitLab, Bitbucket, Azure DevOps | Development |
| ADR-006 | CI/CD Platform | Automated validation | Runs checks, builds documentation, and validates changes. | GitHub Actions, GitLab CI, Azure Pipelines | Quality and DevSecOps |
| ADR-007 | AI Assistant | AI-augmented workflow | Supports drafting, review, troubleshooting, and prompt literacy with validation. | Manual-only workflow, alternate AI tools | AI engineering |
| ADR-008 | Static Hosting | Documentation deployment | Publishes handbook as a stable web experience. | Read the Docs, GitHub Pages, Netlify | Production operations |
| ADR-009 | Security Scanning | Risk detection | Finds secrets, dependency risk, and policy violations early. | Manual review, vendor scanners | Security engineering |
| ADR-010 | Progress Dashboard | Learning evidence tracking | Makes completion measurable across learners and instructors. | Spreadsheet, LMS, GitHub Projects | Learning system |

## ADR Usage

Future chapters should reference these ADRs when explaining why a tool, workflow, or platform appears in the curriculum. New major technology choices require a new ADR entry before chapter content is drafted.
