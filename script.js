



async function getData() {
    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();

    console.log(jsonData);
    
    jsonData.forEach((element) => {
        const prodCard =document.createElement("div");
        prodCard.classList.add("product-card");


        prodCard.innerHTML =
        `<img src="${element.image}" alt="">
        <h2 class="product-title">${element.title}</h2>
        <p class="product-description">${element.description}</p>
        <p class="product-price">$${element.price}</p>`;
        

        document.getElementById("products").appendChild(prodCard);
    
    

}
); 


}
getData();