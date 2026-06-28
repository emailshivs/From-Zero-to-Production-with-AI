# Diagram Standards

## Purpose

Diagrams must clarify architecture, workflows, decisions, and relationships. A diagram is required when text alone would make the learner mentally assemble several moving parts.

## Approved Diagram Types

Use Mermaid as the default diagram format.

Approved types:

- Flowcharts.
- Sequence diagrams.
- Architecture diagrams.
- Network diagrams.
- Pipeline diagrams.
- Folder diagrams.
- Decision trees.

Use external image formats only when Mermaid cannot express the concept clearly.

## Mermaid Standards

- Store reusable Mermaid source files in `docs/assets/diagrams/` when diagrams become complex.
- Keep simple Mermaid diagrams inline in the chapter.
- Use readable node labels.
- Avoid decorative complexity.
- Use left-to-right flow for processes unless top-to-bottom is easier to read.

## Flowcharts

Use flowcharts for workflows, validation paths, and process stages.

Required direction:

```mermaid
flowchart LR
```

Use `TD` only for short vertical flows.

## Sequence Diagrams

Use sequence diagrams for interactions over time between users, services, systems, and APIs.

Required practices:

- Put the human actor first when present.
- Use system names consistently with the chapter terminology.
- Keep messages concise.
- Show error paths only when they support the learning objective.

## Architecture Diagrams

Architecture diagrams must show boundaries, responsibilities, and dependencies.

Required elements:

- User or actor.
- Application boundary.
- Data boundary.
- External services.
- Trust or security boundary when relevant.

## Network Diagrams

Network diagrams must identify:

- Client.
- Network segment.
- Entry point.
- Service boundary.
- Data store.
- Direction of communication.

Never imply open access where a firewall, security group, identity policy, or gateway exists.

## Pipeline Diagrams

Pipeline diagrams must show stages in order:

1. Source.
2. Build.
3. Test.
4. Security checks.
5. Package.
6. Deploy.
7. Validate.

Only include stages that exist in the scenario.

## Folder Diagrams

Use folder diagrams to explain repository structure.

Rules:

- Include only relevant folders.
- Mark generated or ignored folders when needed.
- Keep examples short enough to scan.

## Decision Trees

Use decision trees for troubleshooting, architecture choices, and learner branching paths.

Rules:

- Each decision node must be a question.
- Each branch must be mutually exclusive where possible.
- Each terminal node must recommend an action or result.

## Colors

Use a limited semantic palette:

| Purpose | Color |
| --- | --- |
| Primary flow | `#2563eb` |
| Success state | `#16a34a` |
| Warning state | `#f59e0b` |
| Failure or risk | `#dc2626` |
| Neutral system | `#64748b` |
| External dependency | `#7c3aed` |

Do not rely on color alone. Labels must communicate meaning without color.

## Naming

Diagram filenames must follow this pattern:

```text
phase-NN-chapter-NN-diagram-purpose.mmd
```

Example:

```text
phase-05-chapter-02-deployment-pipeline.mmd
```

## Captions

Every diagram must have a caption directly before or after it.

Caption format:

```text
Figure NN.NN.NN — Short descriptive caption.
```

## Numbering

Use phase, chapter, and sequence numbering:

- First diagram in Phase 03, Chapter 02: `Figure 03.02.01`.
- Second diagram in Phase 03, Chapter 02: `Figure 03.02.02`.

## Accessibility

Every diagram must be explained in nearby text. Do not require the reader to understand the diagram without supporting explanation.
