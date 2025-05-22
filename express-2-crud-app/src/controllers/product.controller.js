const products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

export function getAllProducts(request, response) {
  response.send(products);
}

export function getOneProduct(request, response) {
  const { productIndex } = request;
  response.send(products[productIndex]);
}

export function postProduct(request, response) {
  const { body } = request;
  products.push({
    id: products[products.length - 1].id + 1,
    ...body,
  });
  response.send(201);
}

export function putProduct(request, response) {
  const { productIndex, body } = request;
  products[productIndex] = { id: products[productIndex].id, ...body };
  return response.send("updated");
}

export function patchProduct(request, response) {
  const { productIndex, body } = request;
  products[productIndex] = {
    ...products[productIndex],
    ...body,
  };
  response.sendStatus(200);
}

export function deleteProduct(request, response) {
  const { productIndex } = request;
  products.splice(productIndex, 1);
  response.sendStatus(200);
}
