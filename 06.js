for(let count=1;count<5;count++)
{
    console.log("anamika");
}
let sum=0;
for(let count=1;count<=5;count++)
{
    sum+=count;
}
console.log("sum: ",sum);
let str="anamika";
for(let i of str)
{
    console.log("i: ",i);
}
let student={
    name: "anamika",
    age: 20,
    cgpa: 8.5,
};
for(let key in student)
{
    console.log("key: ",key);
}
for(let value in student)
{
    console.log("value: ",value);
}
console.log("the name of student is",student.name);
let newstr=str.toUpperCase();
console.log(str);
console.log(newstr);
console.log(str.slice(1,4));
console.log(str.concat(newstr));
console.log(str.replace("m","a"));
console.log(str.charAt(1));

