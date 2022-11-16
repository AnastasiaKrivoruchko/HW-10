// Три товара с категории vegetables:
// cabbage = 8;
// avocado = 30;
// tomato = 10;

// Три товара с категории fruits:
// grapes = 20;
// raspberry = 25;
// coconut = 50;

do {
    period = prompt("Winter or summer period?").toLowerCase().replaceAll(" ", "");
} while (period !== "winter" && period !== "summer");

do {
    category = prompt("Choose category in which you want to buy products: vegetebles or fruits").toLowerCase().replaceAll(" ", "");
} while (category !== "vegetebles" && category !== "fruits");

if(category === "vegetebles") {
    do {
        selectedProduct = prompt("Choose product from category vegetables: cabbage, avocado, tomato.").toLowerCase().replaceAll(" ", "");
    } while (selectedProduct !== "cabbage" && selectedProduct !== "avocado" && selectedProduct !== "tomato");
    // console.log(selectedProduct);

    prise = 0;
    switch(selectedProduct) {
        case "cabbage":
            prise = 8;
            image = "images/vegetables/cabbage.svg";
            break;
        case "avocado":
            prise = 30;
            image = "images/vegetables/avocado.svg";
            break;
        case "tomato":
            prise = 10;
            image = "images/vegetables/tomato.svg";
            break;
    }

} else if(category === "fruits") {
    do {
        selectedProduct = prompt("Choose product from category fruits: grapes, raspberry, coconut.").toLowerCase().replaceAll(" ", ""); 
    } while (selectedProduct !== "grapes" && selectedProduct !== "raspberry" && selectedProduct !== "coconut");

    prise = 0;
    switch(selectedProduct) {
        case "grapes":
            prise = 20;
            image = "images/fruits/grapes.svg";
            break;
        case "raspberry":
            prise = 25;
            image = "images/fruits/raspberry.svg";
            break;
        case "coconut":
            prise = 50;
            image = "images/fruits/coconut.svg";
            break;
    }
}
// console.log(prise);

do {
    countOfProduct = +prompt(`Enter count of ${selectedProduct}`);
} while (countOfProduct < 1 || isNaN(countOfProduct));

// console.log(countOfProduct);

// debugger;
if(period === "winter") {
    sum = countOfProduct * prise * 2;
} else if(period === "summer") {
    sum = countOfProduct * prise * 0.8;
}
// console.log(sum);

document.write(`
<div class="product" align="center">
  <img src="${image}" alt="${selectedProduct}" width="100" height="100">
  <p>Selected product: <b>${selectedProduct}</b></p>
  <p>Count of ${selectedProduct}: <b>${countOfProduct}</b></p>
  <p>Selected period: <b>${period}</b></p>
  <p>Selected category: <b>${category}</b></p>
  <p>Final sum: <b>${sum} UAH</b></p>
</div>
`);