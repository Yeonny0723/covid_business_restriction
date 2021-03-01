const inputs = document.getElementsByTagName("input");

const showContent = () => {
  try {
    document.getElementById("level").value = document.querySelector(
      ".clicked-level"
    ).value;
    document.getElementById("business").value = document.querySelector(
      ".clicked-business"
    ).value;
    const level = document.getElementById("level").value;
    const bus = document.getElementById("business").value;
    if (level !== null && bus !== null) {
      document.getElementById("form").submit();
    }
  } catch (err) {}
};

const handleClick = (e) => {
  e.preventDefault();
  if (e.target.parentNode.id == "levels") {
    e.target.classList.toggle("clicked-level");
  } else {
    e.target.classList.toggle("clicked-business");
  }
  showContent();
};

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", handleClick);
}

const popupContent = () => {
  if (document.getElementsByTagName("h1").innerText !== "") {
    document.getElementById("popup-1").classList.toggle("active");
  }
};

popupContent();
