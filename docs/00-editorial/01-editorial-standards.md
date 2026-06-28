# Editorial Standards

## Purpose

These standards define the required editorial rules for every chapter, lab, quiz, diagram, prompt, glossary entry, and reference page in this handbook. They exist to make contributions from multiple authors feel like one coherent publication.

## Audience

Write for a mixed technical audience:

- University students preparing for professional engineering work.
- Junior software engineers learning production practices.
- Junior cybersecurity engineers learning secure delivery.
- Startup founders making product and architecture decisions.
- Self learners building an employable portfolio.
- Technical architects who need a structured reference path.

Assume the reader is intelligent and motivated, but do not assume professional production experience.

## Reading Level

Use a clear professional style at approximately first-year university to early-career professional level.

Required practices:

- Prefer direct explanations over academic phrasing.
- Define specialized terms before relying on them.
- Use short paragraphs.
- Introduce concepts before tools.
- Explain why a task matters before explaining how to do it.

## Terminology

Use one term consistently for one concept. Do not introduce synonyms for variety.

Examples:

| Preferred term | Avoid mixing with |
| --- | --- |
| production environment | live environment, prod system, real system |
| deployment pipeline | release pipeline, CI/CD flow, delivery workflow |
| validation | verification, checking, proving |
| learner | student, reader, user, participant |

When a synonym is unavoidable, add it to the phase or global glossary.

## Grammar Rules

- Use American English.
- Use active voice by default.
- Use second person for instructions: “You will configure...”
- Use present tense for explanations.
- Use future tense only for upcoming steps or roadmap content.
- Avoid idioms, slang, jokes, sarcasm, and culture-specific references.
- Avoid contractions in formal instructions when precision matters.
- Use Oxford commas in lists.

## Naming Conventions

- Use lowercase hyphenated filenames: `chapter-03.md`.
- Use lowercase hyphenated folders: `phase-03-security-engineering`.
- Use descriptive diagram filenames: `phase-03-chapter-02-threat-model-flow.mmd`.
- Use descriptive screenshot filenames: `phase-02-chapter-01-test-results-pass.png`.
- Use consistent label casing for UI references and command names.

## Headings

Use headings to create predictable scanning paths.

Rules:

- Each page has exactly one H1.
- Use H2 for required chapter sections.
- Use H3 for subsections within a required section.
- Do not skip heading levels.
- Use title case for H1 titles.
- Use sentence case for H2 and lower headings unless the heading contains a proper noun.

## Numbering

Number phases and chapters consistently.

- Phase numbers use two digits: `Phase 00`, `Phase 01`, `Phase 02`.
- Chapter numbers use two digits inside a phase: `Chapter 01`, `Chapter 02`.
- Labs use the phase and chapter prefix: `Lab 03.02-A`.
- Figures use phase, chapter, and sequence: `Figure 03.02.01`.
- Tables use phase, chapter, and sequence: `Table 03.02.01`.

## Chapter Numbering

A chapter title should follow this pattern:

```text
Phase NN · Chapter NN: Descriptive Title
```

Example:

```text
Phase 02 · Chapter 03: Test Strategy for Web Applications
```

Do not renumber published chapters without a major or minor release note.

## Phase Numbering

Phase numbers represent the learning path and must remain stable:

| Phase | Scope |
| --- | --- |
| Phase 00 | Build first SaaS |
| Phase 01 | Development |
| Phase 02 | Quality engineering |
| Phase 03 | Security engineering |
| Phase 04 | AI engineering |
| Phase 05 | Production operations |
| Phase 06 | Enterprise DevSecOps |

## References

Use references when content depends on an external specification, official documentation, standard, or vendor feature.

Rules:

- Prefer primary sources.
- Link to stable documentation pages, not marketing pages.
- Include access dates only for volatile resources.
- Do not cite unofficial blogs as authoritative sources unless clearly marked as commentary.
- Summarize external content in original words.

## Hyperlinks

- Use descriptive link text.
- Avoid “click here.”
- Link on first mention in a page, not every repeated mention.
- Verify links during review.
- Avoid raw URLs in body text unless the URL itself is the subject.

## Glossary Usage

Use glossary entries for terms that are:

- Introduced for the first time.
- Critical to later chapters.
- Frequently confused by beginners.
- Used differently across software, security, operations, or AI contexts.

Glossary entries must follow the glossary standards document.
