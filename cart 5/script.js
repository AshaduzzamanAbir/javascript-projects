const addCart = document.querySelectorAll('.add-cart');


let products = [
  {
    name : 'blue T-shirt',
    tag : 'bluetshirt',
    price : 15,
    inCart : 0
  },
  {
    name : 'red T-shirt',
    tag : 'redtshirt',
    price : 20,
    inCart : 0
  },
  {
    name : 'Dip blue T-shirt',
    tag : 'dipbluetshirt',
    price : 25,
    inCart : 0
  },
  {
    name : 'white chack T-shirt',
    tag : 'whitettshirt',
    price : 30,
    inCart : 0
  },
  {
    name : 'gray T-shirt',
    tag : 'graytshirt',
    price : 20,
    inCart : 0
  },
  {
    name : 'green T-shirt',
    tag : 'greentshirt',
    price : 10,
    inCart : 0
  },
];




for( let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {


  let productNumbers = localStorage.getItem('cartNumbers');
  localStorage.setItem('cartNumbers', 1)
  productNumbers = parseInt(productNumbers);

  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1 );
    document.querySelector('.cart span').textContent = productNumbers + 1;
  }else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }

  setItems(product)
}

function setItems(product){
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)

  if(cartItems != null){
    if(cartItems[product.tag] == undefined){
      cartItems = {
        ...cartItems,
      [product.tag] : product
      }
    }
    cartItems[product.tag].inCart += 1;
  }else{
    product.inCart = 1;
    cartItems = {
      [product.tag] : product
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems))

}
function totalCost(product){
  let cartCost = localStorage.getItem('totalCost');

  if(cartCost != null){
    cartCost = parseInt(cartCost)
    localStorage.setItem('totalCost', cartCost + product.price);
  }else{
    localStorage.setItem('totalCost', product.price);
  }
}
function displayCart (){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productsInCart = document.querySelector('.products')
  let cartCost = localStorage.getItem('totalCost');

  if(cartItems && productsInCart){
    productsInCart.innerHTML = '';
    Object.values(cartItems).map(item =>{
      productsInCart.innerHTML += `
        <div class="product">
          <i class="fa fa-times-circle" aria-hidden="true"></i>
          <img src="img/${item.tag}.png">
          <span class="title-product">${item.name}</span>
          <div class="price">$${item.price}.00</div>
          <div class="quantity">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
              <span>${item.inCart}</span>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
          <div class="total"> $${item.inCart * item.price}.00</div>
        </div>
      `;
    });
  }
  productsInCart.innerHTML += `
    <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">
        Basket Total
      </h4>
      <h4 class="basketTotal">$${cartCost}.00</h4>
    </div>
  `;


}

onLoadCartNumbers()
displayCart()