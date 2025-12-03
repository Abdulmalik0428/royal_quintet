const productDetails = [
{
  name: "Yellow Gold Sapphire",
  price: 49200,
  imageUrl:
  "https://www.effyjewelry.com/cdn/shop/files/effy-ring-wz0gl78d74-1.jpg?v=1683832438",
  qty: 10,
  heading: "Oltin jozibasi va safir sirining mukammal uyg‘unligi",
  des:
  "Yellow Gold Sapphire — oltin jozibasi va safirning sirli nuri birlashgan haqiqiy premium sehr." },

  {
  name: "Diamond VIP",
  price: 29900,
  imageUrl:
  "https://www.matthewsjewellers.com/cdn/shop/products/MatildaCRG2021A.png?v=1630027756&width=3805",
  qty: 10,
  heading: "Mukkamallik va joziba ramzi",
  des:
  "Diamond VIP — mukammal mijozlar uchun." },
  {
  name: "Rose Gold Princess",
  price: 81999,
  imageUrl:
  "https://www.effyjewelry.com/cdn/shop/products/effy-bracelet-btzax70dr6-1-rt.jpg?v=1626714361",
  qty: 10,
  heading: "Nafislik va shohona qizil: har bir tafsilotda boylik timsoli”",
  des:
  "Diamond Tennis Bracelet, 7.66 TCW – “Mukammal kesimlar va abadiy yaltirash: harakatda porlaydigan premium zanjir" },
  {
  name: "Rose Gold Ruby",
  price: 33400,
  imageUrl:
  "https://www.effyjewelry.com/cdn/shop/files/effy-ring-wz0gq50dr6-1.jpg?v=1704385932",
  qty: 10,
  heading: "Shohona joziba va rubinning olovli nuri",
  des:
  "Rose Gold Ruby — rubinning olovli nuri va shohona jozibasi birlashgan noyob zargarlik asari." },
  {
  name: "Effy Hematian 18K",
  price: 67777,
  imageUrl:
  "https://www.effyjewelry.com/cdn/shop/files/effy-ring-kr15081dxv-4.jpg?v=1743611867",
  qty: 10,
  heading: "Nafislik va kuchning mukammal uyg‘unligi",
  des:
  "Effy Hematian 18K — orzulardagi istaklarni amalga oshiradigan noyob zargarlik asari." },
  {
  name: "Double Halo Necklace",
  price: 55500,
  imageUrl:
  "https://www.effyjewelry.com/cdn/shop/files/effy-necklace-xp0kd62d69-2.jpg?v=1754574947",
  qty: 10,
  heading: "Ikki karra joziba va yorqinlik",
  des:
  "Double Halo Necklace — ikki karra joziba va yorqinlikning mukammal uyg‘unligi." },
  
{
  name: "The Grace Ring",
  price: 40900,
  imageUrl: "https://media.istockphoto.com/id/517929083/photo/vintage-gold-and-diamond-ring-on-black-background.jpg?s=612x612&w=0&k=20&c=rNyPfBnQE4jMp0PWxgnnUn-ybPPGqUqXaBERsRh-T64=",
  qty: 15,
  heading: "Sof noziklik va nafislik timsoli",
  des:
  "The Grace Ring — noziklik va nafislikni o‘zida jamlagan sof joziba." },

{
  name: "Paperclip Pave",
  price: 56990,
  imageUrl: "https://www.luxurysouvenir.com/cdn/shop/products/1f4ded20d23d45f1a37fc6289a718ff6.thumbnail.0000000000.jpg?v=1682325120",
  qty: 20,
  heading: "Zamonaviy shakl va mayin yaltirash uyg‘unligi",
  des:
  "Paperclip Pave — zamonaviy shakl va mayin yaltirashning mukammal uyg‘unligi." },

{
  name: "Diamond Tennis",
  price: 58600,
  imageUrl: "https://i.etsystatic.com/38812800/r/il/8c5389/6822028173/il_fullxfull.6822028173_5ge2.jpg",
  qty: 35,
  heading: "Abadiy yaltirash va mukammal kesimlar",
  des:
  "Diamond Tennis — mukammal kesimlar chizig‘ida abadiy yaltirash." },

{
  name: "Diamond Fringe",
  price: 71900,
  imageUrl:
  "https://www.laurenbjewelry.com/media/catalog/product/cache/1/image/720x720/9df78eab33525d08d6e5fb8d27136e95/p/e/pendant_round_in_cushion_halo_yellow_gold_new.jpg",
  qty: 25,
  heading: "Boylik va yorqinlikni harakatda his eting",
  des:
  "Diamond Fringe — nafislik va boylik ramzi, har bir tafsiloti bilan seziladigan yuqori darajadagi yorqinlik." }];


