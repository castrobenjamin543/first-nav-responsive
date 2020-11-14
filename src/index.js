let btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    let items = document.querySelector(".navMain__items")

    items.classList.toggle("ver")
})