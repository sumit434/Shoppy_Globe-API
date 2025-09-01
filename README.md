SHOPPYGLOBE API
Project Overview

ShoppyGlobe is a backend API for an e-commerce platform. It is built with Node.js, Express, and MongoDB, providing endpoints to manage products, shopping cart operations, and user authentication.

Build APIs with Node.js and Express.js for ShoppyGlobe  
(implements GET /products, GET /products/:id, POST /cart, PUT /cart/:id, DELETE /cart/:id, auth with JWT, MongoDB integration)


FEATURES:
-Fetch all products and single product details.
-Add, update, and remove products in the shopping cart.
-User registration and login with JWT authentication.
-Protected cart routes (only accessible by authenticated users).
-Input validation and error handling for all API routes.


Backend: Node.js, Express.js, Database: MongoDB, Authentication: JWT (JSON Web Tokens), Testing: ThunderClient

REPO 
<<<<<<< HEAD
git clone (https://github.com/sumit434/Shoppy_Globe-API)
=======
git clone https://github.com/sumit434/Shoppy_Globe-API
>>>>>>> c4e4079 (Update README with project details)
cd shoppyglobe-api

SETUP
1. Clone repository
2. `cp .env.example .env` and fill values (MONGO_URI, JWT_SECRET)
3. `npm install`
4. Seed sample products: `npm run seed`
5. Start server: `npm run dev` (requires nodemon) or `npm start`
6. API base: `http://localhost:5000`

ROUTES
1.1 Get All Products
- `GET /api/products` - 
   Endpoint: GET /products
  -Fetches the list of all products from the database.

1.2 Get Single Product
- `GET /api/products/:id` 
    Endpoint: GET /products/:id
    Description: Fetches details of a single product by its ID.


All cart routes require JWT authentication.

2.1 Add Product to Cart
`POST /api/cart` - add product to cart (protected)
    Endpoint: POST /cart
    Description: Adds a product to the authenticated user's cart.

2.2 Update Cart Item
- `PUT /api/cart/:id` - update cart item (protected)
    Endpoint: PUT /cart/:id
    Updates the quantity of a product in the cart with /:id.

2.3 Remove Cart Item
- `DELETE /api/cart/:id` - remove cart item (protected)
    Endpoint: DELETE /cart/:id
    Removes a product from the cart with /:id.

3.1 Register User
- `POST /api/register` - register user
    Endpoint: POST /register
    Description: Registers a new user.
    
3.2 Login User
- `POST /api/login` - login user (returns JWT)
    Endpoint: POST /login
    Authenticates user and returns a JWT token.


TESTING 
-All API endpoints were tested using ThunderClient.
-JWT tokens were used to access protected cart routes.
-Screenshots of testing are included in /screenshots folder.


