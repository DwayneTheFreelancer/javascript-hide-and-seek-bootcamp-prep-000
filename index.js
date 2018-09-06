
function getFirstSelector(selector) {
  var s = document.querySelector(selector)
  return s;
}

function nestedTarget() {
  const lis = document.getElementById("nested").querySelector(".target");
  return lis;
}

function increaseRankBy(n) {
  var li = document.getElementById("app").querySelectorAll(".ranked-list li");
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = parseInt(li[i].innerHTML) + n;
  }
  return n;
}

function deepestChild() {
  var nested = document.getElementById("grand-node").getElementsByTagName("div")[3];
  return nested;
}