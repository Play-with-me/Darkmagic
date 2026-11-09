---
name: project-master-planner
description: Turn a project topic or GitHub repository into an end-to-end project plan, including ideas, decisions, work breakdown, dependencies, delivery stages, and operational readiness. Use for whole-project planning from minimal input, rather than executing implementation.
---

# Project Master Planner

Produce a decision-ready, actionable project plan from even a single topic. Use the user's language. Model the perspectives of a cross-functional product organization while scaling ceremony to the project's real size. Do not claim affiliation with, or knowledge of private processes at, any company.

## Intake without blocking

Start with the topic and available context. If only a topic is given, deliver a useful first draft immediately with explicit provisional assumptions about audience, outcome, scale, budget, and time. Label its readiness clearly: provisional for validation, decision-ready, or implementation-ready, based on evidence and unresolved blockers. Ask only the highest-impact unresolved product question after the draft; do not demand an interview before producing value. Distinguish confirmed facts, assumptions, recommendations, and unknowns throughout.

For an existing repository, inspect its instructions, project memory, existing plans, dependency manifests, architecture, tests, CI, and issue context through available authorized tools. Read existing Graphify reports before broad code searches when present. Do not invent repository findings or treat inaccessible code as reviewed. Record inspected revision and access gaps. If the repo is unavailable, continue a topic-based provisional plan and explain what needs reconciliation later.

Planning does not authorize coding, publishing, purchases, or creating external issues. Preserve existing incomplete plans and tracker items. Follow repository artifact conventions; otherwise use a plan document plus a single canonical task list. In projectless chat use the designated outputs directory. Do not duplicate live task status across multiple trackers.

## Workflow

1. Establish the problem, target users, desired outcomes, measurable success, boundaries, and explicit non-goals. Separate the smallest valuable release from later expansion.
2. Generate meaningfully different product directions and useful ideas. Group ideas as core, next, experiment, or deferred, with value, effort range, uncertainty, and validation method. Include a simpler baseline; avoid turning every idea into a commitment.
3. Apply the Coverage and deliverable contract included below. Map capabilities and their dependencies before task decomposition. Apply every relevant perspective and mark irrelevant ones with a reason. Identify cross-functional handoffs and contradictions.
4. Create a decision register. Recommend reversible technical choices autonomously, marking them provisional when evidence is weak. Surface consequential product, cost, legal, or irreversible choices for the owner. Each unresolved decision needs options, tradeoffs, recommendation, impact, and the latest point it must be resolved.
5. Load the separately installed skill named `ultrathinking` through the host skill manager when available and apply its review to the draft scope, architecture, sequencing, and launch plan. Keep the two skills independently usable. If unavailable, perform a clearly labeled local fallback: alternatives, assumptions, pre-mortem, evidence gaps, and changes required. Never claim a separate reviewer or subagent ran unless one actually did.
6. Resolve review findings into the plan. Build a dependency-ordered roadmap with exit criteria, followed by tasks that produce demonstrable outcomes. Define contracts or prerequisite decisions before scheduling dependent work. Surface critical path, integration checkpoints, bottlenecks, and safe parallel opportunities without assuming unlimited staff.
7. Run the completeness checks below and deliver the plan, remaining choices, and a concrete first action. Stop at planning unless implementation is separately authorized.

## Plan presentation

Lead with the user-facing goal, scope, recommended direction, and key decisions. Explain technical detail only where it affects a choice. Respect applicable operating-mode and dual-layer presentation rules; include before/after, a screen sketch, and user journey when the project has a user interface. For projects without screens use a process sketch rather than inventing UI.

Place the detailed work register, technical boundaries, verification, and dependency information in a collapsible technical section or linked artifact. Keep the complete plan available even if the chat summary is short. Do not substitute a generic checklist for topic-specific work.

Use stable IDs linking outcomes → capabilities → decisions → tasks → acceptance checks. Represent unresolved prerequisites as blocked work rather than silently assuming approval. Use effort ranges with assumptions, not unsupported exact dates. Make schedule dates conditional on staffing, availability, and dependencies.

When an experiment or buy/build decision creates alternative paths, show the gate, evidence needed, and work selected for each outcome; do not silently schedule one branch as certain. Keep each decision or risk in one canonical register and refer to its ID elsewhere. A compact chat summary may omit register columns only if the complete artifact contains them; if delivering only a first draft, explicitly identify unexpanded areas and do not label it implementation-ready.

