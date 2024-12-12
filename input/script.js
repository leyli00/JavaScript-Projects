const inputBox = document.querySelector(".input-box");
const insertBtn = document.querySelector(".insert");
const ulData = document.querySelector(".ulData");

function addTask(){
    if(inputBox.value == ""){
        alert("Please write something!");
    }
    else{
        let liData = document.createElement("li");
        liData.innerText = inputBox.value
        ulData.appendChild(liData);

        update();
    }
    inputBox.value = "";
}

function update(){
    const listItems = ulData.querySelectorAll('li');
    listItems.forEach((item, index) =>  {
        if((index + 1) % 3 === 0){
            item.style.color = 'red';
        }
        else{
            item.style.color ='';
        }
    });
}