fetch('http://localhost:8080/api/v1/cart/fetch', requestOptions)
  .then(response => {
    if (!response.ok) {
      console.log(`Add shoe to cart response not ok ${response}`)
      throw new Exception(`Add shoe to cart response not ok`);
    }
    return response.json()
  })
  .then(response => {
    return response
  })
  .then(data => {
    setCart(data)
  })
  .catch(error => console.error(`Error fetching cart data: ${error}`));