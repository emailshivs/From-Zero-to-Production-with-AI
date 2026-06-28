# Chapter Template

Every future chapter must follow this structure. Authors may add subsections, but they must not remove required sections.

## Required front matter

Each chapter must begin with metadata in this format:

```yaml
---
title: "Phase NN · Chapter NN: Chapter Title"
phase: NN
chapter: NN
status: draft
owner: "Author or team"
last_reviewed: YYYY-MM-DD
---
```

## Required chapter structure

```markdown
# Phase NN · Chapter NN: Chapter Title

## Learning objectives

- Objective 1
- Objective 2
- Objective 3

## Prerequisites

- Required knowledge
- Required tools
- Required completed chapters

## Estimated time

Approximate completion time: NN minutes

## Difficulty

Beginner | Intermediate | Advanced

## Business objective

Explain the practical business outcome this chapter supports.

## Layman's explanation

Explain the concept in plain language before using technical depth.

## Technical explanation

Explain the professional implementation details.

## Architecture

Describe the relevant system, workflow, or component architecture.

## Terminology

| Term | Definition |
| --- | --- |
| Term | Definition |

## Hands-on exercise

Provide the required practical exercise or link to the lab file.

## Validation

Explain how the learner proves the result is correct.

## Screenshots required

List every screenshot the learner or author must capture.

## Expected result

Describe the successful end state.

## Common mistakes

List predictable mistakes and how to avoid them.

## Troubleshooting

Provide diagnosis steps for common failures.

## Knowledge check

Add short questions that verify understanding.

## Interview questions

Add job-relevant questions connected to the chapter.

## Summary

Summarize what the learner can now do.

## Next chapter

Explain how the next chapter builds on this chapter.
```

## Section Requirements

### Learning objectives

Use measurable verbs such as identify, explain, configure, validate, compare, or troubleshoot.

Do not use vague verbs such as understand or learn unless paired with measurable evidence.

### Prerequisites

List tools, accounts, prior chapters, and background knowledge. If no prerequisites exist, state that explicitly.

### Estimated time

Estimate honestly. Include reading, setup, exercise, and validation time.

### Difficulty

Use one of three labels:

- Beginner: new concept with guided steps.
- Intermediate: assumes comfort with related tooling.
- Advanced: requires architecture, troubleshooting, or trade-off analysis.

### Business objective

Connect the chapter to a professional outcome such as reduced deployment risk, faster onboarding, improved security, or better product reliability.

### Layman's explanation

Use simple language and analogies only when they clarify the concept. Avoid childish phrasing.

### Technical explanation

Use precise terminology after the plain-language explanation. Include constraints, assumptions, and trade-offs.

### Architecture

Include a diagram when a process, dependency, system boundary, network path, or deployment workflow is involved.

### Terminology

Define only terms used in the chapter. Add broader terms to the glossary when they appear across multiple chapters.

### Hands-on exercise

The exercise must be reproducible. Provide commands, expected output, and validation steps.

### Validation

State pass criteria and fail criteria. Validation must be observable.

### Screenshots required

Screenshots must follow the screenshot standards document.

### Expected result

Describe the final state in objective terms.

### Common mistakes

Focus on mistakes that reviewers, learners, or instructors can realistically detect.

### Troubleshooting

Use symptom, cause, fix, and validation columns when possible.

### Knowledge check

Use questions that test comprehension, not memorization only.

### Interview questions

Use realistic junior-to-mid-level interview prompts.

### Summary

Summaries must be concise and outcome-focused.

### Next chapter

Preview the next logical learning step without teaching it in advance.
