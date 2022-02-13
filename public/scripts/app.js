$(() => {
  // test data

  // get request -get shop items
  const shopItems = renderShopItems(shopList);

  $(".shop").append(shopItems);

  console.log(" shop rendered");

  // get request - get cart items
  const cartItem = renderCartItems(cartList);

  $(".basket").append(cartItem);

  $(".price-display").empty();
  $(".price-display").append(renderCartTotal(cartList));

  console.log("cart rendered");
});
