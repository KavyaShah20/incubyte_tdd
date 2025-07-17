# Sweetshop TDD

A sweetshop management system built using Test-Driven Development (TDD) principles for the Incubyte assessment.

## Overview

This project implements a sweetshop management system that allows users to search and purchase a sweet based on their needs. The application follows TDD methodology to ensure robust, well-tested code with comprehensive test coverage.

## Features

- **Add Sweets**: Add new sweet items to the inventory
- **Delete Sweets**: Remove sweet items from the inventory
- **View Sweets**: Display all available sweets in the shop
- **Restock Sweets**: Update the quantity of existing sweet items
- **Inventory Management**: Track sweet quantities and availability

## Technology Stack

- **Development Approach**: Test-Driven Development (TDD)
- **Language**: Javascript
- **Testing Framework**: Jest

## Project Structure

```
incubyte_tdd/
│
├── src/ # All application source code and tests
│ ├── models/
│ │ └── sweet.model.js # Sweet model.
│ ├── services/
│ │ └── sweetshop.service.js # Core business logic for managing sweets
│ └── tests/
│   └── sweetshop.test.js # Jest test suite for the sweet shop logic
├── .gitignore # Git ignore rules
├── package.json # Project metadata and dependencies
├── package-lock.json # Project versions and lockfile for reproducible installs
├── README.md # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js installed (v14 or higher recommended)
- A terminal or command prompt
- A code editor like Visual Studio Code (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KavyaShah20/incubyte_tdd.git
   cd incubyte_tdd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```



## Testing
### Running Tests

```bash
npm test
```
### Test Cases Report
PASS  src/tests/sweetshop.test.js

    ✓ throws error if required fields are missing (118 ms)
    ✓ adds a sweet (3 ms)
    ✓ throws error on duplicate sweet ID (3 ms)
    ✓ throws error when adding sweet with negative quantity (9 ms)
    ✓ throws error when adding sweet with non-numeric price (5 ms)
    ✓ deletes a sweet (7 ms)
    ✓ throws error when deleting non-existent sweet (10 ms)
    ✓ throws error when deleting with null/undefined ID (6 ms)
    ✓ purchase sweet reduces quantity (1 ms)
    ✓ search sweets by name (11 ms)
    ✓ search sweets by category (5 ms)
    ✓ search sweets by price range (5 ms)
    ✓ sort sweets by price ascending (2 ms)

Test Suites: 1 passed, 1 total  
Tests:       13 passed, 13 total  
Snapshots:   0 total  
Time:        2.719 s  
Ran all test suites.


### Test Coverage

- Unit tests for all core functionality
- Integration tests for system workflows
- Test cases covering edge cases and error scenarios


### TDD Workflow

1. **Red**: Write a failing test
2. **Green**: Write minimal code to make the test pass
3. **Refactor**: Improve the code while keeping tests green

### Code Quality

- All features developed using TDD approach
- Comprehensive test suite
- Clean, maintainable code structure
- Proper error handling and validation


## Features Implemented

| Step | Feature Description                                                   |
|------|------------------------------------------------------------------------|
| 1    | Add a sweet with ID, name, category, price, and quantity              |
| 2    | Validate required fields (ID, name, category)                         |
| 3    | Prevent duplicate sweet IDs                                           |
| 4    | Delete a sweet by ID                                                  |
| 5    | Throw error if sweet to delete doesn't exist                          |
| 6    | Purchase a sweet (reduce quantity)                                    |
| 7    | Throw error if quantity to purchase exceeds available stock           |
| 8    | View all sweets                                                       |
| 9    | Restock a sweet (increase quantity)                                   |
| 10   | Throw error if sweet to restock doesn't exist                         |
| 11   | Search sweets by name (case-insensitive)                              |
| 12   | Search sweets by category                                             |
| 13   | Search sweets by price range (minPrice, maxPrice)                     |
| 14   | Sort sweets by price in ascending order                               |


## 👨‍💻 Author

**Kavya Shah**
- GitHub: [@KavyaShah20](https://github.com/KavyaShah20)
