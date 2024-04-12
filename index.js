let textbox=document.getElementById("textbox"); 
let listcontainer=document.getElementById("items");

// let el = document.querySelector(".input-wrap .input");
// let widthMachine = document.querySelector(".input-wrap .width-machine");
// el.addEventListener("keyup", () => {
//   widthMachine.innerHTML = el.value;
// });

// // Dealing with Textarea Height
// function calcHeight(value) {
//   let numberOfLineBreaks = (value.match(/\n/g) || []).length;
//   // min-height + lines x line-height + padding + border
//   let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
//   return newHeight;
// }

// let textarea = document.querySelector(".resize-ta");
// textarea.addEventListener("keyup", () => {
//   textarea.style.height = calcHeight(textarea.value) + "px";
// });

function additem(){
    if(textbox.value===''){
        alert("Enter something");
    }
    else{
        
        let li=document.createElement("li");
        li.innerHTML=textbox.value;
        listcontainer.appendChild(li);
        //let span=document.createElement("span");
        // span.innerHTML="\u00d7";
        // li.appendChild(span);
        
        var button = document.createElement("button");
        button.innerHTML = "Delete";
        li.appendChild(button);
        
        
    }
    textbox.value="";
    saveData();
}

listcontainer.addEventListener("click",function(e){
    e.target.parentElement.remove();
    saveData();
},false)

function removeAll(){
    document.getElementById("items").innerHTML = "";
    saveData();
}

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showTask()