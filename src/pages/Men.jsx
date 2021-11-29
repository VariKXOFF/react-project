import Men from "../Components/Men.js"

const MenPage = () => {
    return (
        <Men/>
    )
    
}
let clothes = document.querySelectorAll(".clothes-box")
let clothesFull = document.querySelectorAll(".clothes-box__full")
let closeButton = document.querySelectorAll(".close")
let check = false

for (let i = 0; i < clothes.length; i++) {
    clothes[i].addEventListener("click", e => {
        if(
            e.target.classList.contains("clothes-box") ||
            e.target.classList.contains("clothes-box__image") ||
            e.target.classList.contains("clothes-box__title") ||
            e.target.classList.contains("clothes-box__price")
        ) {
            for(let j = 0; j < clothesFull.length; j++) {
                if(clothesFull[j].style.display === "flex") {
                    check = true
                }
            }
            if(!check) {
                clothesFull[i].style.display = "flex"
            }
        }
    })
}

for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", e => {
        clothesFull[i].style.display = "none"
        check = false
    })
}

export {MenPage}