# Screenshot Standards

## Purpose

Screenshots prove expected visual states, support visual learners, and reduce ambiguity in labs. Use screenshots when the learner must compare a visible interface, result, dashboard, or configuration state.

## Resolution

Use a minimum width of 1440 pixels for desktop screenshots when possible.

Recommended settings:

- Desktop browser width: 1440 pixels or wider.
- Browser zoom: 100%.
- Terminal font: readable at normal documentation scale.
- Image format: PNG for UI screenshots, SVG for vector exports, JPEG only for photographic images.

## Annotations

Annotations must guide attention without hiding important content.

Approved annotations:

- Numbered markers.
- Thin bounding boxes.
- Short labels.
- Arrows for direction or sequence.

Avoid excessive arrows, large blocks of text, or decorative marks.

## Highlighting

Use highlighting only for the relevant control, setting, command output, or status indicator.

Use consistent highlight colors:

| Purpose | Color |
| --- | --- |
| Primary focus | Yellow |
| Success state | Green |
| Warning state | Orange |
| Error state | Red |

## Cropping

Crop screenshots to the smallest region that still provides context.

Rules:

- Keep page title, breadcrumb, or command prompt when needed for orientation.
- Remove unrelated desktop elements.
- Do not crop away status bars or success messages that prove completion.
- Do not include private data, credentials, tokens, email addresses, or personal account details.

## Naming

Screenshot filenames must follow this pattern:

```text
phase-NN-chapter-NN-screenshot-purpose.png
```

Example:

```text
phase-02-chapter-01-test-results-pass.png
```

For lab-specific screenshots, include the lab identifier:

```text
phase-03-chapter-02-lab-a-policy-result.png
```

## Storage

Store screenshots in:

```text
docs/images/phase-NN/chapter-NN/
```

Create folders only when screenshots are added.

## Captions

Every screenshot must have a caption.

Caption format:

```text
Screenshot NN.NN.NN — Short descriptive caption.
```

## Alt Text

Every screenshot must include alt text that describes the important information, not just the appearance.

Good alt text:

```text
Test results page showing all pipeline checks passing.
```

Poor alt text:

```text
Screenshot of test page.
```

## Privacy and Security

Before publishing a screenshot, verify that it does not reveal:

- Credentials.
- API keys.
- Tokens.
- Internal hostnames.
- Private repository names.
- Personal information.
- Customer data.
- Billing or account identifiers.

## Screenshot Review Checklist

A screenshot is ready when:

- It supports a required learning or validation point.
- It follows naming and storage rules.
- It has a caption and alt text.
- It contains no private or sensitive data.
- It remains readable at documentation scale.
