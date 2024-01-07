var acc = document.getElementsByClassName("question-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var isActive = this.classList.contains("active");
    var panel = this.nextElementSibling;
    var image = this.querySelector(".imageconvert");

    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      acc[j].nextElementSibling.style.maxHeight = null;
      acc[j].querySelector(".imageconvert").src = "assets/images/icon-plus.svg";
    }

    if (!isActive) {
      this.classList.add("active");
      image.src = "assets/images/icon-minus.svg";
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}