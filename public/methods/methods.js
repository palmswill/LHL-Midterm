// shop
let shopList = [
  {
    name: "Dragon Roll",
    pricePerRoll: "15.99",
    imageUrl:
      "https://images.unsplash.com/photo-1615361200141-f45040f367be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwzfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1&q=80&w=1080",
    content: "sushi on black ceramic plate",
  },
  {
    name: "Unagi Roll",
    pricePerRoll: "5.99",
    imageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1",
    content: "sushi on black ceramic plate",
  },
  {
    name: "Tenpura Roll",
    pricePerRoll: "15.99",
    imageUrl:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwyfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1&q=80&w=1080",
    content: "sushi on black ceramic plate",
  },
  {
    name: "Don Don Don Roll",
    pricePerRoll: "15.99",
    imageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1",
    content: "sushi on black ceramic plate",
  },
];

const generateShopItemLayout = (shopItem) => {
  const { name, pricePerRoll, imageUrl, content } = shopItem;

  let $shopItem = `<div class="shop-item flex">
  <img
    src=${imageUrl}
    alt=""
  />
  <div class="content">
    <h3>${name}</h3>
    <p>${content}</p>
  </div>
  <button class="add-shop-item">
    <span>Add</span>
    <span class="price">$${pricePerRoll}</span>
  </button>
</div>
  `;

  return $shopItem;
};

const renderShopItems = (shopList) => {
  let shopText = "";
  for (const item of shopList) {
    shopText += generateShopItemLayout(item);
  }

  return shopText;
};

// cartItem
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
      <div> x ${quantity}</div>
    </div>
    <div class="price-tag">$${price}</div>
    <div class="cancel-section">
      <i class="${id} cancel-item fa-solid fa-xmark"></i>
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

  let tax = Math.round(0.13 * subTotal * 100) / 100;

  let totalPrice = Math.round(subTotal + tax * 100) / 100;

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


const fetchCartItem=()=>{
  const cartItem = renderCartItems(cartList);

    $(".basket").empty();
    $(".basket").append(cartItem);

    $(".price-display").empty();
    $(".price-display").append(renderCartTotal(cartList));
}
