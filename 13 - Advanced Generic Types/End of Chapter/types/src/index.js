var hat = { name: "Hat", price: 100 };
var gloves = { name: "Gloves", price: 75 };
var products = [hat, gloves];
products.forEach(function (prod) { return console.log(prod.name + ": " + prod.price); });
