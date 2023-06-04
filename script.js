

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


