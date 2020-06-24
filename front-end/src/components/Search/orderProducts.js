export function orderAscByPrice(products) {
  return products.sort((a, b) => a.price - b.price);
}

export function orderDescByPrice(products) {
  return products.sort((a, b) => b.price - a.price);
}
