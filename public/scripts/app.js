import {
  getandRenderShopItems,
  // getandRenderCartItemswithPrice,
  initializeOrder,
} from "../methods/methods.js";

import { initalizeForm } from "../methods/submitForm.js";
import { initalizeCart } from "../methods/cart.js";
import { initalizeShop } from "../methods/shop.js";
import {initializeStatus} from "../methods/orderStatus.js";

$(() => {
  // initialize order status;
  initializeStatus();
  //initialize order Id if not in cookie

  initializeOrder();

  // get shop items
  initalizeShop();

  // get cart items with total price of order;

  initalizeCart();
  //  submit order form modal ------
  initalizeForm();
});
