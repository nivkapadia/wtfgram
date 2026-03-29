# WTFgram

A Chromium browser extension that blocks Instagram Reels, Explore, and suggested content so you can use Instagram without getting sucked in.

## What it blocks

- **Reels** — navigating to `/reels` blacks out the content area
- **Explore** — navigating to `/explore` blacks out the content area
- **Suggested for you** — sections in the feed are hidden
- **Reels nav icon** — removed from the sidebar

The sidebar navigation (Home, DMs, etc.) stays fully intact.

## Installation

1. Clone or download this repo
2. Open your Chromium browser and go to `chrome://extensions`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the `wtfgram` folder
5. The extension is now active

## Files

| File | Purpose |
|---|---|
| `manifest.json` | Extension config, permissions, and entry points |
| `rules.json` | Declarative network blocking rules |
| `background.js` | Service worker — handles install and toggle state |
| `content.js` | Injected into Instagram — hides blocked content in the DOM |
| `popup.html` | Toggle UI that appears when you click the extension icon |
| `popup.js` | Reads/writes toggle state and messages background.js |

## Development notes

The extension currently includes an on/off toggle for development purposes. The final production version will remove the toggle and be always-on.

Instagram frequently changes its internal class names and DOM structure. If something stops working, inspect the relevant element and update the selectors in `content.js`.
