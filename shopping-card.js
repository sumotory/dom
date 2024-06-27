var btna = document.getElementsByClassName("fas fa-plus-circle");
var btn = document.getElementsByClassName("fas fa-minus-circle");
var del = document.getElementsByClassName("fas fa-trash-alt");
var like = document.getElementsByClassName("fas fa-heart");
var tot = document.getElementsByClassName("total");
var x = document.getElementsByClassName('quantity');
var totalSum = 0;
var prices = [100, 20, 50];

for (let i = 0; i < btna.length; i++) {
  btna[i].addEventListener('click', function () { 
    let y = parseInt(x[i].textContent);
    y += 1;
    x[i].textContent = y;
    totalSum += 1;
    calculateTotalCost();
  });
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    let y = parseInt(x[i].textContent);
    if (y > 0) {
      y -= 1;
      x[i].textContent = y;
      totalSum -= 1;
      calculateTotalCost();
    }
  });
}

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
    x[i].textContent = '0';
    totalSum -= parseInt(x[i].textContent);
    calculateTotalCost();
  });
}

function calculateTotalCost() {
  let sum = 0;
  for (let j = 0; j < x.length; j++) {
    sum += parseInt(x[j].textContent) * prices[j];
  }
  for (let k = 0; k < tot.length; k++) {
    tot[k].textContent =  sum.toFixed(2) + '$' ;
  }
}

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    if (this.style.color == "pink") {
      this.style.color = "black";
    } else {
      this.style.color = "pink";
    }
  });
}
