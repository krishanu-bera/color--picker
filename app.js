let btn = document.querySelector('button');

btn.addEventListener("click",function(){
    let random = getRandomColor();

    let h1 = document.querySelector('h1');
    h1.innerText = random;

    let div =  document.querySelector('div');
    div.style.backgroundColor = random;
}
);


let getRandomColor = function (){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `RGB(${red},${green},${blue})`;

    return color;
}


// this is for form code 

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

});


// this is for my own text editor

let inp = document.querySelector("#inp");
let para = document.querySelector("p");

inp.addEventListener("input",function(){
  
    para.innerText = inp.value;
})



    



