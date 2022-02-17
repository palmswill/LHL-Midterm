// order

export const initializeOrder = () => {
  let order_id = Cookies.get("order_id");
  // if order_id is not defined in cookie, get an order_id;
  if (!order_id) {
    $.post("/api/order/")
      .then((result) => {
        console.log(result);
        Cookies.set("order_id", JSON.stringify(result.id));
      })
      .catch((err) => console.log(err));
  }
  console.log("order_id:", Cookies.get("order_id"));
};

//remove order_id
export const removeOrder = () => {
  Cookies.remove("order_id");
};

// shop------------------------------

export const shopList = [
  {
    id: 1,
    name: "Dragon Roll",
    pricePerRoll: "15.99",
    imageUrl:
      "https://images.unsplash.com/photo-1615361200141-f45040f367be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwzfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1&q=80&w=1080",
    content: "sushi on black ceramic plate",
  },
  {
    id: 2,
    name: "Unagi Roll",
    pricePerRoll: "5.99",
    imageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1",
    content: "sushi on black ceramic plate",
  },
  {
    id: 3,
    name: "Tenpura Roll",
    pricePerRoll: "15.99",
    imageUrl:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwyfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1&q=80&w=1080",
    content: "sushi on black ceramic plate",
  },
  {
    id: 4,
    name: "Don Don Don Roll",
    pricePerRoll: "15.99",
    imageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1",
    content: "sushi on black ceramic plate",
  },
];

const generateShopItemLayout = (shopItem) => {
  const { id, name, price, imageurl, content } = shopItem;

  let $shopItem = `<div class="shop-item flex">
  <img
    src=${imageurl}
    alt=""
  />
  <div class="content">
    <h3>${name}</h3>
    <p>${content}</p>
  </div>
  <button id=${id} class="add-shop-item">
    <span id=${id}>Add</span>
    <span id=${id} class="price">$${price}</span>
  </button>
</div>
  `;

  return $shopItem;
};

export const renderShopItems = (shopList) => {
  let shopText = "";
  for (const item of shopList) {
    shopText += generateShopItemLayout(item);
  }

  return shopText;
};

// get and render shop items
export const getandRenderShopItems = () => {
  $.get("/api/shopItem")
    .then((results) => {
      $(".shop").empty();
      const shopItems = renderShopItems(results);

      $(".shop").append(shopItems);

      console.log("shop rendered");
    })
    .catch((err) => console.log(err));
};

// cartItem-------------------------
const cartList = [
  {
    id: "1",
    name: "Dragon Roll",
    price: 5.99,
    content: "dragon dragon dragon",
    imageUrl: "",
    quantity: 5,
  },
  {
    id: "2",
    name: "Unagi Roll",
    price: 15.99,
    content: "dragon dragon dragon",
    imageUrl: "",
    quantity: 1,
  },
  {
    id: "3",
    name: "California Roll with cheese",
    price: 29.99,
    content: "dragon dragon dragon",
    imageUrl: "",
    quantity: 1,
  },
];

const generateCartItem = (cartItem) => {
  const { id, name, price, quantity } = cartItem;

  const $cartItem = `
  <div class="cart-item">
    <div class="description">
      <div>${name}</div>
      <div> x ${quantity}
      <i id=${id} class="fa-solid fa-plus increment"></i>
      ${
        quantity === 1
          ? ""
          : `<i id=${id} class="fa-solid fa-minus decrement"></i>
      `
      }
      </div>
    </div>
    <div class="price-tag">$${price}</div>
    <div class="cancel-section">
      <i id=${id} class="cancel-item fa-solid fa-xmark"></i>
    </div>
  </div>`;

  return $cartItem;
};

const renderCartItems = (cartList) => {
  let cartText = "";
  for (const item of cartList) {
    cartText += generateCartItem(item);
  }

  return cartText;
};

const renderCartTotal = (cartList) => {
  let subTotal = 0;

  cartList.forEach((item) => {
    const { price, quantity } = item;
    subTotal += price * quantity;
  });

  subTotal = Math.round(subTotal * 100) / 100;

  let tax = Math.round(0.13 * subTotal * 100) / 100;

  let totalPrice = Math.round((subTotal + tax) * 100) / 100;

  const $PriceText = `
  <div class="flex bold">
    <span>Subtotal</span>
    <span>$${subTotal}</span>
  </div>
  <div class="flex fs-300 light-grey-text semi-bold">
     <span><i class="fa-solid fa-angle-right"></i> 
     Total Tax</span>
    <span>$${tax}</span>
  </div>
  <div class="flex bold">
    <span>Amount due</span>
    <span>$${totalPrice}</span>
  </div>`;

  return $PriceText;
};

