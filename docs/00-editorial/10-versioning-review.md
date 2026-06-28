# Versioning and Review

## Purpose

Versioning and review rules protect the handbook from inconsistent structure, unverified instructions, and uncontrolled changes. Every published change must be traceable.

## Semantic Versioning

Use semantic versioning for handbook releases:

```text
MAJOR.MINOR.PATCH
```

### Major Versions

Use a major version for changes that alter the learning path or create breaking changes for readers, instructors, or automation.

Examples:

- Reordering phases.
- Renumbering published chapters.
- Removing a completed phase.
- Changing the required chapter template.

### Minor Versions

Use a minor version for new instructional material or substantial enhancements.

Examples:

- Adding a chapter.
- Adding a lab.
- Adding a quiz.
- Adding a new appendix section.

### Patch Versions

Use a patch version for corrections and small improvements.

Examples:

- Fixing typos.
- Correcting a broken link.
- Updating a screenshot.
- Clarifying a paragraph without changing learning outcomes.

## Chapter Lifecycle

Each chapter moves through these states:

1. Proposed.
2. Draft.
3. Technical review.
4. Editorial review.
5. Validation review.
6. Approved.
7. Published.
8. Maintained.
9. Deprecated, if replaced or retired.

## Review Workflow

Every chapter requires these reviews before publication:

| Review type | Purpose |
| --- | --- |
| Technical review | Confirms technical accuracy and safety |
| Editorial review | Confirms style, tone, structure, and terminology |
| Validation review | Confirms steps and expected results are reproducible |
| Accessibility review | Confirms diagrams, screenshots, and text are usable |

## Approval Workflow

A chapter may be approved only when:

- Required template sections are complete.
- Validation steps pass.
- Diagrams and screenshots follow standards.
- Glossary terms are defined.
- References are accurate.
- AI-generated content has been reviewed.
- Navigation is updated.

## Release Process

Recommended release process:

1. Freeze candidate content.
2. Run documentation checks.
3. Verify navigation and links.
4. Confirm version number.
5. Update release notes.
6. Tag the release.
7. Publish the documentation site.
8. Record known issues.

## Change Log Expectations

Every release note should include:

- Added material.
- Changed material.
- Fixed material.
- Deprecated material.
- Known limitations.

## Deprecation Rules

Deprecated content must remain available until the next major release unless it is unsafe.

Mark deprecated pages with:

- Reason for deprecation.
- Replacement content.
- Effective date.
- Removal target, if known.
