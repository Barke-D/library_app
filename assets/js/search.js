// ----- search---------

const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.getElementById("searchwork");
  const product = document.querySelectorAll(".PRODUCTS");
  const pName = storeItems.getElementsByTagName("h2");
  for (var i = 0; i < pName.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

document.getElementById("search-item").addEventListener("click", () => {
  document.getElementById("searchwork").style.height = "200px";
});

document.querySelector(".search-btn").addEventListener("click", () => {
  document.getElementById("searchwork").style.height = "0";
});

/*image loader */
let i = 0;
let images = [];
let time = 4000;

images[0] = "./assets/images/photo3.jpg"; //
images[1] = "./assets/images/photo5.jpg"; //
images[2] = "./assets/images/photo7.jpg"; //
images[3] = "./assets/images/photo10.jpg"; //

function changeImg() {
  document.slider.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

// Google translator
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