## Completeness check

- Every in-scope outcome maps to a capability and verifiable work; every task serves an outcome, risk reduction, or mandatory obligation.
- Every relevant coverage area is planned, deferred with reason, or explicitly unresolved. Report coverage gaps rather than promising literal completeness.
- Each task has a role owner, dependencies, acceptance criteria, verification, effort range, and blocked status where applicable. Resolve dependency cycles.
- Define empty, loading, success, error, and permission-restricted states for interactive journeys where applicable, including recovery and accessibility.
- Cover integration, migration, rollout, rollback, monitoring, support, maintenance, and eventual retirement where relevant, not just feature construction.
- Separate facts from assumptions and researched sources from proposed approaches. Validate current or high-stakes claims using appropriate primary sources; do not invent market research, costs, compliance conclusions, or company practices.
- List the most material residual unknowns and a next validation action for each. Recheck affected decisions and tasks after review changes.


# Coverage and deliverable contract

## Cross-functional coverage

For each row record: applicable status, project-specific findings, planned work or decision IDs, and gaps. Roles are analytical perspectives, not claims that real teams or independent agents participated.

| Perspective | Questions that change the plan |
|---|---|
| Product and strategy | Who has the problem, why now, what outcome, what alternatives, what is excluded? |
| Research and growth | What evidence validates demand, how will users discover it, what experiment tests adoption? |
| Design and accessibility | What are the main journeys, failure recovery, content needs, inclusion and device constraints? |
| Architecture and engineering | What boundaries, contracts, dependencies, buy/build choices and scaling limits matter? |
| Data and analytics | What information is collected, owned, retained, measured, migrated and deleted? |
| Security and privacy | What assets, threats, permissions, abuse paths, secrets and incident needs apply? |
| Quality and reliability | What acceptance evidence, integration checks, performance targets and failure scenarios matter? |
| Delivery and operations | What environments, release gates, observability, rollback and recovery are needed? |
| Business and finance | What cost drivers, pricing assumptions, procurement, staffing and runway constrain the plan? |
| Legal and compliance | What jurisdiction, licensing, consent or specialist review questions require resolution? |
| Launch and customer support | Who pilots, how are users onboarded, supported and informed about changes? |
| Lifecycle and governance | Who decides, owns maintenance, revisits assumptions, handles deprecation and handover? |

Adapt to nonsoftware topics by replacing software-only checks with equivalent production, distribution, quality, or operating concerns. Do not force software architecture into every topic.

## Deliverables

Keep sections in one plan unless size or repository conventions justify splitting. Do not generate empty documents.

1. **Executive brief:** problem, users, outcomes and metrics, scope/non-goals, recommended direction, assumptions and constraints.
2. **Opportunity inventory:** idea ID, proposal, user value, priority bucket, effort range, confidence, cheapest validation, and reason for deferral.
3. **Capability map:** stable ID, responsibility, boundaries, consumers, dependencies, and existing/proposed/unknown status.
4. **Decision register:** ID, question, options, pros/cons, recommendation and rationale, evidence/confidence, owner role, deadline or blocking milestone, reversibility, and status. Separate decisions already made from user choices still required.
5. **Roadmap:** discovery/validation, foundation, first valuable release, expansion, launch, and operations as relevant. Each phase has outcomes, entry dependencies, exit evidence, role needs, and effort range. Do not assume all phases are necessary.
6. **Work register:** ID, outcome/capability links, action, owner role, priority, dependencies/decision blockers, deliverable or file boundaries if known, acceptance criteria, verification method, effort range and uncertainty. Split oversized tasks into independently reviewable outcomes; retain integration tasks between slices.
7. **Risk and experiment register:** failure, likelihood/impact with rationale, early indicator, mitigation or validation, owner, contingency and affected tasks. Include a cheap falsification experiment for the riskiest assumptions.
8. **Release and operating plan:** readiness gates, staged rollout, rollback triggers, monitoring, support, recovery, ownership, maintenance and cost review.
9. **Review record:** changes from ultrathinking, rejected recommendations with rationale, unresolved conflicts, coverage gaps and next actions.

## Final reconciliation

Check dangling IDs, uncovered outcomes, tasks without acceptance evidence, unresolved critical decisions, circular dependencies, unjustified effort precision, and features without an owner after launch. For revisions, preserve IDs and completion evidence; record scope changes and update downstream dependencies rather than recreating the backlog.