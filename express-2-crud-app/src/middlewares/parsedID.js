const products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];

export const parsedIdMiddleWare = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const parsedId = parseInt(id);

  if (isNaN(parsedId)) return res.sendStatus(400);

  const findIndexProduct = products.findIndex(
    (product) => product.id === parsedId
  );
  console.log(parsedId, findIndexProduct);
  if (findIndexProduct === -1) return res.sendStatus(404);

  req.productIndex = findIndexProduct;

  next();
};
