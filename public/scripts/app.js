



$(() => {
  // test data

  const shopItems = renderShopItems(shopList);

  $(".shop").append(shopItems);

  console.log("rendered");
});
