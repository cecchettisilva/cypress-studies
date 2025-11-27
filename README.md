# 🧪 Cypress Testing Studies

> A comprehensive study project covering multiple testing approaches including API, Accessibility, Visual, Integration, Component, E2E, and Web testing using Cypress and modern testing practices.

[![Cypress Tests](https://img.shields.io/badge/tests-Cypress-brightgreen)](https://www.cypress.io/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📚 Project Overview

This repository contains a structured learning path for mastering comprehensive testing strategies with Cypress, covering API testing, accessibility testing, visual regression, integration testing, component testing, E2E testing, and web automation.

> **Note:** This is a **work in progress** project. The learning path below represents the planned roadmap, with some features already implemented and others under development.

## ✅ Current Implementation Status

**Completed:**
- ✅ Cypress installation and project setup
- ✅ API testing with custom commands
- ✅ Service Object Pattern implementation
- ✅ JSON Schema validation with AJV
- ✅ Test data generation with Faker.js
- ✅ Database testing with SQL Server
- ✅ GitHub Actions CI/CD pipeline (basic setup)
- ✅ Custom Cypress commands for API endpoints

**In Progress / Planned:**
- 🚧 Accessibility testing automation
- 🚧 Visual regression testing
- 🚧 Component testing
- 🚧 Advanced E2E scenarios
- 🚧 Cross-browser testing
- 🚧 Comprehensive test reporting
- 🚧 Performance testing

## 🎯 Learning Path

**Legend:**
- ✅ Completed
- 🟡 In Progress
- 🚧 Planned / Work in Progress
- 🔴 Not Started

---

### Day 1: Fundamentals + First Tests ✅ (Partially Complete)

**Status:** 🟢 API fundamentals complete | 🟡 Web testing in progress

**Core Concepts**
- API fundamentals (REST, HTTP methods, JSON) ✅
- HTTP status codes and idempotency ✅
- Understanding request/response cycles ✅
- Web testing fundamentals (selectors, assertions, interactions) 🚧
- Accessibility basics (WCAG standards, semantic HTML) 🚧

**Cypress Essentials**
- Installation and project setup ✅
- Cypress folder structure ✅
- `cy.request()` and `cy.api()` methods ✅
- `cy.visit()`, `cy.get()`, and basic commands 🚧
- Lifecycle hooks (`before`, `after`, `beforeEach`, `afterEach`) ✅

**Challenges**: 
1. ✅ Create a complete API test suite for CRUD operations
2. 🚧 Write E2E tests for a login flow with validation
3. 🚧 Implement basic accessibility checks on a homepage

---

### Day 2: Authentication, Sessions, Data & Architecture ✅ (Partially Complete)

**Status:** 🟢 API architecture complete | 🟡 Component testing pending

**Advanced Topics**
- Session management with `cy.session()` 🚧
- Authentication tokens (JWT/OAuth2) 🚧
- Test data management with fixtures ✅
- Service Object Pattern implementation ✅
- API contract testing with JSON Schema validation ✅
- Component testing setup and isolation 🚧
- Visual regression testing basics 🚧

**Challenges**: 
4. 🚧 Implement authentication flow tests with session persistence
5. ✅ Create service objects for API endpoints with proper separation of concerns
6. 🚧 Write component tests for a form with various input validations
7. 🚧 Set up visual regression tests for critical UI components

---

### Day 3: Advanced Techniques + CI/CD 🚧 (In Progress)

**Status:** 🟡 CI/CD setup in progress | 🔴 Advanced features pending

**Professional Practices**
- Test data management strategies ✅
- Mocks vs. real environment testing 🚧
- Parallel test execution 🚧
- Flaky test control and stability 🚧
- Accessibility testing automation (cypress-axe) 🚧
- Visual regression with Percy or Applitools 🚧
- Test reporting (Allure/Mochawesome) 🚧
- CI/CD integration with GitHub Actions 🟡
- Cross-browser testing strategies 🚧
- Migration strategy to Playwright 🚧

**Challenges**: 
8. 🚧 Implement comprehensive accessibility audit for entire application
9. 🚧 Create a visual regression test suite for responsive designs
10. 🚧 Set up parallel test execution with proper data isolation
11. 🟡 Build a complete CI/CD pipeline with test reporting
12. 🚧 Design and implement a hybrid testing strategy combining API, E2E, and visual tests

---

## 🛠️ Technologies & Tools

- **Cypress**: End-to-end testing framework
- **Cypress Plugin API**: Enhanced API testing capabilities
- **cypress-axe**: Accessibility testing
- **AJV**: JSON Schema validation
- **Faker.js**: Test data generation
- **Percy/Applitools**: Visual regression testing
- **GitHub Actions**: Continuous Integration
- **Node.js**: Runtime environment
- **Mochawesome/Allure**: Test reporting

## 📁 Project Structure

```
cypress-studies/
├── .github/
│   └── workflows/          # CI/CD pipeline configurations
├── cypress/
│   ├── e2e/
│   │   ├── 1-getting-started/
│   │   ├── 2-advanced-examples/
│   │   └── api/            # API test suites
│   ├── fixtures/           # Test data and payloads
│   ├── support/
│   │   ├── commands.js     # Custom Cypress commands
│   │   ├── e2e.js          # Global configurations
│   │   ├── schemas/        # JSON Schema definitions
│   │   └── services/       # Service Object Pattern implementations
│   └── downloads/
├── cypress.config.js       # Cypress configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cecchettisilva/cypress-studies.git

# Navigate to project directory
cd cypress-studies

# Install dependencies
npm install
```

### Running Tests

```bash
# Open Cypress Test Runner
npm run cypress:open

# Run tests in headless mode
npm run cypress:run

# Run specific test file
npx cypress run --spec "cypress/e2e/api/pet.cy.js"
```

## 📊 Test Coverage

**Implemented:**
- ✅ **API Testing**: RESTful endpoints, request/response validation, contract testing
- ✅ **Database Testing**: SQL Server integration with validation queries
- ✅ **Service Object Pattern**: Organized API calls and test structure
- ✅ **Test Data Generation**: Dynamic data with Faker.js
- ✅ **Schema Validation**: JSON Schema contract testing with AJV

**Planned / In Progress:**
- 🚧 **E2E Testing**: Complete user flows and scenarios
- 🚧 **Component Testing**: Isolated UI component validation
- 🚧 **Accessibility Testing**: WCAG compliance, keyboard navigation, screen reader support
- 🚧 **Visual Regression**: UI consistency across browsers and viewports
- 🚧 **Integration Testing**: Multi-system interactions and workflows
- 🚧 **Web Automation**: Form handling, navigation, dynamic content
- 🚧 **Authentication**: Login flows, session management, token handling
- 🚧 **Performance**: Response time validation and optimization

## 🏗️ Architecture Patterns

### Service Object Pattern
Separates API calls from test logic, improving maintainability and reusability:

```javascript
// cypress/support/services/pet.api.js
export class PetApi {
  addNewPet(payload) {
    return cy.api('POST', '/v2/pet', payload);
  }
}
```

### Custom Commands
Reusable test actions defined in `commands.js`:

```javascript
Cypress.Commands.add('addNewPet', () => {
  return cy.api({ /* ... */ });
});
```

## 🔍 Key Features

- **Contract Testing**: Automated JSON Schema validation with AJV
- **Dynamic Test Data**: Faker.js integration for realistic test data
- **CI/CD Ready**: GitHub Actions workflow configured
- **Comprehensive Logging**: Enhanced test visibility with custom Cypress logs
- **Parallel Execution**: Optimized for faster test runs

## 📝 Best Practices Implemented

1. **Separation of Concerns**: Service objects separate API calls from test logic
2. **Reusable Components**: Custom commands for common operations
3. **Schema Validation**: Contract testing ensures API compliance
4. **Data Management**: Centralized fixtures and payload definitions
5. **Error Handling**: Proper handling of expected failures and edge cases

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**William Cecchetti Silva**
- GitHub: [@cecchettisilva](https://github.com/cecchettisilva)

---

⭐ If you find this project helpful, please consider giving it a star!