"Note: Copy the env.example file to a new .env file in the root folder."

# Learn Express

A beginner-friendly guide to setting up a backend with Express and Prisma.

## Getting Started

Follow these steps to get your backend up and running.

### Prerequisites

- **Node.js** installed on your machine.
- Basic understanding of JavaScript and npm.

### Installation

1. **Initialize npm:**
   ```bash
   npm init -y
   ```

2. **Create an `index.js` file:**
   ```bash
   touch index.js
   ```

3. **Install Express:**
   ```bash
   npm install express
   ```

4. **Install nodemon** (optional, for automatic server reloading):
   ```bash
   npm install nodemon --save-dev
   ```

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

2. **Run Your Server:**
   - If you're using nodemon, add this script to `package.json`:
     ```json
     "scripts": {
       "dev": "nodemon index.js"
     }
     ```
   - Start the server:
     ```bash
     npm run dev
     ```

### Integrating Prisma for Database Management

1. **Install Prisma:**
   ```bash
   npm install prisma --save-dev
   ```

2. **Initialize Prisma with MySQL:**
   ```bash
   npx prisma init --datasource-provider mysql
   ```

3. **Define Models and Run Migrations:**
   - Define your models in the `schema.prisma` file.
   - Generate a migration:
     ```bash
     npx prisma migrate dev --name init
     ```
   - For additional migrations (after making schema changes):
     ```bash
     npx prisma migrate dev --name <your_migration_name>
     ```

4. **Install Prisma Client:**
   ```bash
   npm install @prisma/client
   ```

## Additional Resources

- **Prisma Documentation**: [https://www.prisma.io/docs/getting-started/quickstart](https://www.prisma.io/docs/getting-started/quickstart)
- **Express Documentation**: [https://expressjs.com/en/starter/hello-world.html](https://expressjs.com/en/starter/hello-world.html)

