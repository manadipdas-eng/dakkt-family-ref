# DAKKT Family Ref — Team 213 (Family AI Game Day, Cycle 3)
Open `index.html` in Chrome/Edge (no install, API key or internet). Everything runs on-device.

## Games (football + 2 originals; none are the PDF examples)
- **Family Football** (team, video): calibrate ball colour, player shirt colours and both goals once; the AI tracks them frame-by-frame, detects goals, possession per team/player and MVP.
- **Falcon Freeze** (individual, video): frame-difference motion analysis of a judged window; stillness % → points.
- **Silent Majlis** (team, audio): RMS loudness analysis with ambient calibration; time held quiet → points.

## Flow
Choose game → players/teams → rules, rounds, turn timer, tie-break → upload or record clip → **Run AI judge** → result with reason/evidence → Apply → final results (winner, facts, MVP) → choose another game.

## Signed reports
Every result is a JSON `{payload, sig}`; `sig` = HMAC-SHA256 (hex) of the key-sorted, compact JSON payload with `KEY` in `index.html`. The app verifies before applying, and rejects imported/edited reports. An external Python judge can produce reports the same way.

## Honest limits
Colour-based tracking needs a steady camera, distinct shirt/ball colours and good light. Speech recognition is not included. The Python judge path is not implemented (in-app judge only). Not yet tested with real family footage — test and tune thresholds (tolerance 55, motion 6, 22% possession radius) before the demo.
