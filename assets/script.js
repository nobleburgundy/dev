$("#townesLink")
  .on("mouseover", function () {
    $("#about-img").attr("src", "./assets/img/townes.jpg");
  })
  .on("mouseleave", function () {
    $("#about-img").attr("src", "./assets/img/jcg_piano.jpg");
  });
