let hat = {
    name: "Hat",    
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }    
};

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax() }`);
