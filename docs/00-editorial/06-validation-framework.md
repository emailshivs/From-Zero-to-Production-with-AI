# Validation Framework

## Purpose

Validation proves that the learner completed the work correctly. Every chapter and lab must include objective validation steps.

## Required Validation Elements

Every chapter must include:

- Completion checklist.
- Pass criteria.
- Fail criteria.
- Expected screenshots.
- Expected output.
- Self assessment.

## Completion Checklist

A checklist must describe visible or measurable completion items.

Example format:

```markdown
- [ ] Required file exists.
- [ ] Command completes without errors.
- [ ] Expected output appears.
- [ ] Screenshot captured and named correctly.
```

Do not use vague checklist items such as “understand the concept.”

## Pass Criteria

Pass criteria define the minimum acceptable successful result.

Good pass criteria:

- The command exits with status code `0`.
- The dashboard shows a successful deployment status.
- The API returns the expected response body.

Poor pass criteria:

- The learner feels comfortable.
- The setup looks good.

## Fail Criteria

Fail criteria help learners and reviewers identify unsuccessful work.

Examples:

- The command exits with a nonzero status code.
- The expected file is missing.
- The screenshot does not match the expected state.
- Required validation evidence is absent.

## Expected Screenshots

List screenshots by filename and purpose.

Required format:

| Screenshot | Purpose | Required |
| --- | --- | --- |
| `phase-NN-chapter-NN-result.png` | Shows final passing state | Yes |

## Expected Output

When a command is used, provide a short expected output pattern.

Rules:

- Do not require exact output when versions, timestamps, or paths vary.
- Mark variable values clearly.
- Include error-free completion conditions.

## Self Assessment

Each chapter must include learner reflection questions.

Required categories:

- What did you complete?
- What evidence proves it works?
- What failed or required troubleshooting?
- What would you explain in a technical interview?

## Validation Evidence

For labs, validation evidence may include:

- Command output.
- Test reports.
- Screenshots.
- Configuration file excerpts.
- Logs with sensitive data removed.
- Repository commit references.

## Reviewer Checklist

Reviewers must confirm that validation is:

- Reproducible.
- Objective.
- Aligned with the chapter objective.
- Clear enough for a beginner.
- Free of hidden assumptions.
