# E-commerce Backend

## Description
This project is an e-commerce backend system developed using Node.js, Express, and Sequelize. It serves as the server-side software that manages product, category, and tag data through a RESTful API. This backend is designed to be integrated with any frontend system that needs e-commerce capabilities.

## Functionality/Demo Video
https://drive.google.com/file/d/162FqtU9BMf3ypCLqTtAH3rcP2ridULuD/view

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MySQL

### Steps
1. Clone the repository:
- git clone https://github.com/ralphmolu/e-commerce-backend
- cd e-commerce_backend
2. Install NPM packages
- npm install
3. Setup MySQL Database:
- Ensure MySQL is installed and running on your system
4. Configure environment variables:
- Create a new '.env' file in the root directory
- - Add the following configurations:
  ```
  DB_NAME='ecommerce_db'
  DB_USER='root'
  DB_PASSWORD=''
  ```

## Usage

To start the server, run: npm start


## API Endpoints

### Products
- **GET /api/products** - Retrieves all products along with their associated categories and tags.
- **POST /api/products** - Creates a new product.
- **GET /api/products/:id** - Retrieves a product by ID.
- **PUT /api/products/:id** - Updates a product by ID.
- **DELETE /api/products/:id** - Deletes a product by ID.

### Categories
- **GET /api/categories** - Retrieves all categories along with their associated products.
- **POST /api/categories** - Creates a new category.
- **GET /api/categories/:id** - Retrieves a category by ID.
- **PUT /api/categories/:id** - Updates a category by ID.
- **DELETE /api/categories/:id** - Deletes a category by ID.

### Tags
- **GET /api/tags** - Retrieves all tags along with their associated products.
- **POST /api/tags** - Creates a new tag.
- **GET /api/tags/:id** - Retrieves a tag by ID.
- **PUT /api/tags/:id** - Updates a tag by ID.
- **DELETE /api/tags/:id** - Deletes a tag by ID.

## Skills Improved
Throughout the development of this e-commerce backend, I have improved several key skills which include:

- **Node.js and Express**: Gained deeper understanding of building robust server-side applications.
- **Sequelize ORM**: Enhanced proficiency in using Sequelize to manage database operations more effectively.
- **RESTful API Design**: Improved skills in designing and implementing RESTful APIs to handle client-server communication.
- **Database Management**: Advanced knowledge in MySQL database management, schema design, and performance optimization.
- **Environment and Configuration Management**: Learned to manage and configure development environments using `.env` files for better security and flexibility.
- **Problem-Solving and Debugging**: Enhanced problem-solving skills through debugging complex issues and implementing efficient solutions.

## Contributing
Contributions are welcome. For major changes, please open an issue first to discuss what you would like to change. Ensure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact Information 👤
### Ralph Molu
- [GitHub](https://github.com/ralphmolu)
- [LinkedIn](https://www.linkedin.com/in/ralph-molu)
For further information, please contact me at [].
