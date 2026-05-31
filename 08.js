function sum(x,y)
{
    s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);
function countvowels(str)
{
    let count=0;
    for (const char of str)
    {
        if(
            char==="a"
        )
        {
            count++;
        }
    }
console.log(count);
    }
let num=[5,6,7,8,9];
num.forEach(nums => {
    console.log(nums*nums);
});
let newarr=num.map((val)=>{
    return val*2;
});
    console.log(newarr);
let newarrr=num.filter((val)=>{
    return val%2==0;
});
    console.log(newarrr);
    const output=num.reduce((prev,curr)=>{
        return prev>curr?prev:curr;
    });
        console.log(output);