const cartDetails = [];

//click events {
function addItem(event) {
  let btnClicked =
  event.parentElement.parentElement.parentElement.parentElement.parentElement;
  let noStocks = btnClicked.getElementsByClassName("out-of-stock-cover")[0];
  if (noStocks.style.display == "flex") return;
  let name = btnClicked.getElementsByClassName("product-name")[0].innerText;
  let price = parseFloat(
  btnClicked.
  getElementsByClassName("product-price")[0].
  innerText.replace("$ ", ""));

  let imgSrc = btnClicked.getElementsByClassName("product-img")[0].src;
  SwitchBtns(btnClicked);
  let cartItem = {
    name,
    price,
    imgSrc,
    qty: 1 };

  CartItems(cartItem);
  cartDetails.push(cartItem);
  RenderCart();
  CartItemsTotal();
}

function removeItem(event) {
  let btnClicked = event.parentElement;
  let itemName = btnClicked.getElementsByClassName("name")[0].innerText;
  let productNames = document.getElementsByClassName("product-name");
  cartDetails.forEach((item, i) => {
    if (itemName == item.name) {
      cartDetails.splice(i, 1);
      for (let name of productNames) {
        if (itemName == name.innerText) {
          let found = name.parentElement.parentElement;
          SwitchBtns(found);
        }
      }
    }
  });
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}

function clearCart() {
  ToggleBackBtns();
  cartDetails.length = 0;
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}

function qtyChange(event, handler) {
  let btnClicked = event.parentElement.parentElement;
  let isPresent = btnClicked.classList.contains("btn-add");
  let itemName = isPresent ?
  btnClicked.parentElement.parentElement.getElementsByClassName(
  "product-name")[
  0].innerText :
  btnClicked.parentElement.getElementsByClassName("name")[0].innerText;
  let productNames = document.getElementsByClassName("product-name");
  for (let name of productNames) {
    if (itemName == name.innerText) {
      let productBtn = name.parentElement.parentElement.getElementsByClassName(
      "qty-change")[
      0];
      cartDetails.forEach((item, i) => {
        if (itemName == item.name) {
          if (handler == "add" && item.qty < 10) {
            item.qty += 1;
            btnClicked.innerHTML = QtyBtn(item.qty);
            productBtn.innerHTML = QtyBtn(item.qty);
          } else if (handler == "sub") {
            item.qty -= 1;
            btnClicked.innerHTML = QtyBtn(item.qty);
            productBtn.innerHTML = QtyBtn(item.qty);
            if (item.qty < 1) {
              cartDetails.splice(i, 1);
              productBtn.innerHTML = AddBtn();
              productBtn.classList.toggle("qty-change");
            }
          } else {
            document.getElementsByClassName("purchase-cover")[0].style.display =
            "block";
            document.getElementsByClassName("stock-limit")[0].style.display =
            "flex";
            sideNav(0);
          }
        }
      });
    }
  }
  RenderCart();
  CartIsEmpty();
  CartItemsTotal();
}

function limitPurchase(event) {
  document.getElementsByClassName("purchase-cover")[0].style.display = "none";
  event.parentElement.style.display = "none";
  sideNav(1);
}

function sideNav(handler) {
  let sideNav = document.getElementsByClassName("side-nav")[0];
  let cover = document.getElementsByClassName("cover")[0];
  sideNav.style.right = handler ? "0" : "-100%";
  cover.style.display = handler ? "block" : "none";
  CartIsEmpty();
}

function buy(handler) {
  if (cartDetails.length == 0) return;
  sideNav(!handler);
  document.getElementsByClassName("purchase-cover")[0].style.display = handler ?
  "block" :
  "none";
  document.getElementsByClassName("order-now")[0].innerHTML = handler ?
  Purchase() :
  "";
}

function order() {
  let invoice = document.getElementsByClassName("invoice")[0];
  invoice.style.height = "500px";
  invoice.style.width = "400px";
  invoice.innerHTML = OrderConfirm();
  ToggleBackBtns();
  Stocks();
  clearCart();
}

