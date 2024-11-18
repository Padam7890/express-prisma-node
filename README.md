

# Learn Express

A beginner-friendly guide to setting up a backend with **Express** and **Prisma**.

## Getting Started

Follow these steps to set up your backend efficiently.

---

### Prerequisites

- **Node.js** installed on your machine.
- Basic understanding of JavaScript and npm.

---

### Installation

1. **Initialize npm**:
   ```bash
   npm init -y
   ```

2. **Create an `index.js` file**:
   ```bash
   touch index.js
   ```

3. **Install Express**:
   ```bash
   npm install express
   ```

4. **Install Nodemon** (optional, for automatic server reloading):
   ```bash
   npm install nodemon --save-dev
   ```

---

### Setting Up Express

1. **Set up the server in `index.js`:**

   ```javascript
   const express = require('express');
   const app = express();
   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

2. **Run Your Server**:
   - Add this script to your `package.json` (if using Nodemon):
     ```json
     "scripts": {
       "dev": "nodemon index.js"
     }
     ```
   - Start the server:
     ```bash
     npm run dev
     ```

---

### Integrating Prisma for Database Management

1. **Install Prisma**:
   ```bash
   npm install prisma --save-dev
   ```

2. **Initialize Prisma** (using MySQL in this example):
   ```bash
   npx prisma init --datasource-provider mysql
   ```

3. **Define Models and Run Migrations**:
   - Update your models in the `schema.prisma` file.
   - Generate an initial migration:
     ```bash
     npx prisma migrate dev --name init
     ```
   - For subsequent schema changes:
     ```bash
     npx prisma migrate dev --name <your_migration_name>
     ```

4. **Install Prisma Client**:
   ```bash
   npm install @prisma/client
   ```

---

### Structuring Your Project

1. **Define Routes and Controllers**:
   - Create a `routes` folder to define API endpoints.
   - Create a `controllers` folder for business logic.

2. **Set Up Configuration Files**:
   - Add a `config` folder for configuration files.
   - Example: Create `prisma.js` for Prisma configuration.

   **`prisma.js` (Prisma Configuration)**:
   ```javascript
   const { PrismaClient } = require('@prisma/client');
   const prisma = new PrismaClient();

   module.exports = prisma;
   ```

---

## Additional Resources

- **Prisma Documentation**: [https://www.prisma.io/docs/getting-started/quickstart](https://www.prisma.io/docs/getting-started/quickstart)
- **Express Documentation**: [https://expressjs.com/en/starter/hello-world.html](https://expressjs.com/en/starter/hello-world.html)

