# Writing Style Guide

## Tone

Use a calm, professional, mentor-like tone. The handbook should sound authoritative without sounding intimidating.

The preferred voice is:

- Clear.
- Practical.
- Respectful.
- Structured.
- Encouraging.
- Precise.

Avoid hype, jokes, exaggeration, and marketing language.

## Sentence Length

Keep most sentences between 12 and 24 words. Use shorter sentences for warnings, safety instructions, and step outcomes.

Avoid stacking multiple ideas in one sentence. Split long explanations into smaller steps.

## Explanation Style

Use the following explanation sequence:

1. State the concept in plain language.
2. Explain why it matters in professional work.
3. Introduce the technical terms.
4. Show the concept in context.
5. Provide a validation or reflection point.

## Beginner-First Philosophy

Start from the learner’s likely mental model. Do not assume the learner knows production terminology, cloud architecture, secure software delivery, or AI engineering workflows.

Beginner-first does not mean shallow. It means each concept is introduced in the correct order.

## Progressive Learning

Each chapter must build on prior knowledge.

Required practices:

- Mention prerequisites before introducing a dependent concept.
- Avoid forward references unless the future chapter is named.
- Start with simple examples before complex scenarios.
- Close each chapter by preparing the learner for the next chapter.

## Jargon Rules

Do not use jargon unless it is explained.

When jargon is necessary:

1. Define it in plain language.
2. Use the professional term.
3. Add it to the terminology or glossary section.
4. Use the term consistently afterward.

## Consistent Terminology

Before drafting, review the local phase glossary and global glossary. If a term already exists, use the existing definition and wording.

If a new term conflicts with an existing term, resolve the conflict before publishing.

## Callout Boxes

Use callouts to highlight important learning moments. Do not overuse them.

### Tip

Use a tip for helpful advice that improves the learner’s efficiency.

```markdown
!!! tip "Tip"
    Use one terminal window for commands and another for documentation.
```

### Warning

Use a warning for actions that can cause data loss, security exposure, broken deployments, or confusing results.

```markdown
!!! warning "Warning"
    Do not commit credentials, tokens, or private keys to the repository.
```

### Exercise

Use an exercise when the learner must perform a task.

```markdown
!!! example "Exercise"
    Create the configuration file and run the validation command.
```

### Best Practice

Use a best practice for professional recommendations that should become habits.

```markdown
!!! success "Best Practice"
    Keep validation commands close to the instructions they verify.
```

### Common Mistake

Use a common mistake callout to prevent predictable learner errors.

```markdown
!!! failure "Common Mistake"
    Running commands from the wrong directory often creates files in the wrong location.
```

### Definition

Use a definition callout when introducing a term that the learner must remember.

```markdown
!!! quote "Definition"
    A deployment pipeline is an automated sequence that builds, tests, and releases software.
```

### Real World Example

Use a real-world example to connect the concept to professional practice.

```markdown
!!! info "Real World Example"
    A startup may use a lightweight pipeline first and expand it as the team grows.
```

## Style Checklist

Before submitting a chapter, confirm that:

- The tone is professional and instructional.
- The learner is never blamed for confusion.
- Terms are introduced before use.
- Commands and expected results are separate.
- Callouts are purposeful, not decorative.
- The final summary reinforces the chapter objective.
