let count=0;
let terminal = document.getElementById("terminal");
let btn = document.getElementById("addText");
let listText = document.getElementById("listText");
let cleartext  = document.getElementById("clearText");
let delet=document.getElementById(count)
let liElement= document.getElementById(count)




let addText = function() {
    let li=document.createElement("li");
    let delet=document.createElement("button");
    let br=document.createElement("br");
    li.innerText = terminal.value;
    delet.innerText = "delet";
    
    delet.setAttribute("id", "count");
    delet.setAttribute("onclick", "deletLi");
    li.setAttribute("id", "count");

    count++;
    if (terminal.value==''){    
        return;
    }

    listText.appendChild(li)
    listText.appendChild(delet)
    listText.appendChild(br)
    terminal.value='';

}

let clear = function() {
    listText.innerHTML='';
    count=0;
}



let deletLi = function() {
    liElement.parentElement.remove()
}


btn.addEventListener('click', addText)
cleartext.addEventListener('click', clear)
delet.addEventListener('click', deletLi)