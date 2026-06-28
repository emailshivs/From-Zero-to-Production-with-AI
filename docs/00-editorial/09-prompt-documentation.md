# Prompt Documentation

## Purpose

AI prompts used in the handbook must be documented so learners can understand purpose, input, expected output, and limitations. Prompt documentation also makes AI-assisted exercises auditable and reproducible.

## Required Prompt Record

Every AI prompt used in a chapter or lab must document:

- Purpose.
- Tool.
- Input.
- Prompt.
- Expected output.
- Validation.
- Known limitations.

## Prompt Record Template

~~~markdown
## Prompt record: Short name

### Purpose

Explain why the prompt is used.

### Tool

Name the AI tool, model family, or product category when known.

### Input

List files, context, data, or constraints provided to the tool.

### Prompt

```text
Paste the exact prompt used by the learner or author.
```

### Expected output

Describe the required structure, format, or result.

### Validation

Explain how the output must be checked before use.

### Known limitations

List risks, assumptions, and likely failure modes.
~~~

## Prompt Quality Rules

Prompts must be:

- Specific.
- Contextual.
- Bounded.
- Reviewable.
- Safe for the learner to run.

Avoid prompts that ask an AI tool to make hidden decisions without explaining the criteria.

## AI Output Review

AI-generated output must be reviewed before publication or implementation.

Review must check:

- Technical correctness.
- Security implications.
- Licensing or attribution concerns.
- Hallucinated commands, APIs, flags, or references.
- Consistency with handbook terminology.
- Alignment with the chapter objective.

## Sensitive Data Rules

Never include secrets, credentials, private keys, customer data, or unpublished internal information in prompts.

If a prompt needs realistic data, use synthetic examples.

## Known Limitation Categories

Document limitations in these categories when relevant:

- Accuracy.
- Recency.
- Security.
- Bias.
- Cost.
- Reproducibility.
- Tool availability.
- Model-specific behavior.

## Prompt Versioning

If a prompt changes the learner result, update the chapter version or changelog entry.

Prompt updates must record:

- Previous prompt intent.
- Reason for change.
- New validation requirement.
