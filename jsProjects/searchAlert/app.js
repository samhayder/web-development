/* DOM */
let searchInput = document.querySelector("#search_input");
let searchLimit = document.querySelector(".search_limit");

let searchMaxLimit = +document.querySelector(".search_max_limit").textContent;

function searchAlert() {
  let charCount = searchMaxLimit - searchInput.value.length;
  searchLimit.textContent = charCount;

  if (charCount <= 10) {
    searchLimit.classList.add("warning");
  } else {
    searchLimit.classList.remove("warning");
  }

  if (charCount < 0) {
    searchInput.style.backgroundColor = "red";
  } else {
    searchInput.style.backgroundColor = "rgba(147, 5, 169, 0.4)";
  }
  
}

document.querySelector('form').addEventListener('input', searchAlert);