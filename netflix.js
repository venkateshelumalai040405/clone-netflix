document.addEventListener("DOMContentLoaded", () => {
  const val = document.querySelector(".firstten");
  const right = document.getElementById("icon1");
  const left = document.getElementById("icon2");


  right.addEventListener("click", () => {
    val.scrollLeft -= 1000;
  });

  left.addEventListener("click", () => {
    val.scrollLeft += 1000;
  });

  val.addEventListener("wheel", (event) => {
    event.preventDefault();
    val.scrollLeft -= event.deltaY;
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const val = document.querySelector(".secondten");
  const right = document.getElementById("icon3");
  const left = document.getElementById("icon4");


  right.addEventListener("click", () => {
    val.scrollLeft -= 1000;
  });

  left.addEventListener("click", () => {
    val.scrollLeft += 1000;
  });

  val.addEventListener("wheel", (event) => {
    event.preventDefault();
    val.scrollLeft -= event.deltaY;
  });

});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".questions").forEach((element, index) => {
    element.addEventListener("click", () => {
      let value = index;
      console.log(value);
      console.log(element);
      let doc = document.querySelector(".a" + value);
      let doc2 = document.querySelector(".fa-solid" + value);
      if (doc.style.display === "none") {
        doc.style.display = "block";
        doc2.setAttribute(
          "src",
          "/Users/VENKATESH/Downloads/multiplication-sign.png"
        );
      } else {
        doc.style.display = "none";
        doc2.setAttribute("src", "/Users/VENKATESH/Downloads/plus.png");
      }
    });
  });
});