export const fetchCartItem = () => {
  $.get(`/api/order/${Cookies.get("order_id")}/cartItem`)
    .then((cartList) => {
      console.log(cartList);
      $(".basket").empty();
      $(".basket").append(renderCartItems(cartList));
      $(".price-display").empty();
      $(".price-display").append(renderCartTotal(cartList));
    })
    .catch((err) => console.log(err));
};

export const getandRenderCartItemswithPrice = () => {
  $.get("/")
    .then(() => {
      fetchCartItem();

      console.log("cart rendered");
    })
    .catch((err) => console.log(err));
};

// order -status

const renderOrderItem = (cartItem) => {
  const { name, price, quantity } = cartItem;

  let $ItemText = `
  <div class="cart-item" id= "${name}">
    <div>${name}</div>
    <div>$${price}</div>
    <div>x ${quantity}</div>
  </div>
  `;
  return $ItemText;
};

const renderOrderItemList = (cartItems) => {
  let itemList = "";
  for (const item of cartItems) {
    itemList += renderOrderItem(item);
  }
  return itemList;
};

export const renderOrder = (orderObject) => {
  const { name, email, phone, cartItems, estimated_completion, completed } =
    orderObject;

  const $orderText = `
  <div class>
    <h5>${name} 's Order</h5>
    <div>  
      <span>Estimated Completed in: ${estimated_completion?estimated_completion:"wating for restaurant response..."}</span>
      <div class="complete" style="color:${
        completed ? "green" : "red"
      }">${completed ? "completed" : "incomplete"}</div>
   </div>
   <div class="items">
   ${renderOrderItemList(cartItems)}
   </div>
  </div>`;
  return $orderText;
};

export const renderOrderList = () => {
  const orderList = JSON.parse(Cookies.get("submitted_order"));
  if (orderList && orderList.length) {
    for (const orderId of orderList) {
      $.get(`/api/order/${orderId}`)
        .then((result) => renderOrder(result))
        .then((renderResult) => $(".order-content").append(renderResult));
    }
  }
};

export const initializeOrderStatus = () => {
  let submittedOrderList = Cookies.get("submitted_order")
    ? JSON.parse(Cookies.get("submitted_order"))
    : undefined;
  if (!submittedOrderList) {
    Cookies.set("submitted_order", JSON.stringify([]));
    submittedOrderList = [];
  }
  

  Promise.all(
    submittedOrderList.map((orderId) => $.get(`/api/order/${orderId}`))
  )
    .then((resultList) => {
      $(".order-content").empty()
      resultList.forEach((result) =>
        $(".order-content").append(renderOrder(result))
      );
    })
    .then(console.log("orderstatus initialized"))
    .catch((err) => console.log(err));
};

// form submission

export const submitForm = () => {
  const obj = {};

  const formArray = $(".submit-form").serializeArray();
  const order_id = Cookies.get("order_id");
  obj.order_id = order_id;
  for (let input of formArray) {
    const { name, value } = input;

    obj[name] = value;
  }

  // phone number must be 10 digit number
  var regex = /^[0-9]+$/;
  

  if (obj.phone.length === 10 && obj.phone.match(regex)) {
    obj.phone = "+" + obj.phone;
    // form-submission after adding order_id;

    $.post("api/order/submit",obj)
      .then($(".phone-error").empty())
      .then($(".pop-up").removeClass("active"))
      .then(
        /// set current order to submitted order list
        Cookies.set(
          "submitted_order",
          JSON.stringify([
            ...JSON.parse(Cookies.get("submitted_order")),
            JSON.parse(Cookies.get("order_id")),
          ])
        )
      )
      .then(Cookies.remove("order_id")) ///remove current order
      .then(initializeOrderStatus())
      .then(initializeOrder()) ///set up a new order
      .catch((err) => console.log(err));
  } else {
    $(".phone-error").empty();
    $(".phone-error").append("phone number must be a 10 digits number");
  }
};
