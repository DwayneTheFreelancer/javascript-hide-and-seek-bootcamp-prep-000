
function getFirstSelector(selector) {
  return selector[0];
}

function nestedTarget() {
  const lis = document.getElementById("nested").querySelector(".target");
  return lis;
}

function increaseRankBy(n) {
  n = document.getElementById("main").querySelectorAll("ranked-list");
  for (let i = 0; i < n.length; i++) {
    n[i].innerHTML = (i + 1).parseInt();
  }
  return n;
}