// 1. Write a JavaScript program to list the properties of a JavaScript object
// var student = 
// {
//     name : "Usama Razzaq",
//     sclass : "Batch-3",
//     rollno : 18033
// };
// document.write("My name is "+student.name+" and I am student of "+student.sclass+" and my roll no is "+student.rollno)

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 }
// document.write("Before deleting the object:"+"<br>")
// document.write(JSON.stringify(student))
// document.write("<br>")
// document.write("After deleting the object:")
// document.write("<br>")
// delete student.rollno
// document.write(JSON.stringify(student))

// 3. Write a JavaScript program to get the length of a JavaScript object.   
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// document.write("There are "+Object.keys(student).length+" properties in object.")

// 4. Write a JavaScript program to display the reading status 
// (ie display book name, author name and reading status) of the following books.   
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true},
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true},
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }
// ]
// var i ;
// for(i=0; i<library.length; i++)
// {
//     document.write("Author Name: "+library[i].author+", Book Title: "+library[i].title+", ReadingStatus: "+library[i].readingStatus)
//     document.write("<br>")
// }

// 5. Write a JavaScript program to get the volume of a Cylinder with 
// four decimal places using object classes.   
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

// Date Handling
// 2. Write a JavaScript function to get the current date.
// Note : Pass a separator as an argument.
// function getDate(separation)
// {
//     var date = new Date()
//     var day = date.getDate();
//     var month = date.getMonth()
//     var year = date.getFullYear()
//     console.log(day+separation+month+separation+year)
// }
// var separator = prompt("Please enter the separator:")
// getDate(separator)

// 3. Write a JavaScript function to get the number of days in a month.
// function getDays(month,year)
// {
//     var numberOfDays = 28
//     var month31 = [0,2,4,6,7,9,11]
//     var month30 = [3,5,8,10]
//     var month29 = [1]
//     for(i=0;i<month31.length;i++)
//     {
//         if(month == month31[i])
//         {
//             numberOfDays = 31;
//         }
//         else if(month == month30[i])
//         {
//             numberOfDays = 30;
//         }
//         else if(month == 1 && year%4 ==0)
//         {
//             numberOfDays = 29
//         }
//     }
//     console.log(numberOfDays)
// }
// var month = prompt("*Note:Months are starting from 0.Please enter the month Number:")
// var year = prompt("Please enter the year:")
// getDays(month,year)

// 4. Write a JavaScript function to get the month name from a particular date.
// function monthName(m)
// {
//     var months = [0,"January","February","March","April","May","June","July","August","September","October","November","December"]
//     console.log(months[m])
// }
// var date = new Date()
// var mon = prompt("Please enter the month number:")
// monthName(mon)

// 6. Write a JavaScript function to add specified minutes to a Date object.
// function SettingMinutes()
// {
//     var date = new Date()
//     console.log("Actual minutes of time:"+date.getMinutes())
//     date.setMinutes(45)
//     console.log("Set minutes of time:"+date.getMinutes())
// }
// SettingMinutes()