function okay(event) {
  let container = document.getElementsByClassName("invoice")[0];
  if (event.target.innerText == "continue") {
    container.style.display = "none";
    document.getElementsByClassName("purchase-cover")[0].style.display = "none";
  } else {
    event.target.innerText = "continue";
    event.target.parentElement.getElementsByClassName(
    "order-details")[
    0].innerHTML = `<em class='thanks'>Biz bilan xarid qilganingiz uchun tashakkur</em>`;
    container.style.height = "180px";
  }
}
//}

// button components for better Ux {
function AddBtn() {
  return `
<div>
  <button onclick='addItem(this)' class='add-btn'>Add <i class='fas fa-chevron-right'></i></button>
</div>`;
}

function QtyBtn(qty = 1) {
  if (qty == 0) return AddBtn();
  return `
<div>
  <button class='btn-qty' onclick="qtyChange(this,'sub')"><i class='fas fa-chevron-left'></i></button>
  <p class='qty'>${qty}</p>
  <button class='btn-qty' onclick="qtyChange(this,'add')"><i class='fas fa-chevron-right'></i></button>
</div>`;
}
//}

//Ui components {
function Product(product = {}) {
  let { name, price, imageUrl, heading, des } = product;
  return `
<div class='card'>
  <div class='top-bar'>
    <i class='fab fa-ring'></i>
    <em class="stocks">In Stock</em>
  </div>
  <div class='img-container'>
    <img class='product-img' src='${imageUrl}' alt='' />
    <div class='out-of-stock-cover'><span>Out Of Stock</span></div>
  </div>
  <div class='details'>
    <div class='name-fav'>
      <strong class='product-name'>${name}</strong>
      <button onclick='this.classList.toggle("fav")' class='heart'><i class='fas fa-heart'></i></button>
    </div>
    <div class='wrapper'>
      <h5>${heading}</h5>
      <p>${des}</p>
    </div>
    <div class='purchase'>
      <p class='product-price'>$ ${price}</p>
      <span class='btn-add'>${AddBtn()}</span>
    </div>
  </div>
</div>`;
}

function CartItems(cartItem = {}) {
  let { name, price, imgSrc, qty } = cartItem;
  return `
<div class='cart-item'>
  <div class='cart-img'>
    <img src='${imgSrc}' alt='' />
  </div>
  <strong class='name'>${name}</strong>
  <span class='qty-change'>${QtyBtn(qty)}</span>
  <p class='price'>$ ${price * qty}</p>
  <button onclick='removeItem(this)'><i class='fas fa-trash'></i></button>
</div>`;
}

function Banner() {
  return `
<div class='banner'>
  <ul class="box-area">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  </ul>
  <div class='main-cart'>${DisplayProducts()}</div>

  <div class='nav'>
    <button onclick='sideNav(1)'><i class='fas fa-shopping-cart' style='font-size:2rem;'></i></button>
    <span class= 'total-qty'>0</span>
  </div>
  <div onclick='sideNav(0)' class='cover'></div>
  <div class='cover purchase-cover'></div>
  <div class='cart'>${CartSideNav()}</div>
  <div class='stock-limit'>
    <em>You Can Only Buy 10 Items For Each Product</em>
    <button class='btn-ok' onclick='limitPurchase(this)'>Okay</button>
  </div>
<div  class='order-now'></div>
</div>`;
}

function CartSideNav() {
  return `
<div class='side-nav'>
  <button onclick='sideNav(0)'><i class='fas fa-times'></i></button>
  <h2>Cart</h2>
  <div class='cart-items'></div>
  <div class='final'>
    <strong>Total: $ <span class='total'>0</span>.00/-</strong>
    <div class='action'>
      <button onclick='buy(1)' class='btn buy'>Purchase <i class='fas fa-credit-card' style='color:#6665dd;'></i></button>
      <button onclick='clearCart()' class='btn clear'>Clear Cart <i class='fas fa-trash' style='color:#bb342f;'></i></button>
    </div>
  </div>
</div>`;
}

