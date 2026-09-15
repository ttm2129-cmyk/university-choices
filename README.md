# University choices

A simple HTML, CSS, and JavaScript demo for exploring 18 real universities: the eight Ivy League schools and ten University of California campuses. View campus photos and sort schools into your own good and bad lists. UC San Francisco is marked as graduate and professional only.

## Install and open

No packages, build tools, or server are required. You only need a modern web browser.

1. Download this repository from GitHub using **Code → Download ZIP** and extract it, or clone it with Git:

   ```bash
   git clone https://github.com/ttm2129-cmyk/university-choices.git
   ```

2. Open the downloaded or cloned folder.
3. Double-click `uni.html` to open the demo in your browser. Keep `style.css` and `script.js` in the same folder.

An internet connection is needed for campus photos, web fonts, and university website links.

## How to use

- **Swipe or drag left:** add the current school to your bad list.
- **Swipe or drag right:** add it to your good list.
- You can also use the two buttons below the card or the **← / →** arrow keys.
- Use **Explore** to filter by Ivy League or University of California.
- Use **Undo last change**, or move and remove schools directly from your lists. Removing a school returns it to the deck.
- Select **Download my lists** to export both lists as a JSON file.
- Select **Start over** to clear your saved choices after confirmation.

Choices are saved locally in the same browser when browser storage is available. They do not sync between browsers or devices. If storage is unavailable, the demo displays a message; download your lists to keep a copy.

## Project files

- `uni.html` — page structure.
- `style.css` — layout and styling.
- `script.js` — school data, photos, swipe controls, and saved lists.
- `AGENTS.md` — guidance for coding assistants working on this project.

Campus photos include links to their official sources. Use each school's official website to check current programs and admissions information.
