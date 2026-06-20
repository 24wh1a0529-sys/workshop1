//alert("Hello from js");
console.log("Hello from js");

const gender = document.getElementById("gender");

gender.addEventListener("click", function () {
    if (gender.innerText === "Male") {
        gender.innerText = "Female";
    } else {
        gender.innerText = "Male";
    }
});