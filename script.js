conts products = [
    
{
    id: 1,
    name: "iPhone 15 pro",
    price: 999,
    category: "phones",
    Image:Pro"https://via.placeholder.com/300x200/3b82f6/white?text=iPhone+15+Pro",
    description: "the latest iPhone with amazing camara and performance"
},

{
    id: 2,
    name: "MacBook Air",
    price: 1199,
    category: "laptops",
    Image:Air"https://via.placeholder.com/300x200/10b981/white?text=MacBook+Air",
    description: "lightweight laptop perfect for work and creativity "
},

{
    id: 3,
    name: "AirPods Pro",
    price: 249,
    category: "accessories",
    Image:"https://via.placeholder.com/300x200/f59e0b/white?text=AirPods+Pro",
    description: "Wireless earbuds with noise cancellation"
},

{
    id: 4,
    name: "Samsung Galaxy S24",
    price: 899
    category: "phones",
    Image:"https://via.placeholder.com/300x200/8b5cf6/white?text=Galaxy+S24",
    description: "Reliable laptop for everyday computing"
},

{
    id: 5,
    name: "Dell laptop",
    price: 999
    category: "laptops",
    Image:"https://via.placeholder.com/300x200/06b6d4/white?text=Dell+Laptop",
    description: "the latest iPhone with amazing camara and performance"
},

{
    id: 6,
    name: "Wireless Mouse",
    price: 49
    category: "accessories",
    Image:"https://via.placeholder.com/300x200/ec4899/white?text=Wireless+Mouse",
    description: "the latest iPhone with amazing camara and performance"
},
];
//step2 creating shopping cart,
//this will store all items the customer wants to buy

let cart =[];

//step3: get reference to HTML elements
// this conects our JS to our webpage

conts cartCountElement =document.getElementById('cart-count');
conts productsGrid = document.getElementById('products-grid');
conts featuredProducts = document.getElementById('featured-prodcts');


//step4 utility function to format
// tis will make a price look like R999 instead of just 999

function formatPrice(price) {
    return 'R' + price.toFixed(2)
    
}
console.log('JavaScript loaded');
console.log('we have', products.length, 'products.');