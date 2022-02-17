import {
  getandRenderShopItems,
  getandRenderCartItemswithPrice,
} from "./methods.js";

export const initalizeShop = () => {
  $(() => {
    getandRenderShopItems();

    $(document).on("click", ".add-shop-item", function (event) {
      console.log("adding shop item id:", event.target.id);
      $.get(`/api/order/${Cookies.get("order_id")}/ShopItem/${event.target.id}`)
        .then(getandRenderCartItemswithPrice())
        .catch((err) => console.log(err));
    });
  });
};
