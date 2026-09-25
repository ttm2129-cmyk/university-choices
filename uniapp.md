# University choices

A plain HTML, CSS, and JavaScript app for comparing **2,593 U.S. colleges and universities**, making good/bad lists, and keeping application notes.

## Open the app

Download and extract this repository, or clone it:

```bash
git clone https://github.com/ttm2129-cmyk/university-choices.git
```

Open `uni.html` in a modern browser. Keep `style.css` and `script.js` beside it. No installation, server, API key, or build step is required. School data and filtering work offline; photos and external links need internet access.

## Use it

- Search by school, city, state, or field. “Boston, MA” targets the reported campus city; “CA” or “California” targets the state. Location searches combine with advanced filters. Exact cities do not include the surrounding metro area. No-match messages explain when filters leave no results. The former Explore bar has been removed.
- Open **Advanced search** for field of study, optional **0–10,000 maximum sliders** for undergraduate campus size, annual tuition, and annual living expenses, plus minimum scientific citations, employment rate, average earnings, and international undergraduate percentage. Each slider has an enable checkbox; off means no limit. Filters combine together.
- Missing numeric values are excluded by active filters unless you choose to include them. Employment is a derived rate for tracked, non-enrolled federally aided students 10 years after entry, not graduate job placement. Average earnings are historical (measured in 2014–2015, adjusted to 2017 dollars), not current salaries.
- **Swipe/drag left** for the bad list and **right** for the good list. Buttons and arrow keys work too. Arrow keys in search inputs, sliders, or notes keep their normal behavior.
- Write **My notes** beneath a card. Notes save as you type. Reopen them through a list's **Notes** button or **My university notebook**, including notes on schools you have not sorted yet.
- Undo a choice, move schools between lists, or remove them to return them to the deck. **Clear good list** and **Clear bad list** independently return those schools to the review deck while keeping the other list and all notes. **Clear both lists** resets both lists and keeps your notes. These actions ask for confirmation; current search and filters still apply.
- **Clear all notes** in **My university notebook** deletes every note, including notes on unsorted schools, after confirmation. Both lists are kept. Note deletion cannot be undone; download a backup first if needed. Use **Reset filters** and **Clear search** to change your research criteria.
- **Download lists + notes** exports a JSON backup, including notes on unsorted schools.

Choices and notes are stored in this browser only. They do not sync between devices. If local storage is unavailable or full, a message asks you to download a backup. Existing lists from the original 18-school demo are preserved.

## Demo sign-up and sign-in

Use **Sign up** or **Sign in** in the header to preview the account screens. Use made-up details and a made-up password of at least 8 characters. Sign-up also asks for a display name and matching confirmation password. You can show/hide the password, close the dialog, continue as a guest, or sign out.

This is **not real authentication**: no account is created, no credentials are checked against a server, and no password or email is stored by the app or sent anywhere. Only the demo display name is kept in tab-scoped session storage (or memory if storage is unavailable). Password inputs clear after submission or closing. Lists and notes remain browser-local and are not synced, separated by user, or protected by this demo sign-in.

## Data and coverage

The directory uses the June 10, 2026 College Scorecard release: currently operating institutions in the 50 states and DC whose highest award is a bachelor's degree or above. It includes graduate-only institutions and colleges, not just schools named “University.” It excludes two-year-only institutions and territories and is **not a top-100 ranking or a guarantee of every U.S. school**.

Academic highlights show the largest reported undergraduate program areas, rather than claiming which schools are most famous. Citation and image coverage is partial. Images are available for **1,567 schools**: **1,403 representative campus images** and **164 clearly labeled university logos/seals**. New images are matched primarily by federal institution ID, with photographer/license credits. Image loading includes a retry button and, where available, a small original-image fallback. Missing data and unavailable photos are labeled; scores are never invented. See [DATA-SOURCES.md](DATA-SOURCES.md) and the app's **About the directory and data** section for definitions and limitations.

## Files

- `uni.html` — interface and accessible form controls.
- `style.css` — responsive layout and styling.
- `script.js` — bundled public school data, search, swiping, notes, and local storage.
- `DATA-SOURCES.md` — provenance and measure definitions.
- `AGENTS.md` — assistant workflow, including committing and pushing when asked to wrap up.
