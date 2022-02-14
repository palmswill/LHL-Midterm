$(() => {
  // test data

  // get request -get shop items

  $.get("/")
    .then(() => {
      $(".shop").empty();
      const shopItems = renderShopItems(shopList);

      $(".shop").append(shopItems);

      console.log("shop rendered");
    })
    .catch((err) => console.log(err));

  // get request - get cart items

  $.get("/").then(() => {
    const cartItem = renderCartItems(cartList);

    $(".basket").empty();
    $(".basket").append(cartItem);

    $(".price-display").empty();
    $(".price-display").append(renderCartTotal(cartList));

    console.log("cart rendered");
  });

  $(".check-out").click(function(){
    console.log(this.classList)}
  )

});
