# Deliverable 5 assessment mapping

| Requirement | Evidence |
|---|---|
| Safe tool schemas | `src/lib/contracts.ts`: strict Zod input schemas and action union; generated contracts at `/guide` |
| Real model tool calling | `src/lib/agent.ts`: AI SDK `tool`, `generateText`, read-only search execution, mutation tool calls without execute handlers |
| Preview before execution | `src/components/proposal.tsx`: exact before/after values, source label, expiry and decision controls |
| Destructive-action confirmation | Archive requires exact ARCHIVE confirmation, enforced by both UI and server; reset requires RESET |
| Server-side validation | `src/lib/engine.ts` and API route: allowlisted actions, session-owned IDs, revalidation, proposal ID, revision and expiry |
| Progress, success, failure, rollback | Visible planning/applying/undoing states; success/error messages; one-use failure simulation; validated undo |
| Logs for review | Session activity includes tool name, input, outcome, timestamp, duration; server logs contain operation/outcome without prompt or credentials |
| Tests | `tests/actions.test.tsx`: approval, isolation, expiry, replay, schema, crypto, rendering and HTTP boundaries |
| Deployment evidence | `verification.md` and `live-verification.json` |

## Reviewer walkthrough

1. Ask the AI to show high-priority tasks. Search runs automatically and adds an activity event.
2. Ask it to make Review mobile layouts high priority. Verify no task changes before approval; inspect before/after.
3. Decline once, then request again and approve. Confirm the task changes and success appears.
4. Undo the change. Inspect the rollback event.
5. In Tool lab choose Preview an archive. Confirm the button is unavailable until ARCHIVE is typed. Approve and undo.
6. Try a failure. Approve, observe failure with no board change, retry, then undo.
7. Test invalid input. The server returns 400 and records a failed event.
8. Inspect Activity entries and generated schemas at `/guide`.

Manual and lab proposals are explicitly labeled. They do not imply a model call. Live AI results must be separately verified.
