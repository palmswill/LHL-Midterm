



$(() => {
  // test data

  const shopItems = renderShopItems(shopList);

  $(".shop").append(shopItems);

  console.log(" shop rendered");

  const cartItem =renderCartItems(cartList);

  $(".basket").append(cartItem);

  console.log("cart render");
});
