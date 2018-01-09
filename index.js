function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector);
  
  return firstElement;
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var list = document.querySelectorAll(".ranked-list");
  
  for(var i = 0; i < list.length;i++) {
   
   for(var j = 0;j<list[i].children.length;j++) {
      list[i].children[j].innerHTML = parseInt(list[i].children[j].innerHTML) + n;
   }
  }
}

function deepestChild() {

  var deep = document.querySelector("#grand-node");
  var selector = "#grand-node";

  while(deep.children.length !== 0)   {
    deep = deep.querySelector(deep.children[0].tagName);
     selector += ` ${deep.children[0].tagName}`;
  } 
  
return selector;  
}
