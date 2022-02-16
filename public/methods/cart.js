import { getandRenderCartItemswithPrice } from "./methods.js";
export const initalizeCart = () => {
  $(() => {
    // initialize cart
      getandRenderCartItemswithPrice();
  
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
