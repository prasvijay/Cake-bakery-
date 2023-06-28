const product = [
    {
        id: 0,
        image: 'image/c1.png',
        title: 'Cream Cake',
        price: 300,
    },
    {
        id: 1,
        image: 'image/c2.png',
        title: 'Choco Cake',
        price: 60,
    },
    {
        id: 2,
        image: 'image/c3.png',
        title: 'Slice cake',
        price: 230,
    },
    {
        id: 3,
        image: 'image/c4.png',
        title: 'Fruit cake',
        price: 100,
    },
	{
        id: 4,
        image: 'image/c5.png',
        title: 'Brown cake',
        price: 100,
    },
	{
        id: 5,
        image: 'image/c6.png',
        title: 'Slice cake',
        price: 15,
    },
	{
        id: 6,
        image: 'image/c7.png',
        title: 'Fruit cake',
        price: 200,
    },
	{
        id: 7,
        image: 'image/c8.png',
        title: 'Choco cake',
        price: 30,
    },
	{
        id: 8,
        image: 'image/c9.png',
        title: 'Birthday cake',
        price: 500,
    },
	{
        id: 9,
        image: 'image/c10.png',
        title: 'Creamy cup cake',
        price: 300,
    },
	{
        id: 10,
        image: 'image/c11.png',
        title: 'Birthday cake',
        price: 100,
    },
	{
        id: 11,
        image: 'image/c12.png',
        title: 'Cup cake',
        price: 50,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')


var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    } 
}
