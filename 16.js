const students = {
    calctax1(){
        console.log("tax rate is 10%");
    },
    calctax2:function(){
        console.log("tax rate is 10%");
    }
};
const karanarjun1={
    salary:50000,
};
const karanarjun2={
    salary:50000,
};
const karanarjun3={
    salary:50000,
};
const karanarjun4={
    salary:50000,
};
karanarjun1.__proto__=students;
karanarjun2.__proto__=students;
karanarjun3.__proto__=students;
karanarjun4.__proto__=students;
class toyotacar{
    constructor(){
        console.log("constructor");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
let fortuner=new toyotacar();
let texus=new toyotacar();
class person{
    constructor(){
        console.log("constructor");
        this.name="priti";
    }
    eat()
    {
        console.log("eat");
    }
    sleep()
    {
        console.log("sleep");
    }
}
class engineer extends person{
    constructor(branch){
        super();
        this.branch=branch;
    }
    work(){
        console.log("work");
    }
}
let engobj=new engineer("anamika");
