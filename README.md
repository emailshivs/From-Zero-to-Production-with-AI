# From Zero to Production with AI

A professional handbook framework for learning how modern software products move from first concept to production-ready systems with AI-assisted engineering practices.

This repository is intentionally structured as a scalable documentation product rather than a collection of notes. It is designed to support a long-form handbook, guided learning path, labs, assessments, reference material, and future publishing workflows.

## Purpose

The purpose of this project is to provide the documentation architecture for a comprehensive technical handbook covering the journey from building an initial SaaS product to operating production-grade, secure, AI-assisted systems.

This initial version creates the framework only. Chapter content, exercises, diagrams, and assessments will be authored in future iterations.

## Target Audience

This handbook is intended for:

- University students
- Junior software engineers
- Junior cybersecurity engineers
- Startup founders
- Self learners
- Technical architects

## Learning Outcomes

When fully authored, the handbook will help learners understand how to:

- Build and evolve a SaaS product from a minimal first release.
- Apply structured software development practices.
- Integrate quality engineering and testing workflows.
- Introduce security engineering and DevSecOps practices.
- Use AI engineering patterns responsibly in modern products.
- Operate production systems with reliability and observability.
- Scale engineering practices toward enterprise delivery models.

## Repository Structure

```text
.
├── README.md
├── mkdocs.yml
└── docs/
    ├── index.md
    ├── 00-editorial/
    ├── 01-learning-system/
    ├── 02-curriculum/
    ├── getting-started/
    ├── phase-00-build-first-saas/
    ├── phase-01-development/
    ├── phase-02-quality-engineering/
    ├── phase-03-security-engineering/
    ├── phase-04-ai-engineering/
    ├── phase-05-production-operations/
    ├── phase-06-enterprise-devsecops/
    ├── appendix/
    ├── assets/
    └── images/
```

## Technology Stack

The documentation site is designed for:

- [MkDocs](https://www.mkdocs.org/) as the static documentation generator.
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) as the documentation theme.
- Markdown as the source format.
- Mermaid for diagrams.
- Git for version control and contribution workflow.


## Deployment

This repository is configured for deployment on Cloudflare Pages using MkDocs Material.

| Setting | Value |
| --- | --- |
| Build command | `pip install -r requirements.txt && mkdocs build --strict` |
| Output directory | `site` |
| Dependencies | `requirements.txt` |
| Configuration | `mkdocs.yml` |

## Future Roadmap

Planned documentation milestones include:

1. Use the editorial standards as the required baseline for all new chapters.
2. Maintain the learning system as the planning layer for learner paths, progress evidence, and capstone outcomes.
3. Maintain the curriculum blueprint as the master map for phases, chapters, tools, diagrams, assessments, and enterprise alignment.
4. Define detailed chapter outlines for each phase.
5. Add learning objectives and estimated completion time per chapter.
6. Add diagrams, system architecture references, and visual learning aids.
7. Add guided labs and assessment rubrics.
8. Add glossary and reference material across phases.
9. Introduce versioned releases for cohorts, editions, or curriculum tracks.
10. Add publishing automation and documentation quality checks.

## Contribution Guide

The `docs/00-editorial/` section defines the mandatory publishing standards for future contributors, including editorial style, chapter structure, diagrams, screenshots, validation, labs, quizzes, prompts, versioning, glossary entries, and review workflow. The `docs/01-learning-system/` section defines learning paths, dashboards, capstones, certification levels, study plans, instructor guidance, student guidance, progress tracking, the skills matrix, and curriculum planning. The `docs/02-curriculum/` section defines the phase breakdown, chapter roadmap, ADR catalogue, failure labs, enterprise mappings, tool catalogue, diagram catalogue, capstone progression, and assessment framework.

Contributors should follow these principles:

- Preserve the phase-based learning path.
- Keep conceptual material, labs, quizzes, and glossary entries in their designated files.
- Use concise, professional, instructional writing.
- Prefer diagrams and structured examples when they improve comprehension.
- Keep navigation changes synchronized with `mkdocs.yml`.
- Avoid adding unreviewed chapter content to placeholder files until the chapter plan is approved.

## Versioning Approach

This handbook should use semantic documentation releases:

- **Major versions** for structural changes that reorganize phases or learning paths.
- **Minor versions** for new chapters, labs, assessments, or major instructional expansions.
- **Patch versions** for corrections, link fixes, formatting improvements, and small clarifications.

Recommended release examples:

- `v0.1.0` — initial documentation framework
- `v0.2.0` — approved chapter outlines
- `v1.0.0` — first complete handbook edition
