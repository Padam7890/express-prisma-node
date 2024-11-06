
# Learn Express

A beginner-friendly guide to setting up a backend with Express and Prisma.

## Getting Started

Follow these steps to get your backend up and running:

### Prerequisites

- Node.js installed on your machine
- Basic understanding of JavaScript and npm

### Installing

1. **Initialize npm:**
   ```bash
   npm init
   ```

2. **Create an index.js file:**
   ```bash
   touch index.js
   ```

3. **Install Express:**
   ```bash
   npm install express
   ```

4. **Install nodemon (optional, for automatic server reloading):**
   ```bash
   npm install nodemon --save-dev
   ```





### Setting Up Express

1. **Set up the server:**

   ```javascript
   // index.js
   const express = require('express');
   const app = express();
   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

3.  **Run Your Server:**
   ```bash
   npm run dev
   ```



### Integrating Prisma for Database Management

1. **Install Prisma:**
   ```bash
   npm install prisma --save-dev
   ```

2. **Initialize Prisma with mysql:**
   ```bash
   npx prisma init --datasource-provider mysql
   ```

3. **Define Models and Run Migrations:**
   
   - Define your models in the `schema.prisma` file.
   - Generate a migration:
     ```bash npx prisma migrate dev --name init
     ```
   - Second migration (write whatever you changes after --name)
  ```bash npx prisma migrate dev --name table_created```


4. **Install Prisma Client:**
   ```bash npm install @prisma/client```

## For more About Prisma, Follow Prisma documentation:
https://www.prisma.io/docs/getting-started/QuickStart

## For More About Express, Follow Express documentation:
https://expressjs.com/en/starter/hello-world.html
  
