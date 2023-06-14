

const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1.25,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: .25,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: .25,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]


// create a function that will add to the quantity of the clicked on item.
// create a function that will draw the Cart onto the screen
// Create a function that will draw the total onto the screen
// Create a function that will allow the user to checkout.


function addItemToCart(item, type) {
  let chosenItem = type.find(type => type.name == item)

  // console.log(chosenItem)
  let coneChecker = 0
  containers.forEach(container => {
    if (container.quantity > 0) {
      coneChecker++
    }
  })

  if (coneChecker > 0 && type == containers) {
    window.alert("You can't have more than one Cone or Bowl!")
  } else {
    chosenItem.quantity++

  }

  // if (chosenItem.quantity > 0 && type == containers) {
  //       window.alert("You can't have more than one Cone or Bowl!")
  // } else {
  //   chosenItem.quantity++
  // }

  // console.log(chosenItem);

  drawCart()
}

function drawCart() {

  let cartInputHtml = ''

  iceCream.forEach(food => {

    if (food.quantity > 0) {
      cartInputHtml += `
      <li>
      <div class="d-flex justify-content-between">
      <span>${food.name} x${food.quantity}</span>
      <span>$${food.price}</span>
      </div>
      </li>`
    }

  })
  toppings.forEach(food => {

    if (food.quantity > 0) {
      cartInputHtml += `
      <li>
      <div class="d-flex justify-content-between">
      <span>${food.name} x${food.quantity}</span>
      <span>$${food.price}</span>
      </div>
      </li>`
    }

  })
  containers.forEach(food => {

    if (food.quantity > 0) {
      cartInputHtml += `
      <li>
      <div class="d-flex justify-content-between">
      <span>${food.name} x${food.quantity}</span>
      <span>$${food.price}</span>
      </div>
      </li>`
    }

  })


  // console.log(cartInputHtml);
  let cartOutput = document.getElementById('cart')

  cartOutput.innerHTML = cartInputHtml

  drawTotal()

}

function drawTotal() {

  let grandTotal = 0
  let totalInputHtml = ''

  iceCream.forEach(food => grandTotal += food.price * food.quantity)
  toppings.forEach(food => grandTotal += food.price * food.quantity)
  containers.forEach(food => grandTotal += food.price * food.quantity)

  totalInputHtml = `
    <p class="fs-3">Total: $${grandTotal.toFixed(2).toString()}
    </p>`

  let totalElement = document.getElementById('total')
  totalElement.innerHTML = totalInputHtml

}

function checkout() {
  const checkoutConfirm = window.confirm("Are you sure you're ready to checkout?")

  if (checkoutConfirm) {
    window.alert("Thank you for your Purchase!")

    iceCream.forEach(food => food.quantity = 0)
    toppings.forEach(food => food.quantity = 0)
    containers.forEach(food => food.quantity = 0)
    drawCart()
  }
  return
}