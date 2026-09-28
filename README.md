# University Choices

A browser-based prototype for exploring **2,593 U.S. colleges and universities**, organizing good/bad lists, and keeping research notes. Built with HTML, CSS, and JavaScript.

## Original idea and intended users

The idea came from my own difficulty choosing graduate schools. Faced with thousands of institutions, I wanted a tool that could help me narrow my options and organize my research. I developed this prototype to help other students facing similar decisions about post-secondary education.

The current application is a broader college and university exploration tool using available public data. Many of its measures describe undergraduate education, so it is not yet a comprehensive graduate-program comparison tool.

Inspired by the left/right interaction of dating apps, I designed a system in which students review one school at a time, place it in a “good” or “bad” list, and record notes. These labels represent personal preferences rather than judgments about a university’s quality. I initially requested clickable controls, then expanded the application with swiping, search, filters, real school information, and notes.

The intended flow is: **search or filter → review a school → choose a list → write notes → revisit or reset choices**.

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

## My work with AI

I used **OpenAI Codex** as the main coding assistant and **Google Gemini** as an idea-development partner. I began by outlining the problem, the main interaction, and what I hoped students could accomplish. I asked Gemini to help refine the concept and suggest improvements before working with Codex on the prototype.

Codex generated and revised the application code, collected and processed public school data, explained programming concepts, and helped with Git and GitHub. I tested the application in my browser and stored its code on GitHub. As development continued, I returned to Gemini to explore features such as school size, tuition, and international student community. I decided which suggestions to pursue and asked Codex to implement them.

My role was to define the purpose, evaluate the results, report problems, and make decisions about features and scope. AI supported implementation and explanation; I remained responsible for judging whether the application matched my intentions. Codex also helped edit this README from my draft for clarity and technical accuracy.

## Development process and iterative revisions

Development followed four overlapping stages. I reviewed each version and used what I observed to guide the next request.

### 1. Initial concept and interface

I first focused on the visual design and basic interaction. I was satisfied with the initial visual direction, but the prototype did not yet provide the real university information or list behavior I wanted. This helped me distinguish an appealing interface from a functioning application.

I asked Codex to add real institutions, beginning with the Ivy League and University of California system. Later, I requested a broader directory using government data. Codex processed a defined selection of the College Scorecard dataset, producing 2,593 institution records rather than an exhaustive list of every U.S. school.

### 2. Learning Git and managing the project

I worked with Codex to turn the project folder into a local Git repository and learned how to navigate to it in the terminal, create commits, and push changes to GitHub. Along the way, I asked for explanations of errors involving the folder path, repository ownership, a mistyped branch name, and the remote repository.

I also requested an `AGENTS.md` file containing instructions for the end-of-session Git workflow. It guides the assistant during a working session; it does not independently run or schedule pushes. Codex created the original application README, which is preserved in [uniapp.md](uniapp.md), before I developed this submission report.

### 3. Expanding features and investigating limitations

I discussed additional features with Gemini and directed Codex to implement the ones I selected. Some revisions concerned the interface, while others required investigating whether suitable data existed.

For example, I requested an employer-reputation filter, then questioned why it did not work. The College Scorecard dataset did not provide the verified employer-reputation scores needed for that feature. I requested employment rate and average earnings as alternatives. Those measures also required careful interpretation: employment describes a specific tracked cohort, and average earnings are historical rather than current starting salaries.

I also questioned why many schools lacked representative pictures. Codex expanded image coverage using sourced images and labeled logo or seal fallbacks. Coverage remains incomplete, and the full image collection has not been manually checked.

Finally, I requested independent Clear controls because students may change their intended field or research priorities. They can now clear either list or all notes without deleting every part of their research.

### 4. Exploring future computational possibilities

After completing the core prototype, I asked questions about:

- What would be required to make the application ready for wider public use.
- How a chatbot could compare schools in a student’s good list.
- How students could upload academic records and compare them with program requirements.
- How Python could take over some processing currently handled by JavaScript.

