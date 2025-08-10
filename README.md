# Playwright + TypeScript Automation Framework 🚀

[![Playwright](https://img.shields.io/badge/Tested%20With-Playwright-45ba4b.svg)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-007acc.svg)](https://www.typescriptlang.org/)
[![Build Status](https://img.shields.io/github/actions/workflow/status/<your-username>/<repo-name>/playwright.yml?branch=main)](https://github.com/<your-username>/<repo-name>/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📌 Overview
This is a **production-grade UI + API automation framework** built using **Playwright** and **TypeScript**.  
It demonstrates **scalable test design** with:
- Page Object Model (POM)
- Fixtures for reusable setup
- Cross-browser execution
- Allure HTML Reporting
- GitHub Actions CI integration

Public demo applications are used to ensure **safe & legal automation**:
- [SauceDemo](https://www.saucedemo.com/) → E-commerce workflows
- [BlazeDemo](https://blazedemo.com/) → Flight booking workflows

---

## 🛠 Tech Stack
- **[Playwright](https://playwright.dev/)** → UI & API automation
- **TypeScript** → Strongly typed JavaScript
- **Allure Reports** → Rich, interactive test reporting
- **GitHub Actions** → CI/CD integration
- **Node.js** → Runtime environment

---

## 📂 Project Structure


playwright-ts-framework/
│
├── playwright.config.ts # Playwright test runner config
├── tsconfig.json # TypeScript config
├── package.json
│
├── tests/ # Test cases
│ ├── saucedemo/
│ │ ├── login.spec.ts
│ │ ├── checkout.spec.ts
│ └── blazedemo/
│ ├── flightBooking.spec.ts
│
├── pages/ # Page Objects
│ ├── saucedemo/
│ └── blazedemo/
│
├── fixtures/ # Test data & reusable setup
├── utils/ # Utility functions (e.g., logger)
└── reports/ # Test reports output

▶️ Running Tests

Run All Tests
npx playwright test

Run Specific Test File
npx playwright test tests/saucedemo/login.spec.ts

Run in UI Mode (Debug)
npx playwright test --ui

📊 Reporting
HTML Report
npx playwright show-report

Allure Report
# Run tests & generate allure results
npx playwright test

# Generate and open report
npx allure generate ./allure-results --clean
npx allure open


🌐 CI/CD Integration
This repo includes a GitHub Actions workflow:

Runs Playwright tests on every push & PR

Generates test reports

Ensures build status badge updates automatically

Workflow file: .github/workflows/playwright.yml

This repo includes a GitHub Actions workflow:

Runs Playwright tests on every push & PR

Generates test reports

Ensures build status badge updates automatically

Workflow file: .github/workflows/playwright.yml

🎯 Key Features

Cross-browser testing → Chromium, Firefox, WebKit

Page Object Model → Cleaner, reusable code

Environment configs → Easily switch between base URLs

Screenshots & videos on failure

CI-ready → Works out of the box with GitHub Actions

🤝 Connect With Me
If you like this framework or want to collaborate on automation projects:

LinkedIn: www.linkedin.com/in/murbairy
GitHub: https://github.com/bnmurali1 