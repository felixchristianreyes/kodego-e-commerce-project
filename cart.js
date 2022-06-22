const heartButton = document.querySelectorAll(".addtobag");
const productContainer = document.querySelector(".productContainer");

let products = [
  {
    id: 1,
    name: "Iced Latte",
    tag: "latte",
    price: 125,
    inCart: 0,
  },
  {
    id: 2,
    name: "Iced Mocha",
    tag: "mocha",
    price: 150,
    inCart: 0,
  },
  {
    id: 3,
    name: "Iced Americano",
    tag: "americano",
    price: 100,
    inCart: 0,
  },
  {
    id: 4,
    name: "Iced Orange Espresso",
    tag: "orange-espresso",
    price: 150,
    inCart: 0,
  },
  {
    id: 5,
    name: "Iced Cappuccino",
    tag: "cappuccino",
    price: 150,
    inCart: 0,
  },
  {
    id: 6,
    name: "Iced Macha Green Tea",
    tag: "macha",
    price: 200,
    inCart: 0,
  },
];

for (let i = 0; i < heartButton.length; i++) {
  heartButton[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

const onLoading = () => {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".bagSpan").textContent = productNumbers;
  }
};
const cartNumbers = (products) => {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".bagSpan").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".bagSpan").textContent = 1;
  }
  setItems(products);
};
const setItems = (products) => {
  let cartItems = localStorage.getItem("productIncart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[products.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [products.tag]: products,
      };
    }
    cartItems[products.tag].inCart += 1;
  } else {
    products.inCart = 1;
    cartItems = {
      [products.tag]: products,
    };
  }

  localStorage.setItem("productIncart", JSON.stringify(cartItems));
};
const totalCost = (products) => {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price);
  } else {
    localStorage.setItem("totalCost", products.price);
  }
};

const displayCart = () => {
  let cartItems = localStorage.getItem("productIncart");
  cartItems = JSON.parse(cartItems);
  let productNumbers = localStorage.getItem("cartNumbers");

  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
        <div class='products  row card bg-floralwhite my-2' >
        <div class="d-flex justify-content-between align-items-center">
        <div
            class="col-3 p-0 d-flex flex-column align-items-center justify-content-end">
            <img src="./images/${item.tag}.png" class="img-fluid">
            <h5 class="fw-bolder">${item.name}</h5>
        </div>

        <div class="col-3 text-center pt-3">
            <div class="row">
                <h6 class="text-muted col-4">Size: </h6>
                <select class="select col-8" id="">
                    <option value="1">Small</option>
                    <option value="2">Medium</option>
                    <option value="3">Large</option>
                </select>
            </div>
            <div class="row">
                <h6 class="text-muted col-4">Milk: </h6>
                <select class="select col-8" id="">
                    <option value="1">Whole Milk</option>
                    <option value="2">Nonfat Milk</option>
                    <option value="3">Soy Milk</option>
                </select>
            </div>
            <div class="row">
                <h6 class="text-muted col-4">Sugar: </h6>
                <select class="select col-8">
                    <option value="1">0%</option>
                    <option value="2">25%</option>
                    <option value="3">50%</option>
                    <option value="4">75%</option>
                    <option value="5">100%</option>
                </select>
            </div>
        </div>

        <div class="col-2 d-flex col-1 offset-1">
            <button class="btn px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                <i class="fas fa-minus"></i>
            </button>
            <input id="form1" min="1" name="quantity" value=${
              item.inCart
            } type="number"
                class="form-control form-control-sm" />
            <button class="btn px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                <i class="fas fa-plus"></i>
            </button>
        </div>

        <div class="col-1 offset-1">
            <h6 class="mb-0">₱ ${item.inCart * item.price}</h6>
        </div>

        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" class="text-muted " ><i class="fas fa-times" ></i></a>
        </div>

    </div>
</div>
</div>   
        `;
      document.querySelector(".totalcost").innerHTML = "₱" + cartCost;
      document.querySelector(".totalItems").innerHTML = productNumbers;
    });
  }
};

const remove = () => {
  const products = document.querySelectorAll(".products");
  let cartItems = localStorage.getItem("productIncart");
  cartItems = JSON.parse(cartItems);
  document.querySelector(".bagSpan").textContent = 0;
  let productNumbers = localStorage.getItem("cartNumbers");
  if (cartItems && productContainer) {
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML = "";
    });
    document.querySelector(".totalcost").innerHTML = "₱";
    document.querySelector(".totalItems").innerHTML = "";
  }
};

onLoading();
displayCart();
