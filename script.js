
function addToCart() {
  var addToCartBtn = event.target;

  parentElem = addToCartBtn.parentNode;

  child = parentElem.childNodes;
  title = child[0].innerHTML;
  console.log(title)


  if(title != "Carrot"){
  
  var price = child[1].innerHTML;
  var float_price = parseFloat(price);
  console.log(float_price)

  var qty = child[3].value; // element.attribute to get/set the attribute value
  var int_qty = parseInt(qty, 10);

  var total = int_qty * float_price;

  imgElem = parentElem.parentNode.previousSibling;
  //console.log(imgElem);
  //console.log(imgElem.src);

  cartDetailsModal = document.querySelector('table');
  
  
  cartDetailsModal.innerHTML +=
      '<tr><td><img src="'+ imgElem.src +'" alt="" style="width:50px; height: 30px;"/></td>' + 
      '<td><h6 class="card-title">' + child[0].innerHTML + '</h6></td>' + //title
      '<td><button type="button" class="btn btn-success btn-xs" style="border-radius: 10px;" onclick=increaseQty()>+</button></td>' +
      '<td><h6 class="card-title">' + qty + '</h6></td>' + // qty
      '<td><button type="button" class="btn btn-danger btn-xs" style="border-radius: 10px;" onclick=decreaseQty()>-</button></td>' +
      '<td><h6 class="card-title" id="totalAmnt">' + total + '</h6></td>' + // price
      '<td><button class="btn btn-xs" style="border-radius: 10px;" onclick=deleteCartItem()><i class="fa fa-close"></i></button></td>'+
      '<input type="hidden" value="' + float_price + '"></tr>';  // unit price sent in hidden input field
  }else{
    alert('Already in the cart');
  }
  
    
}

function increaseQty() {
  var btn = event.target;
  var tdElem = btn.parentNode; // btn -> td
  var trElem = tdElem.parentNode; // td -> tr



  children = tdElem.nextSibling.childNodes;  // td -> td -> h6

  var qtyHeader = children[0].innerHTML;

  var qty = parseInt(qtyHeader);
  if (qty < 20) {
    qty += 1;

    children[0].innerHTML = qty;
  }

  tdChildren = trElem.childNodes;
  lastIndex = tdChildren.length-1;
  var unitPriceElem = tdChildren[lastIndex];
  console.log(unitPriceElem.value);

  var unitPrice = unitPriceElem.value;

  unitPrice = parseFloat(unitPrice);
  var totalPrice = qty * unitPrice;

  totalElem = tdChildren[lastIndex-2];
  console.log(totalElem.innerHTML);
  totalElem.innerHTML = totalPrice;

}

function decreaseQty() {
  var btn = event.target;
  var tdElem = btn.parentNode; // btn -> td
  var trElem = tdElem.parentNode; // td -> tr



  children = tdElem.previousSibling.childNodes;  // td -> td -> h6

  var qtyHeader = children[0].innerHTML;

  var qty = parseInt(qtyHeader);
  if (qty > 1) {
    qty -= 1;

    children[0].innerHTML = qty;
  }

  tdChildren = trElem.childNodes;
  lastIndex = tdChildren.length-1;
  var unitPriceElem = tdChildren[lastIndex];
  console.log(unitPriceElem.value);

  var unitPrice = unitPriceElem.value;

  unitPrice = parseFloat(unitPrice);
  var totalPrice = qty * unitPrice;

  totalElem = tdChildren[lastIndex-2];
  console.log(totalElem.innerHTML);
  totalElem.innerHTML = totalPrice; 
 
}


function deleteCartItem(){
  iElem = event.target;
  btnElem = iElem.parentNode;
  tdElem = btnElem.parentNode; // btn -> td
  trElem = tdElem.parentNode; // td -> tr
  tableElem = trElem.parentNode; // tr -> table

  tableElem.removeChild(trElem);

}




