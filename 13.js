let btn1=document.querySelector("#btn1");
btn1.onclick=( ) => {
    console.log("Button 1 clicked");
    let a=25;
    a++;
    console.log(a);
};
let div=document.querySelector("div1");
div.onmouseover=() => {
    console.log("Mouse over the div");
};