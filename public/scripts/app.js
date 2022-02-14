import {getandRenderShopItems,getandRenderCartItemswithPrice,submitForm,initializeOrder} from "../methods/methods.js";

$(() => {
  //initialize order Id if not in cookie

   initializeOrder();

  // get shop items

  getandRenderShopItems();

  // get request - get cart items with total price of order;

  getandRenderCartItemswithPrice();

  // for submit order form modal

  $(".check-out").click(function () {
    $(".pop-up").addClass("active");
  });
  $(".cancel-modal,.submit-order").click(function () {
    $(".pop-up").removeClass("active");
  });

  $(".submit-order").click(function (event) {
    event.preventDefault();
    
    submitForm();
  });
});
