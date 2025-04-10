//destructuring 
const course={
    courseName: "js",
    price: 999,
    courseInstructor: "Joydeb"
}

//syntax
const {courseInstructor: instructor} = course
console.log(instructor);
