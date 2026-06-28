# Lab Framework

## Purpose

Labs convert concepts into practical work. Every lab must be reproducible, safe, scoped, and validated.

## Required Lab Sections

Every lab must include:

1. Objective.
2. Business scenario.
3. Theory.
4. Step-by-step instructions.
5. Validation.
6. Common failures.
7. Cleanup.

## Lab Metadata

Each lab begins with metadata:

```yaml
---
title: "Lab NN.NN-A: Lab Title"
phase: NN
chapter: NN
lab: A
estimated_time: NN minutes
difficulty: Beginner | Intermediate | Advanced
---
```

## Objective

The objective must state what the learner will build, configure, test, secure, or validate.

Use one sentence where possible.

## Business Scenario

Explain why this lab matters in a real organization.

The scenario must answer:

- Who needs this capability?
- What problem does it solve?
- What risk or value does it address?

## Theory

Provide only the theory required to complete the lab safely and correctly. Link back to the chapter for deeper explanations.

## Step-by-Step Instructions

Steps must be ordered, testable, and specific.

Rules:

- Use numbered steps.
- Put commands in fenced code blocks.
- State the directory where commands must run.
- Explain expected results after important steps.
- Do not combine unrelated actions in one step.

## Validation

Each lab must include validation evidence.

Validation must define:

- Command or action.
- Expected output.
- Pass criteria.
- Fail criteria.
- Required screenshot, if any.

## Common Failures

Use this table format:

| Symptom | Likely cause | Fix | Validation |
| --- | --- | --- | --- |
| Error message or behavior | Probable reason | Corrective action | How to confirm |

## Cleanup

Cleanup is required when the lab creates resources, costs money, changes security posture, starts services, or modifies local state.

Cleanup must include:

- Commands or UI steps.
- How to verify cleanup.
- Warning for resources that may continue to incur cost.

## Safety Rules

Labs must not require learners to:

- Publish credentials.
- Disable security controls without restoring them.
- Use production accounts for experiments.
- Share private data.
- Run destructive commands without clear warnings and cleanup.
