// ------------------Navigation link active---------------------------
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
  
    const activePage = localStorage.getItem("activeNav");
  
    navLinks.forEach(link => {
        if (link.href.includes(activePage)) {
            link.classList.add("active");
        }
        link.addEventListener("click", function () {
            localStorage.setItem("activeNav", this.getAttribute("href"));
        });
    });
  });
  
  
  
  
  // ----------------hamburger js------------------------
  var modal = document.getElementById("ham--myModal-psi3");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("ham-close--psi3")[0];
  
  btn.onclick = function () {
    modal.style.display = "flex";
  };
  
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  
  
  // ------------hamburger collapse-----------------
  var coll = document.getElementsByClassName("collapsible--psi24");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active--collapse");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }