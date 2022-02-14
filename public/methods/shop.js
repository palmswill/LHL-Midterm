import { getandRenderShopItems,getandRenderCartItemswithPrice } from "./methods.js";

export const initalizeShop=()=>{
  $(()=>{

  getandRenderShopItems();

  
  $(document).on("click",".add-shop-item",function(event){
    console.log(event.target)
    console.log("adding shop item id:",event.target.id);
    getandRenderCartItemswithPrice();

  })








  })


}