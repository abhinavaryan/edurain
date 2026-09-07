# Agent Schema & Instructions

**CRITICAL INSTRUCTION**: This directory is a persistent, compounding knowledge base. Do not delete or overwrite historical context without explicit permission.

## Workflows

### 1. Ingesting Raw Sources
- Place all raw, unmodified source files and external documentation into the aw/ directory.
- Do NOT modify the contents of raw files.

### 2. Synthesizing & Cross-Referencing
- Extract concepts from raw sources and synthesize them into markdown pages in the concepts/ directory.
- Create profiles for people, organizations, and projects in the entities/ directory.
- Use wiki-style links (e.g., [[Concept Name]]) to cross-reference between concepts and entities.

### 3. Tracking Actions
- Every time you perform an action, ingest data, or synthesize a concept, you MUST append a log entry to log.md.
- Format: ## [YYYY-MM-DD] action | Description
- Update index.md if new high-level categories or crucial entry points are created.

### 4. Auto-Syncing
- Use scripts provided in the scripts/ directory to auto-sync updates from the main project into this folder.
- Ensure automated syncs also log their actions in log.md.
