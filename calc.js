const display = document.getElementById('display');
const clickSound =document.getElementById('clickSound');
function playSound(){
    clickSound.currentTime = 0;
    clickSound.play();
}
function append(value){
    playSound();
    if(display.textContent=== '0') display.textContent = '' ; 
display.textContent += value;  
}
function clrDisplay() {
    playSound();
    display.textContent ='0';
}
function deleteChar() {
    playSound();
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0,-1);
    }
    else {
        clrDisplay();
    }
}
function calculate() {
    playSound();
    /*error handling if we do 7+ and click equals there is error so we need to catch it.*/ 
    try{
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent = "Error";
    }  
}
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((/\d|[+\-*/%.]/).test(key)) {
        append(key);
    
     } else if (key==='Enter') {
        calculate();
    
      } else if(key === 'Backspace') {
        deleteChar();
    }else if(key.toLowerCase() === 'c') {
        clrDisplay();
    }
});