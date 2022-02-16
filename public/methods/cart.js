import { getandRenderCartItemswithPrice } from "./methods.js";
export const initalizeCart = () => {
  $(() => {
    // initialize cart
    let order_id = Cookies.get("order_id");
    // if order_id is not defined in cookie, get an order_id;
    if (!order_id) {
      $("/api/order/")
        .post()
        .then((result) => {
          Cookies.set("order_id", JSON.stringify(result.id));
        })
        .catch((err) => console.log(err));
    } else {
      // if order id is found , render cart
      getandRenderCartItemswithPrice();
    }

    $(document).on("click", ".increment", function (event) {
      console.log(Cookies.get("order_id"), event.target.id, "incremented");

      getandRenderCartItemswithPrice();
    });
    $(document).on("click", ".decrement", function (event) {
      console.log(Cookies.get("order_id"), event.target.id, "decremented");
      getandRenderCartItemswithPrice();
    });

    $(document).on("click", ".cancel-item", function (event) {
      console.log(Cookies.get("order_id"), event.target.id, "removed");
      getandRenderCartItemswithPrice();
    });
  });
};
