let data="secret information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("data = ",data);
    }
}
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        data="some new value";
    }
}
let student1=new user("anamika","anamika@example.com");
let student2=new user("aman","aman@example.com");
let admin1=new admin("admin","admin@example.com");