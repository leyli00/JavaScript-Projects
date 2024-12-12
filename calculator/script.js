const display = document.querySelector(".input");
const btn = document.querySelectorAll(".button");
const calcBtn = document.querySelector(".calc-buttons");

btn.forEach((item) => {
    item.onclick = () => {
        if(item.dataset.button === 'Clear'){
            display.value = '';
        }
        else if(item.dataset.button === '='){
            if(display.value !== ''){
                display.value = eval(display.value);
            }
        }
        else{
            display.value += item.dataset.button;
        }
    }
})
