function annou(){
document.getElementById('intrare').value=`<center> <h1 style="color: yellow;font-size: 3rem;">An nou fericit, <font color="white">X</font>!</h1> <H1 id="out" style="z-index: 1;;font-family: 'Roboto', serif;color: whitesmoke;font-size: 1.5rem;"></H1> <h2 id="tremur" onclick="tremura()" style="color: yellow;font-size: 9rem;z-index: 2;padding: 0;margin: 0;font-family: 'Roboto', sans-serif;">2024</h2> <img src="https://usagif.com/wp-content/uploads/gify/fireworks-4-usagif.gif.webp" width="100%" height="100%" style="object-fit: cover;position: absolute;left:0px;top: 0px;z-index: -1;" alt="GIF Artificii"> </center> <h1 style="color:yellow;position: absolute;bottom: 30px;right: 30px;">Cu drag, <br><font color="white">X</font> </h1> <center><p style="position: absolute;bottom: 0;color: white;">&copy <a  href="mailto:simiontudor@programmer.net">Simion Tudor</a></p></center> <audio src="https://roastro.github.io/FelicitariDigitaleCraciun2023/tomp3.cc%20-%20ABBA%20%20Happy%20New%20Year%20Video.mp3" id='audio'></audio><script> document.body.style.backgroundColor = "black";</script>`;}
function craciun(){
    document.getElementById('intrare').value=`<audio src="https://roastro.github.io/FelicitariDigitaleCraciun2023/jingle-bells-orchestra_56sec-172985.mp3" id="audio"></audio> <center> <h1 style="font-size: 5rem;padding: 0;margin: 0;">Crăciun Fericit, <font color="red">X</font>!</h1><br> <h1 id="out" style=" padding:0;margin: 0;">Zile pana la Craciun</h1><br> <img src="https://cdn.pixabay.com/photo/2016/08/23/16/59/santa-claus-1614994_1280.png" style="position: absolute;left: 0;" height="300px" alt="" srcset=""> </center> <center><p style="position: absolute;bottom: 0;color: white;">&copy <a  href="mailto:simiontudor@programmer.net">Simion Tudor</a></p></center> <h1 style="position:absolute; right: 20px;bottom:0;">Cu drag, <br> <font color="red" >X</font></h1> <div  class="snowflakes" aria-hidden="true"> <div style="z-index: 0;"> <div class="snowflake">❅</div> <div class="snowflake">❅</div> <div class="snowflake">❆</div> <div class="snowflake">❄</div> <div class="snowflake">❅</div> <div class="snowflake">❆</div> <div class="snowflake">❄</div> <div class="snowflake">❅</div> <div class="snowflake">❆</div> <div class="snowflake">❄</div> <div class="snowflake">❅</div> <div class="snowflake">❅</div> <div class="snowflake">❆</div> <div class="snowflake">❄</div> </div> </div>`;
    
}

function afis(){
    document.getElementById('out').innerHTML=document.getElementById('intrare').value;
}
       



function trimite(){
    itxt=document.getElementById('intrare').value;
     idn=Math.floor(Math.random() * 1000000) + 100000;
     id="ID"+idn;
     fetch('https://getpantry.cloud/apiv1/pantry/f41b80b1-bbfc-4d6b-b0a6-dc5350377bd4/basket/newBasket31', {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ [id]: itxt})
})  
document.getElementById('out').style.fontSize="10rem";
document.getElementById('out').innerHTML="ID-ul este:    "+idn;
        
    }
    
