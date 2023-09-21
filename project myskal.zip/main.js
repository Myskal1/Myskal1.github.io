
let a = 0;
const imgElement = document.querySelector("img");

function buttonClick(){
   if(imgElement.src.match("photo.png")){
 imgElement.setAttribute("src","photo2.png");
}else {imgElement.setAttribute("src","photo.png")
      }

}

const img = document.querySelector("img");
img.addEventListener("click",buttonClick);
