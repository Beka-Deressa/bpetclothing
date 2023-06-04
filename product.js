const form = document.getElementById("itemForm");

const itemController = new ItemController()

const displayItem = function(){

    let itemArr = itemController.getLocalStorage()
    
    itemCards.innerHTML = ''
    itemArr.forEach(item => {
        let card = document.createElement("div");
        card.innerHTML = `
        <div class="card">
        <img src="${item.url}" class="card-img-top" alt="Card image">
        <div class="card-body">
          <h5 class="card-title">${item.description}</h5>
          <p class="card-text">${item.category}</p>
          <p class="card-text">$${item.price}</p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>`
        itemCards.append(card)
    })
    console.log(itemArr)
}

displayItem();