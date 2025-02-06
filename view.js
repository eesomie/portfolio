const params = new URLSearchParams(window.location.search);
const imageName = params.get('img');
console.log(imageName);

if (imageName) {
    const section = document.getElementById("image");
    const img = document.createElement("img");
    const border = document.createElement("div")
    border.classList.add("FSborder")
    img.src = "portfolio/Assets/Art/"+imageName;
    border.appendChild(img)
    section.appendChild(border);
} else {
    document.body.innerHTML = '<p>No image specified.</p>';
}
