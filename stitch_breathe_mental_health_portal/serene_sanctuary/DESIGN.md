---
name: Serene Sanctuary
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#424842'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#737972'
  outline-variant: '#c2c8c0'
  surface-tint: '#4a654e'
  primary: '#4a654e'
  on-primary: '#ffffff'
  primary-container: '#8ba88e'
  on-primary-container: '#233d29'
  inverse-primary: '#b0ceb2'
  secondary: '#655974'
  on-secondary: '#ffffff'
  secondary-container: '#ecdcfd'
  on-secondary-container: '#6b5f7b'
  tertiary: '#8e4e14'
  on-tertiary: '#ffffff'
  tertiary-container: '#dd8f50'
  on-tertiary-container: '#592c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cceace'
  primary-fixed-dim: '#b0ceb2'
  on-primary-fixed: '#07200f'
  on-primary-fixed-variant: '#334d38'
  secondary-fixed: '#ecdcfd'
  secondary-fixed-dim: '#d0c1e0'
  on-secondary-fixed: '#21172e'
  on-secondary-fixed-variant: '#4d425c'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb780'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6f3800'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  headline-xl:
    fontFamily: Nunito Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Nunito Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Nunito Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Nunito Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  crisis-link:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
---

## Brand & Style

The design system is centered on the concept of "The Digital Breath"—a space that feels expansive, soft, and safe. It rejects the cold, sterile aesthetics of traditional medical platforms in favor of a "trusted friend" persona. The target audience includes individuals seeking emotional refuge, requiring an interface that reduces cognitive load and evokes a sense of immediate tranquility.

The design style is a blend of **Soft Minimalism** and **Organic Tactility**. It utilizes generous whitespace to give content "room to breathe," paired with gentle depth and fluid, non-geometric background elements (blobs) to humanize the digital experience. Every interaction should feel intentional and calm, avoiding jarring transitions or aggressive prompts.

## Colors

The palette is derived from natural, soothing elements to establish an atmosphere of groundedness.

*   **Primary (Soft Sage):** Used for main actions, active states, and primary iconography. It represents growth and stability.
*   **Secondary (Muted Lavender):** Used for supportive elements, secondary tags, and subtle background shifts. It provides a sense of peace.
*   **Neutral (Warm Cream):** The foundational surface color. Unlike pure white, this off-white base reduces eye strain and feels more "human" and inviting.
*   **Accent (Soft Coral):** Reserved strictly for Call-to-Action (CTA) elements and the persistent "Crisis Support" link to ensure visibility without creating alarm.
*   **Feedback Colors:** Use muted versions of standard status colors (e.g., a dusty rose for errors, a pale gold for warnings) to maintain the gentle tone.

## Typography

The typography strategy prioritizes approachability and legibility. 

**Nunito Sans** is used for headings; its rounded terminals harmonize with the organic shape language of the design system, making titles feel soft rather than authoritative. 

**Work Sans** serves as the body face, providing a stable and neutral counterpoint that ensures long-form therapeutic content is easy to digest. 

Line heights are intentionally generous (1.6x for body text) to prevent the "wall of text" effect, which can be overwhelming for users in distress. All caps should be used sparingly, reserved only for small labels to denote categories.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with exaggerated inner margins. Content should never feel cramped. 

*   **Desktop:** A 12-column grid with wide 24px gutters. Use "Centered Content" patterns for articles and exercises to minimize eye scanning.
*   **Mobile:** A 4-column grid with 16px gutters and 20px side margins.
*   **Vertical Rhythm:** Use large vertical gaps (80px+) between major sections to emphasize the "breathe" metaphor. 

Backgrounds should feature "Organic Blobs"—asymmetrical, soft-edged shapes in secondary or tertiary colors that break the rigid grid lines and sit behind text or illustrations to add depth without clutter.

## Elevation & Depth

This design system uses **Ambient Shadows** and **Tonal Layering** to create a sense of gentle presence.

*   **Surface Depth:** Objects do not "float" high above the background. Use low-diffusion shadows (Blur: 20px, Spread: 0, Opacity: 5%) with a slight tint of the Primary color (#8BA88E) instead of pure black.
*   **Interactive States:** On hover, cards should subtly lift (shadow opacity increases slightly) or shift color, never snapping abruptly.
*   **The "Crisis" Layer:** The Crisis Support link should be globally persistent (sticky), utilizing a slightly higher elevation or a blurred backdrop to remain distinct from the scrolling content beneath it.

## Shapes

The shape language is strictly non-angular. 

*   **Primary Containers:** Use `rounded-lg` (1rem) for standard cards and `rounded-xl` (1.5rem) for main hero containers or large instructional blocks.
*   **Interactive Elements:** Buttons and input fields should utilize `rounded-lg` or fully rounded pill shapes to maximize the "soft" feel.
*   **Illustrations:** Any decorative elements or iconography should feature rounded stroke caps and organic, asymmetrical forms. Avoid sharp 90-degree corners in all UI decorations.

## Components

### Buttons
*   **Primary:** Solid Sage Green (#8BA88E) with white text. High roundedness.
*   **Secondary:** Outlined Sage Green or Muted Lavender background with 10% opacity.
*   **Crisis Support:** Persistent button or link styled in Soft Coral (#F4A261). It should feature a subtle "pulse" animation or a high-contrast underline to ensure it is the most discoverable element on any page.

### Cards
Cards should have a subtle 1px border in a slightly darker cream than the background, with a soft ambient shadow. Internal padding should be at least 32px to maintain the airy feel.

### Input Fields
Inputs should have a warm off-white fill, no harsh dark borders, and a soft focus ring in Sage Green. Helper text should be written in a supportive, gentle tone (e.g., "Take your time," "This is a safe space").

### Chips & Tags
Used for mood tracking or topic selection. Use the Muted Lavender (#A799B7) with low-contrast text. High roundedness (pill-shaped).

### Lists
Avoid standard bullet points. Use soft organic icons (like a small leaf or a soft dot) to denote list items. Increase the vertical spacing between list items to maintain legibility.