These were discussions of possible computational designs, not implemented features. I learned that a conventional Python-backed web application would still use HTML for structure and browser code for interactions. A chatbot would need reliable school evidence and model integration; academic-profile comparison would need verified program requirements and compatible grading definitions.

I chose to postpone those features and keep account screens as a demo. This kept the project within my current time and learning scope.

## Selected prompts and what they changed

The excerpts below come from my requests to Codex. They show how I used prompts to define behavior, question results, and direct revisions.

| Selected prompt excerpt | My intention and the resulting revision |
| --- | --- |
| “Click on the left, users shall ‘add’ the university to their ‘bad’ list. Click on the right, users ‘add’ the university in their ‘good’ list.” | Establish the central interaction: students classify schools according to their preferences. |
| “Currently, the employer reputation score is not working. Can you explain why?” | Investigate an unavailable measure before deciding to request alternatives. The replacement measures also needed explicit definitions and limitations. |
| “Why most of the schools do not have representative picture? Can you add that for me?” | Question incomplete image coverage. Images were expanded, with source credits, labeled fallbacks, and unavailable-image messages. |
| “Create one CLEAR function for each list, and one CLEAR function for the notes.” | Let students restart one part of their research while preserving the others. |

## Testing and observed results

I tested the interface throughout development and revised my requests when its behavior or appearance did not match my expectations. The following are my manual observations, rather than claims that I independently wrote automated tests.

| What I tested | What I expected | What I observed |
| --- | --- | --- |
| Search and combined filters | Adding constraints should narrow the matching set or leave it unchanged when a constraint adds no restriction. | Using Boston as the destination and adding limits such as a maximum enrollment of 7,000, at least 10,000 citations, and at least 5% international undergraduates substantially narrowed the results. |
| Independent Clear controls | Each control should reset its intended part of the research. | I tried all three controls and found that they behaved as intended. |
| Clear all notes after creating notes and saving schools in both lists | Notes should disappear while both lists remain. | The notes disappeared, and the good and bad lists remained. |

The reduced result count was evidence that the filters affected the search, but it did not by itself prove that every returned school met every criterion. A stronger follow-up would be to check individual returned records against each active limit and record exact counts. I have not conducted a formal usability study with other students.

Separately, Codex reported programmatic checks of filtering, list behavior, local storage, Clear controls, demo account behavior, and photo fallbacks. Those were AI-assisted checks, not tests I personally wrote. The temporary test scripts are not included in this repository, so I do not present them as a reproducible test suite for reviewers.

## What I needed to decide and understand myself

Although AI generated code and suggested solutions, I remained responsible for deciding the application’s purpose, choosing which suggestions to follow, and judging the results. My ideas became clearer through testing and discussion rather than being fully defined at the beginning.

I asked how school data was stored, how left/right choices updated the lists, and how filters selected matching institutions. These discussions helped me begin to distinguish interface problems from limitations in the available data.

Two implementation choices connect directly to my design intentions:

- **One classification per school:** JavaScript stores decisions by school ID, such as `decisions[schoolId] = "good"`. It builds the visible lists from those decisions. Moving a school changes its classification; removing its decision makes it eligible for review again under the current filters.
- **Notes separate from decisions:** Notes are stored separately from list choices. This allows a student to clear a list without losing notes, or clear all notes while keeping both lists. The app saves the changes in browser storage and updates the interface.

HTML provides the page and list containers, CSS controls their appearance, and JavaScript handles interactions and data.

### How real-world data works without a backend

One question I explored was how much real-world school information could be included in this prototype. The application uses data collected and processed during development, with the resulting school records embedded in `script.js`. When someone opens the application, their browser reads those records and applies the search and filter rules locally. A backend—a service that processes requests outside the browser—is not needed for this arrangement.

The distinction is between the source of the information and how the application accesses it: real-world data can be stored as a local snapshot. It does not have to be fetched live. Our data flow is **public dataset → processing during development → bundled school records → browser search and display**. Updating the school facts requires replacing the bundled records; searches do not automatically retrieve new figures. Photos load separately from external websites.

