function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}


const queryString = window.location.search;
console.log(queryString);


if(queryString.length > 0){
    const urlParams = new URLSearchParams(queryString);

    let myData = "";
    let myCart = "";
    let myTotal = 0; //will store total cost
    myCart += "<h3>Cart Contents</h3>";
    
/*
Cart Contents

Widget: $3.99
Sprocket: $5.99
Thingy: $1.99
Total: $11.97
*/

    urlParams.forEach(function(value, key) {
        
        if(key == "Cart"){//cart
          //alert("Cart Item: " + value);
              
            switch(value){
              case "Widget":
                myCart += "Widget: $3.99<br>";
                myTotal += 3.99;
              break;

              case "Sprocket":
                myCart += "Sprocket: $5.99<br>";
                myTotal += 5.99;
              break;

              case "Thingy":
                myCart += "Thingy: $1.99<br>";
                myTotal += 1.99;
              break;
            }

        }else{//shipping label
          //swaps underscore for space
          key = key.split("_").join(" ");

          if(key=="First Name" || key=="Last Name" || key=="City" || key=="Address"){
            value = titleCase(value)
          }

          myData +=`<p>${key}: ${value}</p>`;

        }

      //console.log(key, value);
    });

    myCart += "Total: " + myTotal + '<br>';

    //we want the cart data first, then the shipping
    myData = myCart + myData;

    myData += '<p><a href="index.html">CLEAR</a></p>';

    document.getElementById("output").innerHTML = myData;
}