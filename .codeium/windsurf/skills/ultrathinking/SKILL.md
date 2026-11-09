---
name: ultrathinking
description: Stress-test complex plans, ideas, and consequential decisions through evidence checks, competing options, failure analysis, and prioritized recommendations. Use when deep critical review is requested or a whole-project planning workflow explicitly invokes it.
---

# Ultrathinking

An independent, reusable critical-review workflow. It can review a project plan, product idea, architecture, business direction, or a consequential decision without the planner skill. This name describes a workflow, not access to a special model, hidden thinking mode, guaranteed reasoning budget, or unlimited analysis.

## Review method

1. Identify the decision or desired outcome, constraints, stakes, reversibility, and available evidence. If context is thin, state assumptions and produce a conditional review rather than inventing facts.
2. Build a compact evidence ledger: claim, source or observation, fact/assumption/hypothesis classification, confidence rationale, and cheapest test. Verify unstable or high-stakes facts with appropriate primary sources and cite them. If tools or sources are unavailable, flag the limitation.
3. Form genuinely competing approaches, including the simplest viable baseline and, where useful, delaying action to gather evidence. Compare against the same criteria: outcome value, feasibility, total lifecycle cost, risk, reversibility, and speed to learning. Avoid decorating one favored approach with weak straw alternatives.
4. Review from relevant stakeholder perspectives: user, operator, builder, payer, security/privacy reviewer, and maintainer. Explain conflicting incentives and second-order effects. These are perspectives within one review unless real independent reviewers were used.
5. Run a pre-mortem: suppose the proposal failed. Identify plausible causes, dependency failures, adoption barriers, cost overruns, misuse, and recovery gaps. For each material failure, specify an early signal and mitigation or experiment. Distinguish likely failures from speculative edge cases.
6. Try to falsify the preferred recommendation. State what evidence would change it, hidden assumptions it relies on, and whether a cheap reversible experiment can resolve the largest uncertainty before commitment.
7. Recommend an approach with concise supporting reasons, confidence and limits. Prioritize findings as blocking, important, or optional. Link changes to affected decisions/tasks when IDs exist; return a change set the caller can apply and recheck.

## Output

Return a decision brief, not private chain-of-thought: recommendation; strongest alternatives and tradeoffs; evidence and uncertainty; prioritized weaknesses; validation experiments; required plan changes; residual risks and next action. Show enough concise rationale for the user to assess the result without narrating internal deliberation.

Depth should match consequences. For a routine reversible choice use a short review. For a complex plan examine cross-domain dependencies and operational consequences. Stop once material alternatives and risks have been assessed and remaining uncertainty is best resolved by external evidence or user input; avoid endless self-review and false claims of exhaustive certainty.

If called by another skill, return findings in its language and format without taking over its task or mutating external systems. Do not require subagents, paid tools, implementation, or external writes to complete this workflow.