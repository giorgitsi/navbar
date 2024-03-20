let hamburger = document.querySelector(".hamburger")
let linksContainer = document.querySelector(".links-container")


let linksShow = false

hamburger.addEventListener("click", function (){

    //ვარიანტი 1
    
    // if (linksShow===false){

    //     // linksContainer.style.display = "flex"
    //     linksContainer.classList.add("show")
    //     linksShow = true

    // }else if (linksShow===true){

    //     // linksContainer.style.display = "none"
    //     linksShow = false
    //     linksContainer.classList.remove("show")


    // }

    // ვარიანტი 2
    linksContainer.classList.toggle("show")

})


