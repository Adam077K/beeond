---
playbook: research-question
---

# /research — answer one bounded question

Runs the **`research-question`** playbook: [.claude/playbooks/research-question.yml](../playbooks/research-question.yml).

## Usage

```
/research [one specific question]
```

## Where the method lives

In the playbook and in the `research` lens in [.claude/lenses.yml](../lenses.yml). `sourcer` is the engine —
it is the only one that reaches the internet, and it holds **no repo write tools at all**, which is
deliberate: the engine that reads the world should not be able to change what this repo says about it.

Dispatch several `sourcer` runs in parallel, one per sub-question, each blind to the others. The report
takes as long as the longest single thread.

## What will be refused

An unbounded question. "Research the market" produces an unfalsifiable answer and burns the budget getting
there — it comes back with a proposed narrower scope instead.

## The output contract

Every finding carries a **source URL, an access date and a confidence level**. What could not be found is
reported as a **gap**, not omitted — an omitted gap reads as coverage, and coverage that is not there is
worse than an acknowledged hole. Confidence is required on every key finding, not only the shaky ones.

`sourcer` cannot write `.claude/memory/USER-INSIGHTS.md`; it returns findings and `orchestrator` records
them. That is the only authorized writer of that file.
