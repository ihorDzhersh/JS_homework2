//**************************task1********************************** */
// let x = 1;
// let y = 2;
// let res1 =String(x) + String(y) ;
// console.log(res1);
// console.log(typeof(res1));

                                                //12
                                                //String


// let res2 = !!x + String(y);
// console.log(res2);
// console.log(typeof(res2));

                                                // true2
                                                // String

// let res3 = x != y;
// console.log(res3);
// console.log(typeof(res3));

                                                // true
                                                // boolean

// let res4 = parseInt(!!x) + y;
// console.log(res4);
// console.log(typeof(res4));

                                                // NaN
                                                // number

//**************************task2********************************** */

// let number = prompt("Enter your number");
// if(number % 2 === 0 && number > 0) console.log("Number is paired and grater than 0");
// else if(number == 0)console.log("You can't devide 0");
// else if(number % 7 === 0 && number !== 0) console.log("the number is divisible by 7");
// else console.log("It's not a number");

//*************************task3*********************************** */

// let arr = [];
// arr[0] = 1;
// arr[1] = "Example";
// arr[2] = ("K" > "L");
// arr[3] = null;

// console.log(arr)                //(4) [1, "Example", false, null]

// let fifthValue = prompt("Enter any value");
// arr.push(fifthValue);
// console.log(arr);               //[1, "Example", false, null, "bla bla bla"]
// console.log(arr[4])             //bla bla bla

// arr.shift();
// console.log(arr);               //["Example", false, null, "bla bla bla"]    

//***********************task4********************* */

// let cities = ["Rome", "Lviv", "Warsaw"];


//***********************task5************************************** */

// let isAdult = prompt("How old are you?");
// if(isAdult >= 18)console.log("Welcome to the party");
// else if(isAdult < 10)console.log("Go to your mammy");
// else console.log(" It's not your day)))")

//**********************task6*************************************** */

// let a = Number(prompt("side a"));
// let b = Number(prompt("side b"));
// let c = Number(prompt("side c"));

// if( a<=0 || 
//     b<=0 || 
//     c<=0 ||
//     typeof(a)!=Number ||
//     typeof(a)!=Number ||
//     typeof(a)!=Number 
//     ){ console.log("incorrect data!!!")
// }else{
//         let p = 1/2*(a + b + c);
//     let square = Math.sqrt(p*(p-a)*(p-b)*(p-c)); 
//     console.log("square of triangle = "+Number(square.toFixed(3)));

//     let alphaDeg = Number((Math.acos(((a*a)+(b*b)-(c*c))/(2*b*c))*180/Math.PI).toFixed(0));
//     console.log("alpha = "+alphaDeg);
//     let betaDeg = Number((Math.acos(((a*a)+(c*c)-(b*b))/(2*a*c))*180/Math.PI).toFixed(0));
//     console.log("beta = "+betaDeg);
//     let gammaDeg = 180-alphaDeg-betaDeg;
//     console.log("gamma = "+gammaDeg);

//     if(alphaDeg === 90 || betaDeg === 90 || gammaDeg === 90 ) console.log("the triangle is right-angled");

// };

                                                    
//*********************task7****************************

// let date = new Date();
// console.log(date)
// let hours = date.getHours();
// console.log(hours);
// let minutes = date.getMinutes();
// console.log(hours + ' : ' + minutes);

// // if(hours <= 5 || hours >=23) console.log('Good Night!');
// // else if (hours <= 11)console.log('Good Morning!');
// // else if (hours <= 17)console.log('Good Afternon!');
// // else console.log('Good Evening!');

// switch(hours){
//     case 23:  
//     console.log('Good Night!');
//     break;
//     case 0:  
//     console.log('Good Night!');
//     break;  
//     case 1:  
//     console.log('Good Night!');
//     break;
//     case 2:  
//     console.log('Good Night!');
//     break;
//     case 3:  
//     console.log('Good Night!');
//     break;
//     case 4:  
//     console.log('Good Night!');
//     break;
//     case 5:  
//     console.log('Good Night!');
//     break;
//     case 6:  
//     console.log('Good Morning!');
//     break;
//     case 7:  
//     console.log('Good Morning!');
//     break;
//     case 8:  
//     console.log('Good Morning!');
//     break;
//     case 9:  
//     console.log('Good Morning!');
//     break;
//     case 10:  
//     console.log('Good Morning!');
//     break;
//     case 11:  
//     console.log('Good Morning!');
//     break;
//     case 12: 
//     console.log('Good Afternon!');
//     break;
//     case 13: 
//     console.log('Good Afternon!');
//     break;
//     case 14: 
//     console.log('Good Afternon!');
//     break;
//     case 15: 
//     console.log('Good Afternon!');
//     break;
//     case 16: 
//     console.log('Good Afternon!');
//     break;
//     case 17: 
//     console.log('Good Afternon!');
//     break;
//     case 18: 
//     console.log('Good Evening!');
//     break;
//     case 19: 
//     console.log('Good Evening!');
//     break;
//     case 20: 
//     console.log('Good Evening!');
//     break;
//     case 21: 
//     console.log('Good Evening!');
//     break;
//     case 22: 
//     console.log('Good Evening!');
//     break;
//     default: console.log("wrong input");
//     break;
// };
