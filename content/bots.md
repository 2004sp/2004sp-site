# Progressive Bots — The AI System

The bot system is the core of 2004SP Progressive. When the server starts, bots spawn at Lumbridge and immediately begin progressing — choosing skills, heading to training spots, banking, and interacting with the world exactly as a dedicated player would.

## How Bots Think

Each bot evaluates its current level in all 19 skills and selects the highest-priority training task based on a configurable progression table. Early-game bots fish at Barbarian Village, cut trees near Draynor, and mine copper and tin at the Lumbridge mine. Mid-game bots unlock the Mining Guild, train at Gnome Stronghold Agility, and begin questing.

Bots make real decisions — they check their inventory, assess their food supply before entering the Wilderness, and switch tasks when a location is crowded or inaccessible.

## Behaviour Catalogue

- **Skilling:** Optimal spot selection per level. Banking when inventory full. Re-gearing between sessions.
- **Questing:** Bots complete quests to unlock skills, areas, and experience rewards.
- **Combat:** Progressive training from chickens and cows through to Greater Demons and Chaos Druids.
- **Trading:** Bots offer trades near banks at approximate 2004 street prices.
- **Scamming:** A subset of bots uses deceptive trade tactics — part of the authentic social ecosystem.
- **PvP:** Combat-ready bots enter the Wilderness at appropriate combat levels and use protection prayers.

## Phrases and Social Interaction

Bots use a curated phrase library (maintained by K-andy) that adapts to context. A bot banking at Varrock West might greet you. One training at the Chaos Altar might warn you about pkers. One in the Wilderness might trash-talk before speccing.

## Configuration

Bot count, spawn rate, skill weights, and aggression levels are all configurable via the server config files. You can run a small, quiet world or a densely populated server where hundreds of bots compete for the same fishing spots simultaneously.