This helped me distinguish including real-world data from building services such as shared accounts, cross-device storage, or a hosted-model chatbot.

## Reflection: how my approach changed

I initially treated missing features as problems that could be solved by asking AI for more code. The employer-reputation example showed me that some problems concern the availability and meaning of data. In those cases, I needed to change the feature or explain its limitations rather than continue requesting implementation.

I also learned that an attractive prototype is not enough. I needed to check whether its interactions worked, whether its data supported the features I requested, and whether the labels described that data accurately. Exploring live data collection, chatbots, and Python helped me identify possible directions without claiming that those features were already complete.

My main learning was to move from requesting features to asking more precise questions about how they work, what evidence they use, and what a student can reasonably conclude from the results.

## Remaining limitations and unanswered questions

### Current prototype limitations

- **Demo accounts only:** Sign-up and sign-in do not create or verify real accounts. Use made-up details. Passwords are not stored or sent; only a demo display name is retained in tab-scoped session storage when available.
- **Local saving:** Lists and notes remain in the browser. They are not synchronized across devices, separated by account, or protected by demo sign-in. Clearing browser storage can remove them; the download control provides a backup.
- **Data scope and age:** The directory is not exhaustive or live. Many measures concern undergraduates, and employment and earnings figures describe limited historical populations rather than current graduate outcomes. Missing data is not treated as zero.
- **Partial image coverage:** Some schools have campus images, some have labeled emblems, and others lack images. External image hosts may fail, and not all images have been visually verified.

### Features outside this version’s scope

I postponed real authentication, chatbot integration, and academic-profile comparison because they require additional implementation, data preparation, and testing.

Real accounts and cross-device saving would need an authentication and storage service. In the hosted-model chatbot design we discussed, a backend would protect the model API credentials and handle requests. These are different requirements from simply displaying school data.

A basic academic-profile comparison could run locally in the browser without an AI model or backend. Its main prerequisite would be reliable program requirements and a way to interpret different grading systems. Meeting a published minimum would not guarantee admission. I deferred this feature because of its data and validation needs, not because every comparison requires a backend.

### Questions requiring further research

Although the app includes location search, it does not meaningfully compare qualitative factors such as campus culture or the surrounding environment. I need a clearer understanding of which factors students value and how to represent them responsibly.

I also do not yet know how useful or understandable the application would be to students beyond my own testing. Interviews and task-based usability testing could help me evaluate the interface, the good/bad labels, the filters, and additional information students need.

## Data and coverage

The directory uses the June 10, 2026 College Scorecard release: currently operating institutions in the 50 states and DC whose highest award is a bachelor's degree or above. It includes graduate-only institutions and colleges, not just schools named “University.” It excludes two-year-only institutions and territories and is **not a top-100 ranking or a guarantee of every U.S. school**.

Academic highlights show the largest reported undergraduate program areas, rather than claiming which schools are most famous. Citation and image coverage is partial. Images are available for **1,567 schools**: **1,403 representative campus images** and **164 clearly labeled university logos/seals**. New images are matched primarily by federal institution ID, with photographer/license credits. Image loading includes a retry button and, where available, a small original-image fallback. Missing data and unavailable photos are labeled; scores are never invented. See [DATA-SOURCES.md](DATA-SOURCES.md) and the app's **About the directory and data** section for definitions and limitations.

## Project files

- `uni.html` — application interface and form controls.
- `style.css` — layout, styling, and responsive presentation.
- `script.js` — bundled school data, filters, list interactions, notes, and local storage.
- `README.md` — project overview, AI collaboration, testing observations, and reflection.
- [uniapp.md](uniapp.md) — preserved application documentation from before this submission report.
- [DATA-SOURCES.md](DATA-SOURCES.md) — data provenance, definitions, and limitations.
- [AGENTS.md](AGENTS.md) — assistant instructions for the end-of-session Git workflow.
