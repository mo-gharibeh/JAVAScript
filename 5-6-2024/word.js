
/// Exercise #2
let x = document.querySelector(".box1");

x.style.backgroundColor = "blue";
x.style.width = "200px";
x.style.height = "200px";

x.onclick = function(){
    x.style.backgroundColor = "red";
}

/// Exercise #5
let pass = document.getElementById('pass');
let repass = document.getElementById('repass');
let par = document.querySelector('.formp');
let btn5 = document.querySelector('#btnsu');


pass.onkeyup = function(){
    if (pass.value.length < 6 ){
        par.classList.remove('pnone');
    }else{
        par.classList.add('pnone');
    }
}

repass.onkeyup = function (){
    if (repass.value === pass.value) {
        btn5.classList.remove('btn5');
    }else{
        btn5.classList.add('btn5');
    }
}



/// Exercise #6

let btnAdd = document.getElementById('btnsong');
btnAdd.onclick =function() {
let textcontant = document.getElementById('insong');
let songName = textcontant.value.trim();
let lisong = document.getElementById('lisong');

if (songName === '') {
    alert('Please enter a song name');
    return;
}


let li = document.createElement('li');
li.textContent = songName;
lisong.appendChild(li);


textcontant.value = '';

}
