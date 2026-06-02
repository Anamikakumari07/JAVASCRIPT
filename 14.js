let btn=document.querySelector("#btn");
btn.onclick=(evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
};
let div=document.querySelector("div");
div.onmouseover=(evt) => {
    console.log( "you are inside div");
};
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",(evt) => {
    console.log("you have clicked the button-handler 1");
});
btn1.addEventListener("click",() => {
    console.log("you have clicked the button-handler 2");
});
const handler3=() => {
    console.log("you have clicked the button-handler 3");
};
btn1.addEventListener("click",handler3);
btn1.addEventListener("click",() => {
    console.log("you have clicked the button-handler 4");
});
btn1.removeEventListener("click",handler3);