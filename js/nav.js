var list = document.querySelectorAll(".list");

// function activeLink() {
//   list.forEach((item) => item.classList.remove("active"));
//   this.classList.add("active");
// }

list.forEach((item) => item.addEventListener("click", function(){
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}));
