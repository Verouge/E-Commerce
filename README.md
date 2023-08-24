# E-Commerce Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NPM-Package:](https://img.shields.io/badge/NPM_Package-MySQL2@3.6.0-blue.svg)](https://www.npmjs.com/package/mysql2)
[![NPM-Package:](https://img.shields.io/badge/NPM_Package-Dotenv@16.3.1-red.svg)](https://www.npmjs.com/package/dotenv)
[![NPM-Package:](https://img.shields.io/badge/NPM_Package-Express@4.18.2-purple.svg)](https://www.npmjs.com/package/express)
[![NPM-Package:](https://img.shields.io/badge/NPM_Package-Sequelize@6.32.1-lightgreen.svg)](https://www.npmjs.com/package/sequelize)

## Description

Designed specifically for the modern e-commerce entrepreneur, this backend application serves as a vital pillar for online business operations. It seamlessly integrates product management, allowing users to effortlessly add, view, update, or remove products from their online catalog. To enhance organization, each product is categorized, and the flexible tagging system ensures enhanced searchability by associating multiple tags to products. The application's robust architecture also establishes a many-to-many relationship between products and tags, highlighting the intricate relational dynamics of an e-commerce platform. Furthermore, the modular design ensures easy maintenance and scalability. In an era where e-commerce dominates the market landscape, this application offers business owners the efficiency and robustness required to manage their online inventory, propelling their ventures to new digital heights.

## Table of Contents

- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
- [Usage](#usage)
  - [1. Database Setup](#1-database-setup-before-diving-into-the-application-you-need-to-initialize-your-local-database)
  - [2. Initializing the Tables with Sequelize](#2-initializing-the-tables-with-sequelize)
  - [3. Seeding the Database](#3-seeding-the-database)
  - [4. Launching the Server](#4-launching-the-server)
  - [5. Using Insomnia to Test Routes](#5-using-insomnia-to-test-routes)
  - [6. Interacting with Products, Categories, and Tags](#6-interacting-with-products-categories-and-tags)
  - [7. Shutting Down](#7-shutting-down)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)
- [Questions](#questions)

## Getting Started

### Cloning the Repository

To clone the repository, navigate to the directory you want to clone the repository into.

Then, run the following command.

```bash
git clone 'git@github.com:Verouge/E-Commerce.git'
```

## Usage

### 1. Database Setup: Before diving into the application, you need to initialize your local database.

- Ensure you have MySQL installed on your system.
- Open your terminal or MySQL command-line tool.
- Run the command:

  ```bash
  mysql -u [username] -p (replace [username] with your MySQL username)
  ```

- enter your password when prompted.

- Create a new database by running:

  ```bash
  CREATE DATABASE ecommerce_db;
  ```

- Select the database you've just created:

  ```bash
  USE ecommerce_db;
  ```

### 2. Initializing the Tables with Sequelize:

- In the root directory of your project, run the command: `npm start`. This initializes your database tables using Sequelize.

### 3. Seeding the Database:

- If you'd like to populate the database with sample data, ensure you've run `npm start` first to set up the tables.
- Then, in the terminal, execute: `npm run seed` to seed the database with sample entries.

### 4. Launching the Server:

- From the root directory, run the command: `npm start` to initiate the server.
- The terminal will display a message indicating the server is running and listening on a specific port.

### 5. Using Insomnia to Test Routes:

- Open Insomnia Core.
- Set up requests for the various API endpoints provided by the application (e.g., GET, POST, PUT, DELETE for products, categories, tags).
- Input the appropriate URL based on the endpoint you wish to test. For example, to fetch all products, use a GET request to `http://localhost:<your_port>/api/products`.
- For POST, PUT, and DELETE requests, ensure you input the necessary JSON payload or specify the right product/category/tag ID in the URL.

### 6. Interacting with Products, Categories, and Tags:

- Use Insomnia to easily add (POST), view (GET), update (PUT), or remove (DELETE) products, categories, or tags from the database.
- Follow prompts and structure your JSON requests based on the data model. For instance, when adding a product, your JSON body might look like:

```bash
{
  "product_name": "Sample Product",
  "price": 100.00,
  "stock": 15,
  "category_id": 1,
  "tagIds": [1, 3, 5]
}
```

### 7. Shutting Down:

- To stop the server, simply go to the terminal where it's running and press `CTRL+C`.
- To exit Insomnia, close the application window.

![](/assets/demo.gif)

## Contributing

Please contact me to add your contributions

## License

This project is licensed under the MIT license.

```
Copyright <2023> <Brandon Zhang>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Credits

Brandon Zhang

## Acknowledgments

This project employs an array of technologies and tools to offer a seamless e-commerce backend experience:

- **Sequelize**: An ORM for Node.js, it simplifies database interactions and supports various database dialects. The application uses Sequelize to design the data models and execute CRUD operations. [Official website](https://sequelize.org/)

- **MySQL**: Serving as the project's relational database system, MySQL is both robust and efficient, and it underpins our data storage solution. [Official website](https://www.mysql.com/)

- **Node.js**: This runtime environment enables the execution of server-side JavaScript code, providing the foundation upon which our backend services run.

- **Express.js**: A minimal and flexible Node.js web application framework that offers a suite of robust features for web and mobile applications, aiding in routing and API creation. [Official website](https://expressjs.com/)

- **Insomnia**: Used for API testing, Insomnia makes it easier to debug routes, visualize responses, and ensure the backend operations are functioning as intended. [Official website](https://insomnia.rest/)

- **Dotenv**: This zero-dependency module loads environment variables from a `.env` file into `process.env`, allowing the application to configure distinct environments. [View on npm](https://www.npmjs.com/package/dotenv)

## Questions

If you have any questions, please feel free to contact me via email or on GitHub.

Email: branola1998628@gmail.com

GitHub: [verouge](https://github.com/verouge)
