
function getFirstSelector(selector) {
  var s = document.querySelector(selector)
  return s;
}

function nestedTarget() {
  const lis = document.getElementById("nested").querySelector(".target");
  return lis;
}

function increaseRankBy(n) {
  n = document.getElementById("app").querySelectorAll(".ranked-list li");
  for (let i = 0; i < n.length; i++) {
    n[i].innerHTML = (n[i] + 1).parseInt();
  }
  return n;
}

function deepestChild() {
  var nested = document.getElementById("grand-node").getElementsByTagName("div")[3];
  return nested;
}