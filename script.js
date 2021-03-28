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

// 7. Write a JavaScript function to test whether a date is a weekend.
// function  weekend(mon,dat,ye)
// {
//     var date = new Date()
//     date.setDate(dat)
//     date.setMonth(mon)
//     date.setFullYear(ye)
//     var day = date.getDay()
//     if(day == 6 || day == 7)
//     {
//         console.log("weekend")
//     }
//     else
//     {
//         console.log("Not weekend")
//     }
// }
// var month =prompt("Please enter month name:")
// var date = prompt("Please enter the date:")
// var year = prompt("Please enter the year:")
// weekend(month,date,year)

// 8. Write a JavaScript function to get difference between two dates in days.
// function differenceInDays()
// {
//     var now = new Date()
//     var time = now.getTime()
//     var past = new Date("Feb 10, 2021")
//     var pastTime = past.getTime()
//     var msDiff = time -pastTime ;
//     var dDiff = msDiff / (1000 * 60 * 60 * 24);
//     Math.floor(dDiff)
//     console.log(dDiff)
// }
// differenceInDays()

// 9. Write a JavaScript function to get the last day of a month.
// function getLastDay(month,year)
// {
//     var lastday = 28
//     var month31 = [0,2,4,6,7,9,11]
//     var month30 = [3,5,8,10]
//     var month29 = [1]
//     for(i=0;i<month31.length;i++)
//     {
//         if(month == month31[i])
//         {
//             lastday = 31;
//         }
//         else if(month == month30[i])
//         {
//             lastday = 30;
//         }
//         else if(month == 1 && year%4 ==0)
//         {
//             lastday = 29
//         }
//     }
//     console.log(lastday)
// }
// var month = prompt("*Note:Months are starting from 0.Please enter the month Number:")
// var year = prompt("Please enter the year:")
// getLastDay(month,year)

// 10. Write a JavaScript function to calculate 'yesterday day'.   
// function yesterday(mon,d,y)
// {
//     var date = new Date()
//     date.setMonth(mon)
//     date.setDate(d-1)
//     date.setFullYear(y)
//     console.log(date)
// }
// var month =prompt("Please enter month number:")
// var date = prompt("Please enter the date:")
// var year = prompt("Please enter the year:")
// yesterday(month,date,year)

// 13. Write a JavaScript function that will return the number of minutes in hours and minutes.
// function minutes()
// {
//     var minute = 130
//     var hours = minute/60
//     var mins = minute%60
//     hours = hours.toFixed(0)
//     Math.floor(hours)
//     console.log("Hours: "+hours+" , Minutes: "+mins)

// }
// minutes()

// 14. Write a JavaScript function to get the amount of days of a year.
// function NumOfDays()
// {
//     var year = prompt("Please enter the year:")
//     year = parseInt(year)
//     if(year%4 == 0)
//     {
//         console.log("366 Days")
//     }
//     else
//     {
//         console.log("365 Days")
//     }
// }
// NumOfDays()

// 15. Write a JavaScript function to get the quarter (1 to 4) of the year.
// function quarter(mon,d,y)
// {
//     var date = new Date()
//     date.setMonth(mon)
//     date.setDate(d)
//     date.setFullYear(y)
//     var mont = date.getMonth()
//     if(mont>=0 && mont<3)
//     {
//         console.log("Quarter 1")
//     }
//     else if(mont>=3 && mont<6)
//     {
//         console.log("Quarter 2")
//     }
//     else if(mont>=6 && mont<9)
//     {
//         console.log("Quarter 3")
//     }
//     else
//     {
//         console.log("Quarter 4")
//     }
// }
// var month =prompt("Please enter month number:")
// var date = prompt("Please enter the date:")
// var year = prompt("Please enter the year:")
// quarter(month,date,year)

