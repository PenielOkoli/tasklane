# Tasklane

**A little help. A lot of momentum.** A project task desk for FlexiSAF deliverable 5: Tool Calling, Function Calling, and Frontend Action Design.

**Live app:** [https://tasklane-cyan-mu.vercel.app](https://tasklane-cyan-mu.vercel.app)

The assistant searches tasks and proposes one change. You see the before and after values and approve each mutation. Archiving needs the exact word `ARCHIVE`. Every action is logged, and the last approved change can be undone.

## Required deliverables

- **Tool schemas:** [strict Zod schemas](src/lib/contracts.ts) for task search, creation, priority, movement, and archiving.
- **Approval flow:** [proposal preview and approval controls](src/components/proposal.tsx), backed by [the server action engine](src/lib/engine.ts). Model generated writes do not execute automatically.
- **Validation and logs:** [server route and request boundary](src/app/api/workspace/route.ts), [ownership, revision, expiry, and execution checks](src/lib/engine.ts), and [activity log UI](src/components/desk.tsx).
- **Live Vercel URL:** [Tasklane](https://tasklane-cyan-mu.vercel.app).

## Evidence

- [Assessment mapping and reviewer walkthrough](docs/modules/05/assessment.md)
- [Implementation plan](docs/modules/05/plan.md)
- [Live verification results](docs/modules/05/live-verification.json)
- [AI tool calling implementation](src/lib/agent.ts)
- [Unit and boundary checks](tests/actions.test.tsx)

## Run locally

Use Node.js 22.x. Run `npm ci`, set server-only `SESSION_SECRET` (at least 32 random characters) and `GROQ_API_KEY`, then run `npm run dev`. `npm run check` runs TypeScript, tests, and the production build. Never commit credentials or expose them through `NEXT_PUBLIC_` variables.

The optional `GROQ_MODEL` defaults to `openai/gpt-oss-120b`. Without Groq, manual actions and the explicitly labeled tool lab remain available; without the session secret, the API fails closed.

## Approval architecture

`request → read-only search tool → validated mutation proposal → before/after preview → human approval → server revalidation → commit → activity log and undo`

Mutation tools have no model-side execution handler. The approval request contains only a proposal ID and decision; the server retrieves the pending action from the authenticated session and rechecks the schema, task ownership, expiry, revision, and archive confirmation before committing.

## Scope and limitations

This is an isolated, single-browser demo, limited to 12 tasks and the latest 10 activity entries. State is encrypted and authenticated in an HttpOnly, SameSite=Strict cookie with a 24-hour expiry and Secure in production. It is not a shared database or durable audit system. Cookie state does not provide distributed replay protection or concurrent-write guarantees; replaying an older cookie can restore an older demo snapshot. Do not use this design for external high-impact actions. The per-instance request limiter is best-effort.

Only prompts and sample task data go to Groq when AI is invoked. Avoid sensitive content. Task titles and model outputs are untrusted; React escapes them. No email, external task service, purchases, or file operations are exposed as tools.

## Provenance

This is a fresh product at the user's request, with a separate interface from Module 4. Only dependency versions and base TypeScript/security configuration were reused from RoleBrief commit `20f05faea85d8b73f629373396a7ba94f844c2f7`. Product logic and UI are newly written.