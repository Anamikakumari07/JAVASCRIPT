console.log("one");
console.log("two");
function hello(){
    console.log("hello");
}
setTimeout(hello, 4000);
console.log("three");
console.log("four");
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,sum);
function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
}
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3);
    });
});
function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
}
function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{   
    setTimeout(()=>{
        console.log("data",dataid);
        resolve("success");
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
});
}
function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{   
    setTimeout(()=>{
        console.log("data",dataid);
        reject("error");
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
});
}
const getdataPromise = ()=>{
    return new Promise((resolve,reject)=>{
            console.log("i am a promise");
            resolve("success");
        });
}
let promise = getdataPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);  
});     
promise.catch((error)=>{
    console.log("promise rejected",error);
});
function getdata(dataid){
    return new Promise((resolve,reject)=>{   
    setTimeout(()=>{
        console.log("data",dataid);
        resolve("success");
    }, 2000);
});
}
getdata(1).then((res)=>{
    console.log("data 1 received",res);
    getdata(2).then((res)=>{
        console.log("data 2 received",res);
    });
});
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("api called");
            resolve("data received");
        }, 2000);
    });
}
async function getapi(){
    await api();
    await api();
}