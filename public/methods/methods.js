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
    pricePerRoll: 5.99,
    content: "dragon dragon dragon",
    imageUrl: "",
    quantity: 5,
  },
  {
    id: "2",
    name: "Unagi Roll",
    pricePerRoll: 15.99,
    content: "dragon dragon dragon",
    imageUrl: "",
    quantity: 1,
  },
  {
    id: "3",
    name: "California Roll with cheese",
    pricePerRoll: 29.99,
    content: "dragon dragon dragon",
    imageUrl: "",
    quantity: 1,
  },
];

const generateCartItem = (cartItem) => {
  const { id, name, pricePerRoll, quantity } = cartItem;

  const $cartItem = `
  <div class="cart-item">
    <div class="description">
      <div>${name}</div>
      <div> x ${quantity}</div>
    </div>
    <div class="price-tag">$${pricePerRoll}</div>
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