# Tasklane — deliverable 5 implementation plan

On 10 November 2026 the user requested a new project for Phase 2: Tool Calling, Function Calling, and Frontend Action Design, and chose a project task desk. Tasklane is a distinct product, repository, UI and Vercel project. Previous submissions remain unchanged.

## Acceptance criteria

1. Real model tool calling with strict schemas for search, create, priority, move, archive.
2. Read-only search may execute during planning. Mutation tools have no automatic execute handler.
3. Preview exact before/after changes before approval. Archive requires typing ARCHIVE; reset requires RESET.
4. Revalidate tool inputs, task ownership, proposal identity, expiry and revision on the server.
5. Show planning/execution, success/failure, retry and rollback states. Preserve tasks on failure.
6. Record parameters, outcomes, timestamps and durations; expose reviewable logs.
7. Test permissions and failure paths, not just successful tool calls. Keep honest live and browser evidence.
8. Publish to a separate GitHub repository connected to a separate Vercel project.

## Design

An airy green-and-neutral project desk: top navigation, three-column Kanban board, right-hand assistant, readable cards, proposal previews and an expandable activity feed. Mobile stacks columns and assistant. This is independent of RoleBrief and ShelfSignal.

## Scope and continuity exception

This project deliberately starts fresh at the user's request. The supplied curriculum asks to continue Module 1; that continuity criterion is not claimed. Each visitor gets an encrypted cookie-backed demo workspace, not a multi-user project management service. No external project system is connected.
