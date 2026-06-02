let divs=document.querySelectorAll("div");
let idx=1;
for(div of divs)
{
    div.innerrtext='new value ${idx}';
    idx++;
}