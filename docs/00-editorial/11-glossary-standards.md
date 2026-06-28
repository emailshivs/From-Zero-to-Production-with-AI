# Glossary Standards

## Purpose

Glossaries provide consistent terminology across the handbook. They reduce confusion, especially when software engineering, cybersecurity, operations, and AI use similar terms differently.

## Glossary Levels

Use two glossary levels:

- Phase glossary for terms used mainly within one phase.
- Appendix glossary for terms used across the entire handbook.

## Entry Format

Each glossary entry must use this format:

```markdown
### Term

**Definition:** One or two clear sentences.

**Context:** Explain where the term appears in the handbook.

**Related terms:** Term A, Term B.
```

## Definition Rules

Definitions must be:

- Clear.
- Short.
- Accurate.
- Beginner-friendly.
- Consistent with chapter usage.

Avoid circular definitions.

Poor definition:

```text
A deployment is when you deploy software.
```

Better definition:

```text
A deployment is the process of releasing a software change into an environment where it can run.
```

## Term Selection

Add a term when it is:

- Required to understand a chapter.
- Used across multiple pages.
- Commonly misunderstood.
- Ambiguous across disciplines.
- Part of a validation or lab instruction.

Do not add obvious everyday words unless they have a technical meaning.

## Acronyms

Define acronyms on first use.

Format:

```text
continuous integration and continuous delivery (CI/CD)
```

After first use, the acronym may be used alone if the meaning remains clear.

## Cross-References

Use related terms to connect concepts. Do not duplicate long explanations across entries.

Example related terms:

```text
Related terms: deployment pipeline, release, environment.
```

## Conflict Resolution

If two authors define the same term differently:

1. Identify the discipline-specific meaning.
2. Decide whether one global definition is sufficient.
3. If necessary, create scoped definitions.
4. Update affected chapters.
5. Record the terminology decision in review notes.

## Review Checklist

A glossary entry is ready when:

- The definition is understandable to the target audience.
- The term is used in at least one chapter or lab.
- The wording matches chapter usage.
- Related terms are accurate.
- Acronyms are expanded.
