# Playwright-JS: QA Automation & JavaScript Portfolio

[![Playwright Tests](https://github.com/trebman95/Playwright-JS/actions/workflows/playwright.yml/badge.svg)](https://github.com/trebman95/Playwright-JS/actions/workflows/playwright.yml)

Hands-on work from my transition from manual QA into test automation. The featured project is a **Playwright + JavaScript** end-to-end suite of 12 automated tests that runs in **GitHub Actions**. The repo also holds my manual test cases and the JavaScript fundamentals I'm building on.

---

## Featured Project: Playwright Test Automation

**Folder:** `Playwright/`
**Application under test:** [Practice Test Automation](https://practicetestautomation.com/practice/), a public site built for practicing test automation.

### Test Coverage

**Login** ([Test Login page](https://practicetestautomation.com/practice-test-login/)) | `login.spec.js`

| Scenario | Type | What is verified |
|---|---|---|
| Positive login | Positive | Valid credentials reach the logged-in page: URL, success message, and Log out button |
| Negative username | Negative | Invalid username shows the error "Your username is invalid!" |
| Negative password | Negative | Invalid password shows the error "Your password is invalid!" |

**Dynamic elements** ([Test Exceptions page](https://practicetestautomation.com/practice-test-exceptions/)) | `exceptions.spec.js`

| Scenario | What is verified |
|---|---|
| Add a row | The second row's input appears after clicking Add |
| Add, fill, and save a row | Text entered in row 2 saves and shows "Row 2 was saved" |
| Edit an existing row | Row 1 becomes editable and holds the new value |
| Element removed after an action | The instructions text disappears after clicking Add |
| Delayed element | Row 2 appears within a 10-second window |

These pages model situations that cause common Selenium exceptions (missing, non-interactable, stale, or slow elements). Playwright's auto-waiting and web-first assertions handle most of them without manual sleeps.

**Dynamic table** ([Test Table page](https://practicetestautomation.com/practice-test-table/)) | `tables.spec.js`

| Scenario | What is verified |
|---|---|
| Language filter | Selecting Java shows only Java courses |
| Level filter | Unchecking Intermediate and Advanced leaves only Beginner courses visible |
| Minimum enrollments | Choosing 10,000+ shows only rows with 10,000 or more enrollments |
| Combined filters | Python + Beginner + 10,000+ together: every visible row matches all three |

The practice login credentials are published on the site itself, so no real secrets are used in this repo.

### Test Design Notes
- Role-based locators (`getByRole`) that follow how users see the page
- Web-first assertions with built-in waiting instead of fixed sleeps
- Table checks that read every visible row rather than spot-checking one
- Positive and negative paths for login

### Tech Stack

| Area | Tools |
|---|---|
| Language | JavaScript (Node.js LTS) |
| Test framework | Playwright Test |
| CI/CD | GitHub Actions |
| Reporting | Playwright HTML report, uploaded as a build artifact |
| Version control | Git, GitHub |

### Run It Locally

```bash
git clone https://github.com/trebman95/Playwright-JS.git
cd Playwright-JS/Playwright

npm ci
npx playwright install --with-deps

npx playwright test            # run all tests (headless)
npx playwright test --headed   # watch the browser
npx playwright show-report     # open the HTML report
```

### Continuous Integration

Tests run on every push and pull request to `main`/`master`. The workflow installs dependencies from the `Playwright/` folder, runs the suite, and uploads the HTML report as an artifact. To view a report, open the **Actions** tab, select a run, and download `playwright-report` from the bottom of the page.

---

## Repository Contents

| Folder / File | What it is |
|---|---|
| `Playwright/` | Automated end-to-end tests, config, and CI setup (see above) |
| `JS Algorithims/` | JavaScript fundamentals: variables, functions, arrays, objects, classes, iterators, async programming, and more |
| `JS Practice/` | Three practice projects applying JavaScript concepts |
| `HTML+CSS/` | Basic HTML and CSS practice page |
| `images/` | Image assets for the practice pages |

---

## What This Repo Demonstrates

- Turning written test cases into automated Playwright tests
- Positive and negative testing with assertions on URLs, text, and element state
- Validating dynamic table data across filters
- Running tests in CI and reading build results
- Debugging a pipeline failure caused by the project living in a subfolder
- Writing manual test cases in a structured spreadsheet
- Building JavaScript fundamentals to support automation work

---

## Roadmap

- [ ] Refactor repeated steps into Page Objects and `beforeEach` setup
- [ ] Add cross-browser runs (Chromium, Firefox, WebKit)
- [ ] Add API tests
- [ ] Publish the HTML report to GitHub Pages

---

## Acknowledgments

Test scenarios are based on the practice pages provided by [Practice Test Automation](https://practicetestautomation.com/). This repo is for learning and portfolio purposes and is not affiliated with that site.

---

## About Me

**Tre' Blackman**, Software QA Analyst focused on cross-platform web and gaming applications, building hands-on automation skills.

- GitHub: [@trebman95](https://github.com/trebman95)
- LinkedIn: (https://www.linkedin.com/in/treblackman/)
