
function bgr(){
  var b=prompt("Enter Color");
  document.body.style.backgroundColor=b;
}
function tc(){
  var tc = prompt("Enter Color");
  document.getElementById("text1").setAttribute("style","color: "+tc);
}

  function hapusGambar(id) {
    const hapus = document.getElementById(id);
    hapus.remove();
    const count = document.getElementById("basket").children.length - 1;
    document.getElementById("count").innerHTML = count;
  }
  
  function deleteAndAdd(id, src) {
    const count = document.getElementById("basket").children.length - 0;
    const image = document.createElement("img");
    image.setAttribute("id", count);
    image.setAttribute("onclick", "hapusGambar(id)");
    image.src = `${src}`;
    document.getElementById("basket").appendChild(image);
    
    document.getElementById("count").innerHTML = count;
  }
//const img1 = document.
//getElementById ('img1');
//img1.addEventListener('click',function(e){

    //if(e.target.idName == 'img1'){
       // basket.src = e.target.src;
        
    //}
    
//});


