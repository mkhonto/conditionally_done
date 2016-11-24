const assert = require("assert");
var shoppingList = function(string){
  var shop = string.split(", ");

  for (var i = 0; i < shop.length; i++){
    console.log(shop[i]);

    }
  };
  var call = shoppingList("1* bread, 6* hotdog rolls, 2* tubs of margarine");
//assert.equal(shoppingList(call), "1* bread, 6* hotdog rolls, 2* tubs of margarine");
