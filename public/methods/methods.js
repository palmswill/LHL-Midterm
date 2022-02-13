// shop
let shopList = [
  {
    name: "Dragon Roll",
    pricePerRoll: "15.99",
    imageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1",
    content: "sushi on black ceramic plate",
  },
  {
    name: "Dragon Roll",
    pricePerRoll: "15.99",
    imageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1",
    content: "sushi on black ceramic plate",
  },
  {
    name: "Dragon Roll",
    pricePerRoll: "15.99",
    imageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwzMDA4MTR8MHwxfHNlYXJjaHwxfHxzdXNoaXxlbnwwfHx8fDE2NDQ3MDg0OTY&ixlib=rb-1.2.1",
    content: "sushi on black ceramic plate",
  },
  {
    name: "Dragon Roll",
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

// cartItem = () =>
const cartList = [
  {
    name: "Dragon Roll",
    pricePerRoll: 15.99,
    content: "dragon dragon dragon",
    imageUrl: "",
    quantity: 5,
  },
  {
    name: "Dragon Roll",
    pricePerRoll: 15.99,
    content: "dragon dragon dragon",
    imageUrl: "",
    quantity: 1,
  },
  {
    name: "California Roll",
    pricePerRoll: 5.99,
    content: "dragon dragon dragon",
    imageUrl: "",
    quantity: 1,
  },
];
