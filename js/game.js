var yut = [ 
  2,1,3,4,2, 4,3,5,2,3,
  3,5,2,1,3, 4,6,2,3,2,
  2,3,5,1,2, 1,3,4,2,3,
  3,2,4,5,3, 4,2,1,3,2,
  2,4,3,4,2, 1,5,3,2,3,

  3,4,2,1,3, 6,2,5,3,2,
  2,1,3,4,2, 5,6,3,2,3,
  3,6,2,1,3, 4,2,1,3,2,
  2,5,3,6,2, 1,3,4,2,3,
  3,6,2,4,3, 4,2,1,3,2,
];

var dice = {
    sides: 100,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides);
      // alert(randomNumber);
      return yut[randomNumber];
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    //placeholder.innerHTML = number;
    placeholder.innerHTML = "<img src='images/"+number+".jpg'>";
  }

  function confirmGame() {
    while(true) {
      ok = confirm("말을 이동해주시기 바랍니다");
      
      var placeholder = document.getElementById('placeholder');
      placeholder.innerHTML = "<img src='images/board.jpg'>";
      if(ok) {
        break;
      }
    }
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
    setTimeout("confirmGame()", 500);
  };

  // test
  
  
  