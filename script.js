document.getElementById("select").addEventListener("change", function () {
  const imagem = document.getElementById("select").value

  document.getElementById("1").style.display = "none"
  document.getElementById("text1").style.display = "none"
  document.getElementById("2").style.display = "none"
  document.getElementById("text2").style.display = "none"
  document.getElementById("3").style.display = "none"
  document.getElementById("text3").style.display = "none"
  document.getElementById("4").style.display = "none"
  document.getElementById("text4").style.display = "none"
  document.getElementById("5").style.display = "none"
  document.getElementById("text5").style.display = "none"

  switch (imagem) {
      case "1":
          document.getElementById("1").style.display = "flex";
          document.getElementById("text1").style.display = "flex";
          break;

      case "2":
          document.getElementById("2").style.display = "flex";
          document.getElementById("text2").style.display = "flex"
          break;

      case "3":
          document.getElementById("3").style.display = "flex";
          document.getElementById("text3").style.display = "flex"
          break;

      case "4":
          document.getElementById("4").style.display = "flex";
          document.getElementById("text4").style.display = "flex"
          break;

      case "5":
          document.getElementById("5").style.display = "flex";
          document.getElementById("text5").style.display = "flex"
          break;
  }
})