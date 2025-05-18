/*


1- Import the express Package: Write code to import the express package into your program.

Initialize an Express Application: Initialize an Express application by calling express() and store it in a variable named app.

2- Create a Route to Retrieve a Product by Category, Subcategory, and ID: Set up a GET route in Express at the path /:category/:subcategory/:id. This route should extract the category, subcategory, and id parameters from the request.

3- Search for the Category: Inside the route, search the storeData array for a category that matches the category parameter from the request.

4- Search for the Subcategory: If the category is found, search within its subcategories for a subcategory that matches the subcategory parameter from the request.

Search for the Product by ID: If the subcategory is found, search within its products for a product with an id that matches the id parameter from the request.

5- Respond with the Product or Error Messages: If the product is found, send it in the response. If any step fails (i.e., category, subcategory, or product is not found), send an appropriate error message ("did not find the category," "did not find the subcategory," or "did not find the product").

6- Start the Server: Set the application to listen on port 4000 and log a message to the console indicating that the server is running.
*/

const storeData = [
  {
    category: "electronics",
    subcategories: [
      {
        subcategory: "smartphones",
        products: [
          {
            id: 1,
            name: "Galaxy S21",
            brand: "Samsung",
            specs: { storage: "128GB", color: "Phantom Gray" },
            price: 799,
          },
          {
            id: 2,
            name: "iPhone 13",
            brand: "Apple",
            specs: { storage: "256GB", color: "Blue" },
            price: 999,
          },
        ],
      },
      {
        subcategory: "laptops",
        products: [
          {
            id: 3,
            name: "MacBook Pro",
            brand: "Apple",
            specs: { storage: "512GB", color: "Space Gray" },
            price: 1999,
          },
          {
            id: 4,
            name: "XPS 13",
            brand: "Dell",
            specs: { storage: "1TB", color: "Silver" },
            price: 1499,
          },
        ],
      },
    ],
  },
  {
    category: "home-appliances",
    subcategories: [
      {
        subcategory: "cleaning",
        products: [
          {
            id: 5,
            name: "Roomba i7",
            brand: "iRobot",
            specs: { features: "Wi-Fi Connected, Smart Mapping" },
            price: 699,
          },
          {
            id: 6,
            name: "Dyson V11",
            brand: "Dyson",
            specs: { features: "Cordless, HEPA Filter" },
            price: 599,
          },
        ],
      },
      {
        subcategory: "kitchen",
        products: [
          {
            id: 7,
            name: "Instant Pot",
            brand: "Instant",
            specs: {
              capacity: "8 Qt",
              functions: "Pressure Cooker, Slow Cooker",
            },
            price: 129,
          },
          {
            id: 8,
            name: "Air Fryer",
            brand: "Ninja",
            specs: { capacity: "5.5 Qt", features: "Digital Controls" },
            price: 149,
          },
        ],
      },
    ],
  },
  {
    category: "fashion",
    subcategories: [
      {
        subcategory: "men",
        products: [
          {
            id: 9,
            name: "Leather Jacket",
            brand: "Zara",
            specs: { size: "L", color: "Black" },
            price: 199,
          },
          {
            id: 10,
            name: "Sneakers",
            brand: "Nike",
            specs: { size: "11", color: "White" },
            price: 120,
          },
        ],
      },
      {
        subcategory: "women",
        products: [
          {
            id: 11,
            name: "Summer Dress",
            brand: "H&M",
            specs: { size: "M", color: "Floral" },
            price: 59,
          },
          {
            id: 12,
            name: "Handbag",
            brand: "Coach",
            specs: { material: "Leather", color: "Tan" },
            price: 250,
          },
        ],
      },
    ],
  },
];

// answer
const express = require("express");

const app = express();

const PORT = 4000;

app.get("/:category/:subcategory/:id", (req, res) => {
  const category = storeData.find(
    (item) => item.category === req.params.category
  );
  if (category) {
    const subcategory = category.subcategories.find(
      (item) => item.subcategory === req.params.subcategory
    );
    if (subcategory) {
      const product = subcategory.products.find(
        (product) => product.id === Number(req.params.id)
      );
      if (product) {
        res.send(product);
      } else res.status(404).json({ message: "did not find the product," });
    } else res.status(404).json({ message: "did not find the subcategory," });
  } else res.status(404).json({ message: "did not find the category," });
});

app.listen(PORT, () => {
  console.log("it's running on " + PORT);
});