function Purchase() {
  let toPay = document.getElementsByClassName("total")[0].innerText;
  let itemNames = cartDetails.map(item => {
    return `<span>${item.qty} x ${item.name}</span>`;
  });
  let itemPrices = cartDetails.map(item => {
    return `<span>$ ${item.price * item.qty}</span>`;
  });
  return `
<div class='invoice'>
  <div class='shipping-items'>
    <div class='item-names'>${itemNames.join("")}</div>
    <div class='items-price'>${itemPrices.join("+")}</div>
  </div>
<hr>
  <div class='payment'>
    <em>payment</em>
    <div>
      <p>to'lanishi kerak bo'lgan umumiy miqdor:</p><span class='pay'> $ ${toPay}</span>
    </div>
  </div>
  <div class='order'>
    <button onclick='order()' class='btn-order btn'>Order Now</button>
    <button onclick='buy(0)' class='btn-cancel btn'>Cancel</button>
  </div>
</div>`;
}

function OrderConfirm() {
  let orderId = Math.round(Math.random() * 1000);
  let totalCost = document.getElementsByClassName("total")[0].innerText;
  return `
<div>
  <div class='order-details'>
    <em>buyurtmangiz amalga oshdi</em>
    <p>Your order-id is : <span>${orderId}</span></p>
    <p>buyurtmangiz 3-5 ish kuni ichida sizga yetkaziladi</p>
    <p>to'lovni mahsulotlar sizga yetkazilgandan so'ng karta yoki istalgan onlayn tranzaksiya usuli orqali amalga oshirishingiz mumkin: <span>$ ${totalCost}</span></p>
  </div>
  <button onclick='okay(event)' class='btn-ok'>okay</button>
</div>`;
}
//}

//updates Ui components {
function DisplayProducts() {
  let products = productDetails.map(product => {
    return Product(product);
  });
  return products.join("");
}

function DisplayCartItems() {
  let cartItems = cartDetails.map(cartItem => {
    return CartItems(cartItem);
  });
  return cartItems.join("");
}

function RenderCart() {
  document.getElementsByClassName(
  "cart-items")[
  0].innerHTML = DisplayCartItems();
}

function SwitchBtns(found) {
  let element = found.getElementsByClassName("btn-add")[0];
  element.classList.toggle("qty-change");
  let hasClass = element.classList.contains("qty-change");
  found.getElementsByClassName("btn-add")[0].innerHTML = hasClass ?
  QtyBtn() :
  AddBtn();
}

function ToggleBackBtns() {
  let btns = document.getElementsByClassName("btn-add");
  for (let btn of btns) {
    if (btn.classList.contains("qty-change")) {
      btn.classList.toggle("qty-change");
    }
    btn.innerHTML = AddBtn();
  }
}

function CartIsEmpty() {
  let emptyCart = `<span class='empty-cart'>Siz savatga hech qanday mahsulotni qo'shmaganga o'xshaysiz</span>`;
  if (cartDetails.length == 0) {
    document.getElementsByClassName("cart-items")[0].innerHTML = emptyCart;
  }
}

function CartItemsTotal() {
  let totalPrice = cartDetails.reduce((totalCost, item) => {
    return totalCost + item.price * item.qty;
  }, 0);
  let totalQty = cartDetails.reduce((total, item) => {
    return total + item.qty;
  }, 0);
  document.getElementsByClassName("total")[0].innerText = totalPrice;
  document.getElementsByClassName("total-qty")[0].innerText = totalQty;
}

function Stocks() {
  cartDetails.forEach(item => {
    productDetails.forEach(product => {
      if (item.name == product.name && product.qty >= 0) {
        product.qty -= item.qty;
        if (product.qty < 0) {
          product.qty += item.qty;
          document.getElementsByClassName("invoice")[0].style.height = "180px";
          document.getElementsByClassName(
          "order-details")[
          0].innerHTML = `<em class='thanks'>Stocks Limit Exceeded</em>`;
        } else if (product.qty == 0) {
          OutOfStock(product, 1);
        } else if (product.qty <= 5) {
          OutOfStock(product, 0);
        }
      }
    });
  });
}

function OutOfStock(product, handler) {
  let products = document.getElementsByClassName("card");
  for (let items of products) {
    let stocks = items.getElementsByClassName("stocks")[0];
    let name = items.getElementsByClassName("product-name")[0].innerText;
    if (product.name == name) {
      if (handler) {
        items.getElementsByClassName("out-of-stock-cover")[0].style.display =
        "flex";
        stocks.style.display = "none";
      } else {
        stocks.innerText = "Only Few Left";
        stocks.style.color = "orange";
      }
    }
  }
}

function App() {
  return `
<div>
  ${Banner()}
</div>`;
}
//}

// injects the rendered component's html
document.getElementById("app").innerHTML = App();