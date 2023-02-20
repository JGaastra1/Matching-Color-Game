
const memeHolder = document.querySelector('#MemeHolder');
const form = document.querySelector('#form');


    


form.addEventListener('submit', function(e){
    e.preventDefault();  
    //create the image and add url 
    let img = document.createElement('img'); 
    img.src = document.querySelector('input').value; 
    img.setAttribute('id', 'imgText'); //add id of imageTExt

   //attach image to an li and add li to ul 
   let picDiv = document.createElement('div');
   let newMeme = document.createElement('li');
   newMeme.appendChild(picDiv);
   picDiv.appendChild(img);
   memeHolder.appendChild(newMeme);
   picDiv.setAttribute('id', 'picDiv');
   

    //create text and append to image
    let topText = document.querySelector('#textOnTop').value
    let topTexDiv = document.createElement('div');
    topTexDiv.setAttribute('id', 'topTex');
    topTexDiv.innerHTML += topText;
    picDiv.appendChild(topTexDiv);
    
    let bottomText = document.querySelector('#textOnBottom').value
    let bottomTextDiv = document.createElement('div');
    bottomTextDiv.setAttribute('id', 'bottomText');
    bottomTextDiv.innerHTML += bottomText;
    picDiv.appendChild(bottomTextDiv);
    
    
    newMeme.addEventListener('click', function(){
        newMeme.remove();
    })
    

    console.log('clicked');
    
})
