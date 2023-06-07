const form = document.getElementById("itemForm");

const itemController = new ItemController()

const displayItem = function(){

    let itemArr = itemController.getLocalStorage()
    
    itemRows.innerHTML = ''
    itemArr.forEach(item => {
        const table = document.getElementById("itemRows");
        let row = table.insertRow(-1);
        row.innerHTML = `
        <td><img src="${item.url}"></td>
        <td id=description-table>${item.description}</td>
        <td>${item.category}</td>
        <td>$${item.price}</td>
        `
        itemRows.append(row)
    })
}

form.addEventListener("submit", function (event) {
  // prevents the page from refreshing
  event.preventDefault();
  // console.log("hello")
  const itemImageurl = document.getElementById("url").value;
  const itemDescription = document.getElementById("description").value;
  const itemCategory = document.getElementById("category").value;
  const itemUnitPrice = document.getElementById("price").value;
  // console.log(itemImageurl, itemDescription, itemCategory, itemUnitPrice)
  
  itemController.addItem(itemImageurl, itemDescription, itemCategory, itemUnitPrice)
  itemController.setLocalStorage()
  // console.log(itemController.itemArray)
     
  displayItem()

  form.reset();
});

displayItem();
