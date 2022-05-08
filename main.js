var boxes = document.querySelectorAll('.box');
var s = document.querySelector('.rgbSpan');
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
var playbtn = document.querySelector('#PlayAgain');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var boxcount = 6;
var statusText = document.querySelector('.Status');
statusText.textContent = "Let's Play!!";

easyBtn.addEventListener('click', function (){
    
    document.querySelector('h1').style.background ='rgb(236, 91, 115)';
    statusText.textContent = "Let's Play!!";
    boxcount = 3;
    this.style.background = 'rgb(236, 91, 115)';
    this.style.color = 'white';
    hardBtn.style.background = 'white';
    hardBtn.stye.color = 'rgb(236, 91, 115)';
    colors = generateRandomColor(boxcount);
    pickedColor = colors[Math.floor(Math.random() * 3)];
    s.textContent = pickedColor;

    for (var i = 0; i < boxes.length; i++){
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function (){
    
    document.querySelector('h1').style.background = 'rgb(236, 91, 115)';
    statusText.textContent = "Let's Play!!";
    boxcount = 6;
    this.style.background = 'rgb(236, 91, 115)';
    this.style.color = 'white';
    easyBtn.style.background = 'white';
    easyBtn.stye.color = 'rgb(236, 91, 115)';
    colors = generateRandomColor(boxcount);
    pickedColor = colors[Math.floor(Math.random() * 6)];
    

    for (var i = 0; i < boxes.length; i++){
       boxes[i].style.background = colors[i];
       boxes[i].style.display = 'block';
    }
});


playbtn.addEventListener('click', function (){
    
    document.querySelector('h1').style.background ='rgb(236, 91, 115)';
    statusText.textContent = "Let's Play!!";
    colors = generateRandomColor(boxcount);
    pickedColor = colors[Math.floor(Math.random() * boxcount)];
    s.textContent = pickedColor;

    for (var i = 0; i < boxes.length; i++){
       boxes[i].style.background = colors[i];
       
    }
});


for (var i = 0; i < colors.length; i++){
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function () {
        var selectedColor =this.style.background;
        if (selectedColor === pickedColor) {
            win();
        } else{
            loose(this);
        }
    });

}




function win() {
    for (var i = 0; i < colors.length; i++){
        boxes[i].style.background = pickedColor;
        
     
     document.querySelector('h1').style.background = pickedColor;
     statusText.textContent = 'Correct!!';
    }
}

function loose(a) {
    a.style.background = 'grey';
    statusText.textContent = 'Try Again!';
}


function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor()); 
       }
       return arr;

}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}