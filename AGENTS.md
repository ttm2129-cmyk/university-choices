# End-of-session Git workflow

When the user asks to wrap up or finish a working session in this project, they authorize the assistant to run this workflow without requiring them to type Git commands:

- Check Git status for uncommitted changes and local commits waiting to be pushed.
- Review the changes and stage the intended project work, including documentation such as `AGENTS.md` and `README.md`. Do not include secrets or unrelated files.
- Commit outstanding project changes with a descriptive message, then push to the configured upstream.
- Never force-push, discard changes, or overwrite remote history. If authentication, missing configuration, conflicts, or a rejected push blocks completion, explain what is needed.
- If everything is committed and pushed, briefly confirm that instead.

Report the commit and push result. This workflow runs during an assistant session; this file does not schedule background jobs or push on every file save.
