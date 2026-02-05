

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

     const clr = document.querySelector ('button')

     clr.classList.remove ("text-red-800")
     clr.classList.add ("text-green-500")
     

}