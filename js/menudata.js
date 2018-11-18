var menuli = [];
var menuli = document.querySelectorAll(".right-pop-menu .textmenublock > ul > li");


[].forEach.call(menuli, function(value) {
  if (value.querySelector("ul")) {
    value.classList.add("arrow");
  }
});

changesNeededWithWidth();

window.addEventListener("resize", function (event) {
  changesNeededWithWidth();
})

function changesNeededWithWidth() {
  var search = document.querySelector(".search-icon");
  search.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      if (window.innerWidth < 880) {
        event.preventDefault();
        prompt("Please enter the search item", "");
    }
  });
}

var menuitems = document.querySelector(".menuitems");
var popupmenu = document.querySelector(".right-pop-menu");
menuitems.addEventListener("click", function(event){
  event.preventDefault();
  popupmenu.classList.toggle("visible");
})

