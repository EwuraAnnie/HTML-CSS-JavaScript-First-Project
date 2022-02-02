let nameSpan = document.querySelector("#name");
let form = document.querySelector("form");

const addName = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    nameSpan.innerHTML = name;
    form.reset();
};

form.addEventListener("submit", addName);
