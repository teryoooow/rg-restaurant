🍽️ RockyGo Restaurant – Cypress Test Scripts
This repository contains automated test scripts using Cypress for the RockyGo Restaurant app. These scripts are written to validate core restaurant-side functionalities, ensuring app reliability and a smooth user experience.

✅ Test Coverage
🛠️ Login and authentication flow

📋 Order management

🚚 Delivery status updates

📊 Dashboard and metrics

⚙️ Restaurant settings and profile management

🛠️ Tools & Frameworks
Cypress – End-to-end testing framework

cypress-file-upload – For testing file inputs (image uploads)

Node.js & npm – Package management and script execution

📁 Project Structure
bash
Copy
Edit
cypress/
  ├── fixtures/           # Sample data and test files
  ├── integration/        # Main test cases
  ├── support/            # Custom commands and config
  └── screenshots/        # Screenshots from failed tests
🚀 How to Run Tests
Install dependencies

bash
Copy
Edit
npm install
Open Cypress Test Runner

bash
Copy
Edit
npx cypress open
Run tests in headless mode

bash
Copy
Edit
npx cypress run
📌 Notes
Ensure the RockyGo Restaurant app (web) is running in the expected test environment.

Tests may rely on seeded or dummy accounts for consistency.

File uploads should be placed in the cypress/fixtures/ directory.
