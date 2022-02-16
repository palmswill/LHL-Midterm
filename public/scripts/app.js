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
    fetchCartItem();

    console.log("cart rendered");
  });

  // for submit order form modal

  $(".check-out").click(function () {
    $(".pop-up").addClass("active");
  });
  $(".cancel-modal,.submit-order").click(function (event) {
    event.preventDefault();

    $(".pop-up").removeClass("active");
  });
});
