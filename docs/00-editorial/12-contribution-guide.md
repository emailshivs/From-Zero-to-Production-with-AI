# Contribution Guide

## Purpose

This guide explains how contributors add and review chapters, diagrams, screenshots, labs, quizzes, glossary entries, and AI-generated material.

## Before Contributing

Before contributing, read:

1. Editorial standards.
2. Writing style guide.
3. Chapter template.
4. Relevant diagram, screenshot, lab, quiz, glossary, and prompt standards.

## How to Add a Chapter

1. Confirm the phase and chapter number.
2. Create or update the chapter file using lowercase hyphenated naming.
3. Apply the required chapter template.
4. Add learning objectives and prerequisites.
5. Draft the chapter using the writing style guide.
6. Add diagrams, screenshots, labs, quizzes, and glossary entries as needed.
7. Add validation steps and expected results.
8. Update `mkdocs.yml` navigation.
9. Run local documentation checks when available.
10. Submit the chapter for review.

## How to Review a Chapter

Reviewers must check:

- Template completeness.
- Technical accuracy.
- Safety and security.
- Reading level.
- Terminology consistency.
- Validation quality.
- Screenshot and diagram compliance.
- Link accuracy.
- Navigation updates.
- AI-generated content review notes.

## How Diagrams Are Added

1. Decide whether a diagram is necessary.
2. Use Mermaid unless a different format is justified.
3. Follow diagram naming and numbering standards.
4. Add a caption.
5. Explain the diagram in surrounding text.
6. Confirm the diagram renders correctly.

## How Screenshots Are Added

1. Capture the screenshot at the required resolution.
2. Remove sensitive information.
3. Crop for relevance.
4. Add annotations only when helpful.
5. Save in the required folder.
6. Add caption and alt text.
7. Confirm readability at documentation scale.

## How AI-Generated Content Is Reviewed

AI-generated content may assist drafting, examples, refactoring, or prompt-based exercises, but it is never accepted without review.

Reviewers must verify:

- The output is technically correct.
- The output does not include invented facts, commands, APIs, or citations.
- The output follows handbook style.
- The output does not expose sensitive data.
- The prompt record documents purpose, input, prompt, expected output, validation, and limitations.

## Pull Request Expectations

Every pull request should include:

- Summary of changes.
- Files changed.
- Validation performed.
- Screenshots or rendered previews when visual output changes.
- Known limitations.
- Review areas needing special attention.

## Contributor Quality Bar

A contribution is ready when another contributor can:

- Read the chapter without needing private context.
- Run the steps and obtain the expected result.
- Understand the business and technical reason for the material.
- Validate completion objectively.
- Maintain the material in a future release.
