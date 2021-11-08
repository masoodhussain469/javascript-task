
let myArr = [];

    let myDetail = {
        firstName : "Masood",
        lastName : "Hussain",
        Age : 21,
        Address : "Sikanderabad Nagar" ,
        isLocated : "Nagar Colony Gilgit"
    }
    let myUni ={
        uniName : "Karakuram Internationl University",
        Dept : "Computer science",
        Program : "BS(IT)",
        isLocated : "Gilgit",

    }
    let myOffice = {
        acadmyName : "STP",
        CompanyName : "North Aim (GB Esport)",
        numberOfStudents : 10 ,
        Course : "Web development" ,
        teacherName : "Muhammad Irfan" 
    }

    myArr.unshift(myDetail)
    console.log(myArr)

    myArr.push(myUni)
    console.log(myArr)

    myArr.push(myOffice)
    console.log(myArr)

let myBio = `My name is ${myArr[0].firstName} ${myArr[0].lastName}. 
I am ${myArr[0].Age} years old and i belong to ${myArr[0].Address} ,
 but i live in ${myArr[0].isLocated} . I am Studying at ${myArr[1].uniName}. 
 My Department is ${myArr[1].Dept} and 4 years program of ${myArr[1].Program}.
 University located at ${myArr[1].isLocated} . Our Acadamy name is ${myArr[2].acadmyName}
in Acadamy our company name is ${myArr[2].CompanyName}and our company has ${myArr[2].numberOfStudents}
students. And there is a teacher in our Company who teache us a course of ${myArr[2].Course} by named ${myArr[2].teacherName}. ` 

console.log(myBio);

myArr.pop()
console.log(myArr)

myArr.shift()
console.log(myArr)

myArr.shift()
console.log(myArr)

