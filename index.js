
function getFirstSelector(selector) {
  var s = document.querySelector(selector)
  return s;
}

function nestedTarget() {
  const lis = document.getElementById("nested").querySelector(".target");
  return lis;
}

function increaseRankBy(n) {
<<<<<<< HEAD
  var li = document.getElementById("app").querySelectorAll(".ranked-list li");
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = parseInt(li[i].innerHTML) + n;
=======
  n = document.getElementById("app").querySelectorAll(".ranked-list li");
  for (let i = 0; i < n.length; i++) {
    n[i].innerHTML = (n[i] + 1).parseInt();
>>>>>>> bea77f3907ef49b44fe40a6a28ebffbf8cca8f36
  }
  return n;
}

function deepestChild() {
  var nested = document.getElementById("grand-node").getElementsByTagName("div")[3];
  return nested;
}