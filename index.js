let container = document.getElementById("container")

function generateCard(image_src,product,description,price){
    let card = document.createElement("div");
    card.className = "card shadow m-auto";
    card.style = "width:300px;height:450px"
    let img = document.createElement("img");
    img.src = image_src;
    img.style = "width:100%;height:300px";
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title pl-3";
    cardTitle.innerHTML = product;
    let cardDescription = document.createElement("p");
    cardDescription.className = "card-text pl-3";
    cardDescription.innerHTML = description;
    let cardPrice = document.createElement("small");
    cardPrice.innerText = `RM${price}`;
    let cardButton = document.createElement("button");
    cardButton.className = "btn-dark";
    cardButton.innerText = "Add to cart";
    cardButton.style = "height:30px"
    let cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex justify-content-between pt-0";
    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardDescription)
    cardBody.appendChild(cardButton);
    cardBody.appendChild(cardPrice);
    card.appendChild(cardBody);
    container.appendChild(card);
}


let airtable = []
let airtableUrl = "https://api.airtable.com/v0/appdJzoAHYVkdgE0Y/Products"
$.ajax({
    url:airtableUrl,
    method: "GET",
    headers: {
        Authorization: "Bearer keywh5dAU4iaDJvbZ"
    },
    success: function(result) {
      for (let record of result.records){
        let price = record.fields.Price;
        let description = record.fields.Description;
        let product = record.fields.Product;
        let image_src = record.fields.Picture[0].url;
        generateCard(image_src,product,description,price);
      }
      
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
