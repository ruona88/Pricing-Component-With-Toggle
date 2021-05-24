//Select toggleButton, the white circle.
const toggleButton = document.querySelectorAll(".imagecontainer")[0];
const myBall = document.querySelector("#theball");

toggleButton.addEventListener("click", () => {
    if(!myBall.classList.contains("ball")) {
        myBall.classList.add("ball");
        document.getElementsByClassName("basic-price")[0].innerHTML = "19.99";
        document.getElementsByClassName("professional-price")[0].innerHTML = "24.99";
        document.getElementsByClassName("mast-price")[0].innerHTML = "39.99"
    } else {
        myBall.classList.remove("ball");
        document.getElementsByClassName("basic-price")[0].innerHTML = "199.99";
        document.getElementsByClassName("professional-price")[0].innerHTML = "249.99";
        document.getElementsByClassName("mast-price")[0].innerHTML = "399.99"
    }
})