var cart = []

const addToCart = (data) => {
  const productDetail = (typeof(data) == "string")
  ? JSON.parse(data)
  : data

  const existingProduct = cart.find(i => i.product == productDetail.product)
  if (existingProduct) {
    existingProduct.qty += 1;
  } else {
    cart = [...cart, {...productDetail, qty: 1}]
  }

  const products = cart.map(pd => `${pd.product}: $${pd.price.toFixed(2)} (x${pd.qty})`)
  alert(products.join("\n"))

}