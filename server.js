var ModeActive = (button) => {
  // !!!!!!!!!!!!!!
  //   alert("click vao button");
  var bnt_normal = document.getElementsByClassName("mode");
  for (const element of bnt_normal) {
    element.className = "mode";
  }
  button.classList.add("active");
};
