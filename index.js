fetch("assets.json")
.then(response=>response.json())
.then(data=>{
    const section = document.getElementById("shelf")
    data.forEach(item=>{
        const border = document.createElement("div");
        border.classList.add("border");
        const imgFile = "Assets/Art/"+item;
        const newImg = document.createElement("img");
        newImg.setAttribute("src", imgFile);
        newImg.setAttribute("alt", imgFile);
        border.appendChild(newImg);
        section.appendChild(border);
    })
});

