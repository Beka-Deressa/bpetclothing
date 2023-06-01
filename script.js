

function handleFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("itemForm");
    const itemname = document.getElementById("name").value;
    const itemImageurl = document.getElementById("url").value;
    const itemDescription = document.getElementById("description").value;
    const itemUnitPrice = document.getElementById("price").value;
    const itemCategory = document.getElementById("category").value;

    const card = document.createElement("div");
    card.className = "card1";


    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = itemname;

    const image = document.createElement("img");
    image.src = itemImageurl;

    const description = document.createElement("p");
    description.textContent = itemDescription;

    const category = document.createElement("p");
    category.className = "category";
    category.textContent = itemCategory;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = "$" + itemUnitPrice;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(category);
    card.appendChild(price);

    document.getElementById("cards").appendChild(card);

    form.reset();
}

window.addEventListener("DOMContentLoaded", function () {
    const sellItemButton = document.getElementById("sellitem");
    const form = document.getElementById("itemForm");
    form.addEventListener("submit", handleFormSubmit);
    sellItemButton.addEventListener("click", function () {

        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }

    })

});

window.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-btn");
    const form = document.getElementById("login");
    form.addEventListener("submit", handleFormSubmit);
    loginButton.addEventListener("click", function () {

        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }

    })

});

window.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("register-btn");
    const form = document.getElementById("register");
    form.addEventListener("submit", handleFormSubmit);
    registerButton.addEventListener("click", function () {

        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }

    })

});
window.addEventListener("DOMContentLoaded", function () {
    const cartButton = document.getElementById("cart-icon");
    const form = document.getElementById("card-cart");
    form.addEventListener("submit", handleFormSubmit);
    cartButton.addEventListener("click", function () {

        if (form.style.display === "none") {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }

    })

});

let cartItems = [];


const addToCart = (product) => {
    cartItems.push(product);
};
const addToCartButton = document.getElementById("add-to-cart-button");
addToCartButton.addEventListener("click", () => {
    const product = {

    };

    addToCart(product);

    alert("Product added to cart!");
});

let priceElement = document.getElementById("price");
let taxElement = document.getElementById("tax");
let totalElement = document.getElementById('totalamount');

let priceString = priceElement.textContent.trim().replace('$', '');
let taxString = taxElement.textContent.trim().replace('$', '');

let price = parseFloat(priceString);
let tax = parseFloat(taxString);

let total = price + tax;

totalElement.textContent = "Total: $" + total.toFixed(2);

console.log(total);