// 16. Write a JavaScript function to count the number of days passed since beginning of the year.   
// function noOfDays(m,d,y)
// {
//     var date = new Date()
//     date.setMonth(m)
//     date.setDate(d)
//     date.setFullYear(y)
//     var ye = date.getFullYear()
//     var mo = date.getMonth()  
//     var da = date.getDate()
//     var NumOfDays = 0;
//     var leapYear = [31,29,31,30,31,30,31,31,30,31,30,31]
//     var notleapYear = [31,28,31,30,31,30,31,31,30,31,30,31]
//     if(ye%4 == 0 && mo>=1)
//     {
//         for(i=0; i<mo; i++)
//         {
//             NumOfDays = NumOfDays+leapYear[i]
//         }
//     }
//     else if(ye%4 != 0 && mo>=1)
//     {
//         for(i=0; i<mo; i++)
//         {
//             NumOfDays = NumOfDays+notleapYear[i]
//         }
//     }
//     NumOfDays = NumOfDays+da
//     console.log(NumOfDays)
// }
// var month =prompt("Please enter month number:")
// var date = prompt("Please enter the date:")
// var year = prompt("Please enter the year:")
// noOfDays(month,date,year)

// 18. Write a JavaScript program to calculate age.   
// function age(y)
// {
//     var date = new Date()
//     var currentYear = date.getFullYear()
//     var bDay = new Date()
//     bDay.setFullYear(y)
//     var bDayYear = bDay.getFullYear()
//     var age = currentYear - bDayYear
//     console.log(age+" years")
// }
// var year = prompt("Please enter the year:")
// age(year)

// 19. Write a JavaScript function to get the day of the month, 2 digits with leading zeros.   
// function leadingZero(m) 
// {
//     var date = new Date()
//     date.setMonth(m)
//     var month = date.getMonth()
//     if(month<=9)
//     {
//         console.log("0"+month)
//     }
//     else
//     {
//         console.log(month)
//     }
// }
// var mon = prompt("Please enter the month:")
// leadingZero(mon)

// 20. Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).   
// function getDay()
// {
//     var date = new Date()
//     var day = date.getDay()
//     var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
//     console.log(days[day])   
// }
// getDay()

// 21. Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).   
// function getDay()
// {
//     var date = new Date()
//     var day = date.getDay()
//     var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//     console.log(days[day])   
// }
// getDay()

// 22. Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).
// function getDay()
// {
//     var date = new Date("March 25, 2021")
//     var day = date.getDay()
//     if(day == 0)
//     {
//         day=7
//     }
//     console.log(day)   
// }
// getDay()

// 23. Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.).
// function dayOfMonth(d)
// {
//     var date = new Date()
//     date.setDate(d)
//     var da = date.getDate()
//     var newda
//     if(da == 1 || da == 21 || da ==31)
//     {
//         newda = da+"st"
//     }
//     else if(da == 2 || da == 22)
//     {
//         newda = da+"nd"
//     }
//     else if(da == 3 || da == 23)
//     {
//         newda = da+"rd"
//     }
//     else
//     {
//         newda = da+"th"
//     }
//     console.log(newda)
// }
// var date = prompt("Please enter the date:")
// dayOfMonth(date)

// 24. Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday.
// Example : 42 (the 42nd week in the year)
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(ISO8601_week_no(dt));
// 44
// function noOfDays(m,d,y)
// {
//     var date = new Date()
//     date.setMonth(m)
//     date.setDate(d)
//     date.setFullYear(y)
//     var ye = date.getFullYear()
//     var mo = date.getMonth()  
//     var da = date.getDate()
//     var NumOfDays = 0;
//     var leapYear = [31,29,31,30,31,30,31,31,30,31,30,31]
//     var notleapYear = [31,28,31,30,31,30,31,31,30,31,30,31]
//     var weekNo ; 
//     if(ye%4 == 0 && mo>=1)
//     {
//         for(i=0; i<mo; i++)
//         {
//             NumOfDays = NumOfDays+leapYear[i]
//         }
//     }
//     else if(ye%4 != 0 && mo>=1)
//     {
//         for(i=0; i<mo; i++)
//         {
//             NumOfDays = NumOfDays+notleapYear[i]
//         }
//     }
//     NumOfDays = NumOfDays+da
//     if(NumOfDays< 7)
//     {
//         weekNo = 1
//     }
//     else
//     {
//         weekNo = NumOfDays/7
//     }

//     console.log("Week Number: "+Math.floor(weekNo))
// }
// var month =prompt("Please enter month number:")
// var date = prompt("Please enter the date:")
// var year = prompt("Please enter the year:")
// noOfDays(month,date,year)
