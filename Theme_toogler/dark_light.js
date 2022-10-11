var icon = document.getElementById("icon");
icon.onclick = function () {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
      if (localStorage.clickcount % 2 == 0) {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
          icon.src =
            "C:/Users/AKHILESH/OneDrive/Desktop/dark theme icon/sun.png";
        } else {
          icon.src =
            "C:/Users/AKHILESH/OneDrive/Desktop/dark theme icon/moon.png";
        }
      }
    } else {
      localStorage.clickcount = 1;
    }
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
};