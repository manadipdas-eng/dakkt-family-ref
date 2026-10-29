# DAKKT Family Ref — Team 213

A responsive, offline-first browser prototype for the COE STEM 2026 Cycle 3 challenge.

## Features
- Three family games: Family Football, Heritage Quiz, and Ring Toss.
- Player names, team names, round duration, and points-per-success settings.
- Countdown timer, live scoreboard, manual score adjustments, decision log, and final result.
- Offline cached judging examples loaded from `demo-data.js`.
- Optional video/audio file selection UI for demonstration.

## Run locally
1. Keep `index.html`, `demo-data.js`, and this README in the same folder.
2. Open `index.html` in a modern browser. No install or API key is required.
3. Confirm teams, start the timer, select a cached scenario in the AI Judge desk, and review the suggested decision.

## Important limitation
The cached responses are scripted examples. This prototype does **not** analyse uploaded video/audio and does not perform real computer vision or speech recognition. The file picker is UI-only. Do not present cached decisions as real AI analysis. A production version needs a tested AI/media pipeline and clear human review for uncertain cases.

## Quick test checklist
- [ ] Select each of the three games.
- [ ] Confirm at least two players and start/pause the timer.
- [ ] Accept a successful cached demo and confirm score changes.
- [ ] Try the unclear example and confirm no points are awarded.
- [ ] Reject a decision and confirm the score stays the same.
- [ ] Open the deployed link in a private/incognito window.
