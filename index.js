

function checkFn () {
  const width  = parseInt(document.getElementById("widthInput").value);
  const height = parseInt(document.getElementById("heightInput").value);

  let image = document.getElementById("imagePreview");

  image.width  = width 
  image.height = height
}


function loadImage (event){

     let img = document.getElementById ('imagePreview')
     
     img.src = URL.createObjectURL (event.target.files[0])

     const clr = document.querySelector ('#btn')

     clr.classList.remove ("bg-green-600" , "hover:bg-green-400");
     clr.classList.add ("bg-red-700" , "hover:bg-red-400")
     

}