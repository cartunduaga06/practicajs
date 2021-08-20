let yesBtn = document.querySelector('#yesBtn');


yesBtn.addEventListener('click', function (){
    alert('siempre supe que aceptarias');
});

let noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover', function(){
    let randomX = parseInt(Math.random()*100);
    let randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `traslate(-${randomX}%, -${randomY}%)`);

})

