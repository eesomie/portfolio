fetch("assets.json")
.then(response=>response.json())
.then(data=>{
    const section = document.getElementById("shelf")
    data.forEach(item=>{
        console.log(item);
        const border = document.createElement("a");
        border.href="view.html?img="+item;
        border.classList.add("border");
        const imgFile = "Assets/Art/"+item;
        const newImg = document.createElement("img");
        newImg.setAttribute("src", imgFile);
        newImg.setAttribute("alt", imgFile);
        newImg.setAttribute("loading", "lazy");
        border.appendChild(newImg);
        section.appendChild(border);
    })
});



fetch("characterConcepts.json")
.then(response=>response.json())
.then(data=>{
    console.log(data);
    const section = document.getElementById("characters")

    var index = 0;


    const leftBorder = document.createElement("div");
    leftBorder.classList.add("border", "left");

    const mainBorder = document.createElement("a");
    mainBorder.classList.add("border", "focus");
    

    const rightBorder = document.createElement("div");
    rightBorder.classList.add("border", "right");

    function setImages(index){


        if(index==0){
        var leftImgFile = "Assets/Art/"+data[data.length-1];
        }
        else{
            var leftImgFile = "Assets/Art/"+data[index-1];
        }
        const leftImg = document.createElement("img");
        leftImg.setAttribute("src", leftImgFile);
        leftImg.setAttribute("alt", leftImgFile);
        leftImg.setAttribute("loading", "lazy");
        leftBorder.appendChild(leftImg);

        var mainImgFile = "Assets/Art/"+data[index];
        const mainImg = document.createElement("img");
        mainImg.setAttribute("src", mainImgFile);
        mainImg.setAttribute("alt", mainImgFile);
        mainImg.setAttribute("loading", "lazy");
        mainBorder.appendChild(mainImg);

        if(index==data.length-1){
            var rightImgFile = "Assets/Art/"+data[0];
        }
        else{
            var rightImgFile = "Assets/Art/"+data[index+1];
        }
        const rightImg = document.createElement("img");
        rightImg.setAttribute("src", rightImgFile);
        rightImg.setAttribute("alt", rightImgFile);
        rightImg.setAttribute("loading", "lazy");
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
    leftbutton.appendChild(document.createTextNode("<<"));

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
     rightbutton.appendChild(document.createTextNode(">>"));


    section.appendChild(leftbutton);
    setImages(index);
    section.appendChild(leftBorder);
    section.appendChild(mainBorder);
    section.appendChild(rightBorder);
    section.appendChild(rightbutton);
});


fetch("environmentConcepts.json")
.then(response=>response.json())
.then(data=>{
    console.log(data);
    const section = document.getElementById("environments")

    var index = 0;


    const leftBorder = document.createElement("div");
    leftBorder.classList.add("border", "left");

    const mainBorder = document.createElement("a");
    mainBorder.classList.add("border", "focus");
    

    const rightBorder = document.createElement("div");
    rightBorder.classList.add("border", "right");

    function setImages(index){


        if(index==0){
        var leftImgFile = "Assets/Art/"+data[data.length-1];
        }
        else{
            var leftImgFile = "Assets/Art/"+data[index-1];
        }
        const leftImg = document.createElement("img");
        leftImg.setAttribute("src", leftImgFile);
        leftImg.setAttribute("alt", leftImgFile);
        leftBorder.appendChild(leftImg);

        var mainImgFile = "Assets/Art/"+data[index];
        const mainImg = document.createElement("img");
        mainImg.setAttribute("src", mainImgFile);
        mainImg.setAttribute("alt", mainImgFile);
        mainBorder.appendChild(mainImg);

        if(index==data.length-1){
            var rightImgFile = "Assets/Art/"+data[0];
        }
        else{
            var rightImgFile = "Assets/Art/"+data[index+1];
        }
        const rightImg = document.createElement("img");
        rightImg.setAttribute("src", rightImgFile);
        rightImg.setAttribute("alt", rightImgFile);
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
    leftbutton.appendChild(document.createTextNode("<<"));

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
     rightbutton.appendChild(document.createTextNode(">>"));


    section.appendChild(leftbutton);
    setImages(index);
    section.appendChild(leftBorder);
    section.appendChild(mainBorder);
    section.appendChild(rightBorder);
    section.appendChild(rightbutton);
});
