const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "priti";
tinderUser.isLoggedIn = false;
console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anamika",
            lastname: "mishra"
        }
    }
};
console.log(regularUser.fullname.userfullname.firstname);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };
const obj3 = { ...obj1, ...obj2, ...obj4 };

const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "h@gmail.com" },
    { id: 3, email: "h@gmail.com" }
];
console.log(users[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "anamika"
};
const { courseInstructor: instructor } = course;
console.log(instructor);
const instructorObj = {
    name: "anamika",
    coursename: "js in hindi",
    price: "free"
};
console.log(instructorObj);
const arr = [{}, {}, {}];
console.log(arr);
