<h1>Triveous-Assignment</h1>

<p>Internship assignment for Triveous</p>
<p>Cyclic Deployment <a href="https://fine-puce-chinchilla-gown.cyclic.app/">Link</a></p>

<h2>Table of Contents</h2>

<ol>
  <li><a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#usage">Usage</a>
    <ul>
      <li><a href="#api-documentation">API Documentation</a></li>
      <li><a href="#examples">Examples</a></li>
    </ul>
  </li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ol>

<h2 id="getting-started">Getting Started</h2>

<p>Follow these steps to set up and run the project on your local machine.</p>

<h3 id="prerequisites">Prerequisites</h3>

<p>Make sure you have the following prerequisites installed:</p>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a> and npm (Node Package Manager)</li>
  <li><a href="https://www.mongodb.com/">MongoDB</a> database</li>
  <li><a href="https://git-scm.com/">Git</a> (for cloning the project)</li>
</ul>

<h3 id="installation">Installation</h3>

<ol>
  <li>Clone the repository to your local machine:</li>
</ol>

<pre><code>git clone https://github.com/ilahiamaan606/Triveous-Assignment.git</code></pre>

<ol start="2">
  <li>Install project dependencies using npm:</li>
</ol>

<pre><code>npm install</code></pre>

<ol start="3">
  <li>Create a .env file in the project root and add the following environment variables:</li>
</ol>

<pre><code>port=8080
mongourl=your-mongodb-url
key=your-jwt-secret-key</code></pre>

<ol start="4">
  <li>Start the server:</li>
</ol>

<pre><code>npm run server</code></pre>

<h2 id="api-documentation">API Documentation</h2>

<h3>User Authentication</h3>

<ul>
  <li><strong>POST /user/signup:</strong> Register a new user by providing an email and password.</li>
  <li><strong>POST /user/login:</strong> Log in using a registered email and password to receive a JWT token.</li>
</ul>

<h3>Products</h3>

<ul>
  <li><strong>GET /product:</strong> Retrieve all products in the database.</li>
  <li><strong>POST /product/add:</strong> Add a new product with the following JSON schema:</li>
</ul>

<pre><code>{
    "title": "Product Title",
    "price": 19.99,
    "description": "Product Description",
    "categoryId": 1
}</code></pre>

<ul>
  <li><strong>GET /product/{product id}:</strong> Retrieve a product with a specific ID.</li>
</ul>

<h3>Cart</h3>

<p>These routes require a valid JWT token provided in the Authorization header.</p>

<ul>
  <li><strong>GET /cart:</strong> Retrieve all cart items of the logged-in user.</li>
  <li><strong>POST /cart/add:</strong> Add a product to the cart by providing the product ID:</li>
</ul>

<pre><code>{
    "productid": "product-id-here"
}</code></pre>

<ul>
  <li><strong>PUT /cart/updateQuantity/{cart id}:</strong> Update the quantity of a specific cart item.</li>
  <li><strong>DELETE /cart/deleteItem/{cart id}:</strong> Delete a particular cart item.</li>
</ul>

<h3>Orders</h3>

<ul>
  <li><strong>POST /order/placeorder:</strong> Place an order for all items in the cart.</li>
  <li><strong>GET /order/orderhistory:</strong> View the order history specific to the logged-in user.</li>
  <li><strong>GET /order/orderdetail/{order id}:</strong> View the details of an order with a specific order ID.</li>
</ul>
