fetch("assets.json")
.then(response=>response.json())
.then(data=>{
    const section = document.getElementById("shelf")
    data.forEach(item=>{
        console.log(item);
        const border = document.createElement("a");
        border.href="view.html?img="+item;
        border.classList.add("border");
        const imgFile = "Assets/Thumbnails/"+item;
        const newImg = document.createElement("img");
        newImg.setAttribute("src", imgFile);
        newImg.setAttribute("alt", imgFile);
        border.appendChild(newImg);
        section.appendChild(border);
    });
});

function createCarousel(jsonFile, parent){

    fetch(jsonFile)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        const section = document.getElementById(parent)

        var index = 0;


        const leftBorder = document.createElement("div");
        leftBorder.classList.add("border", "left");

        const mainBorder = document.createElement("a");
        mainBorder.classList.add("border", "focus");
        

        const rightBorder = document.createElement("div");
        rightBorder.classList.add("border", "right");


        function setImages(index){

            imgArray=[];
            data.forEach((item)=>{
                creatNewImg = document.createElement("img");
                creatNewImg.setAttribute("src", "Assets/Thumbnails/"+item);
                creatNewImg.setAttribute("alt", "Assets/Thumbnails/"+item);
                imgArray.push(creatNewImg);
            });
    

            if(index==0){
                var leftImg = imgArray[imgArray.length-1];
            }
            else{
                var leftImg = imgArray[index-1];
            }
            leftBorder.appendChild(leftImg);

            var mainImg = imgArray[index];
            mainBorder.appendChild(mainImg);

            if(index==data.length-1){
                var rightImg = imgArray[0];
            }
            else{
                var rightImg = imgArray[index+1];
            }
            rightBorder.appendChild(rightImg);

            mainBorder.href="view.html?img="+data[index]; 
        }



        const leftbutton = document.createElement("button");
        leftbutton.setAttribute("type", "button");
        leftbutton.addEventListener("click", ()=>{
            if(index==0){
                index = (data.length-1);
                setImages(index);

            }
            else{
                index -= 1;
                setImages(index);

            }
            console.log("index = "+index);
            console.log("img = "+data[index]);
        });
        const leftSpan = document.createElement("span");
        leftSpan.innerText = "♥︎";
        leftbutton.appendChild(leftSpan);
        leftbutton.classList.add("left");

        const rightbutton = document.createElement("button");
        rightbutton.setAttribute("type", "button");
        rightbutton.addEventListener("click", ()=>{
            if(index==(data.length-1)){
                index = 0;
                setImages(index);
            }
            else{
                index += 1;
                setImages(index);

            }
            console.log("index = "+index);
            console.log("img = "+data[index]);
        });
        const rightSpan = document.createElement("span");
        rightSpan.innerText = "♥︎";
        rightbutton.appendChild(rightSpan);
        rightbutton.classList.add("right");


        section.appendChild(leftbutton);
        setImages(index);
        section.appendChild(leftBorder);
        section.appendChild(mainBorder);
        section.appendChild(rightBorder);
        section.appendChild(rightbutton);
    });
};


createCarousel("characterConcepts.json", "characters");
createCarousel("environmentConcepts.json", "environments");


const objs = document.querySelectorAll('.fallingobj');
let startTimes = Array.from(objs).map(() => null);
const amplitude = 4.75;
const frequency = 0.1; 
const speed = 8;

function animate(timestamp) {
    objs.forEach((item, index) => {
 
        if (!startTimes[index] && index%2==0) startTimes[index] = timestamp + Math.random() * 10000; 
        if (!startTimes[index] && index%2!=0) startTimes[index] = timestamp + 5000 + Math.random() * 10000;
        
        const elapsed = (timestamp - startTimes[index]) / 1000; 
        
        const x = amplitude * Math.sin(elapsed * Math.PI * 2 * frequency); 
        const y = elapsed * speed;  

        item.style.transform = `translate(${x}vw, ${y}vh)`; 

        if (y >= 100) {
            startTimes[index] = timestamp; 
        }
    });

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
