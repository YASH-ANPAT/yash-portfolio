---
name: safe-git-workflow
description: "Use when inspecting Git state, reviewing diffs, validating changes, staging approved paths, creating small commits, or checking repository safety."
---

# Safe Git Workflow

Use this workflow to preserve existing work and make Git operations explicit, reviewable, and reversible.

## Use This Skill When

- Inspecting branches, remotes, worktrees, staged changes, unstaged changes, or untracked files.
- Reviewing a proposed change before staging or committing.
- Running secret checks and lint/build validation before an approved commit.
- Creating or verifying a small, descriptive commit.

## Inspect Before Acting

Run non-destructive inspection first:

1. `git branch --show-current`
2. `git status --short --branch`
3. `git remote -v` when remotes are relevant
4. Recent history with a non-paged log
5. `git diff` and `git diff --cached`
6. `git ls-files --others --exclude-standard` for untracked files

Understand and preserve all pre-existing modifications and untracked files. If the requested change conflicts with existing work, stop and ask for guidance.

## Safe Change Rules

- Never run `git reset --hard`, `git clean`, broad checkout/restore overwrites, recursive deletion, or other destructive commands.
- Never switch branches, merge, rebase, pull, or push without explicit approval.
- Never silently delete, overwrite, or revert another person's work.
- Never use blanket staging such as `git add .`, `git add -A`, or `git commit -am`.
- Stage only exact approved paths after reviewing them.
- Do not commit secrets, `.env` files, credentials, tokens, private keys, generated archives, or unexpected binaries.
- Treat untracked archives such as `public.zip` as sensitive until their intended scope is confirmed.

## Review and Validation

Before staging:

1. Review the complete intended diff.
2. Run `git diff --check`.
3. Search changed files for secrets without printing secret values.
4. Run the smallest relevant lint, test, type-check, or build command.
5. Confirm generated files and unrelated modifications are excluded.

Do not claim a command passed unless it actually ran successfully. If a build writes generated output, confirm that such output is allowed before running it.

## Approved Commit Procedure

Only after explicit approval:

1. Stage exact paths, for example `git add -- path/to/file`.
2. Inspect `git diff --cached --stat` and `git diff --cached`.
3. Re-run relevant validation if staging changed the scope.
4. Create one small, descriptive commit focused on the approved change.
5. Include the required repository co-author trailer when project instructions require it.
6. Verify with `git status --short --branch` and `git show --stat --oneline HEAD`.

Do not push after committing unless separately approved.

## Reporting

State the branch, preserved pre-existing work, exact paths changed or staged, validation results, commit identifier if one was approved, and any remaining risks. Keep the report concise and distinguish inspection from action.
