// let name1;
// name1 = "john";

// const name2 ='yusuf';

// let mynumber = 12;
// let isPresent = false;

// let nummber_of_absentee = null;
// let nothing = undefined;
// let notanumber = NaN;

// console.log(name1, name2,mynumber);

// console.log(typeof(nothing));

// // this is used for remebering that i stored a variable that does . .
// /**
//  *  this code is 
//  * more of a multiline comment
//  * 
//  */

// // comparison opeprators > < <= >= == === !=
// // assigment operators += -=
 


// // a user balance in your application is "NGN 750", he decides to purchase an item that cost "NGN720". Write a logical step program that first checks if the user balance is enough to purchase the item and if his balance is enough to purchase the item then calculate the balance that will be left in his account after purchase.

// // let balance="NGN750"
// // let cost="NGN720"
// // console.log(Number(balance>=cost));
// // let cal=node
// // console.log(cal);


// let balance="NGN800";
// let item_cost="NGN600";
// console.log(balance);
// let a=Number(balance.replace("NGN"," "))
// let b=Number(item_cost.replace("NGN"," "))
// let enough =a-b;
// console.log(enough);

// function myFirstFunction(username){
//     console.log(`hi ${username}`)
// }
// myFirstFunction("Mido145")
// myFirstFunction("Taofeek")
// myFirstFunction("i MX BOY")


// function addNumbers(number1, number2){
// let answer = number1+number2;
// return answer;
// }

// let addition_answer= addNumbers(7,10);
// console.log(addition_answer)

 let addition = (number1,number2) => number1 + number2

 

 const answer=addition(2,9)
//  console.log(`The addition of the two numbers is ${answer}`)


// //conditiional execution of code. it enables our code choose a psath to follow so long the requirement is fufilled.  conditioonal syatements are if, if-else, else if- else

// if(5<4){
//     console.log('5 is greater')
// }

// //using if and else 
// if(3==='3'){
//     console.log('string comparison avoided')
// }
// else{
//     console.log('strict comparison adhered to')
// }
// // using if else if else : this is used when wer have more than two option ot path to follow

// if(6>10){
//     console.log(6)
// }
// else if (6<7){
//     console.log(3)
// }
// else{
//     console.log('do nothing')
// }

// // let assume we have a caculator function

// function performCalculation(num1,num2,operation_type){
//     if (operation_type=="+"){
//         let addition = num1+num2
//         console.log(`The addition of ${num1} and  ${num2} is ${addition} `)
//         }
//     else if(operation_type=="-"){
//         let sub=num1-num2
//         console.log(`The substraction of ${num1} and ${num2} is ${sub}`)
//     }
//     else if(operation_type=="*"){
//         let mul= num1*num2
//         console.log(`The multiplication of ${num1} and ${num2} is ${mul}`)
//     }
//     else if (operation_type=="/"){
//     let div = num1/num2
//     console.log(`The division  of ${num1} and ${num2} is ${div} `)
//     }
//     else{
        
//         console.log("you did not input the correct sign ")
//     }

// }

// performCalculation(2,3,"%")

// //for loop
// for(let mulTable=1; mulTable < 20;mulTable++){
// console.log(mulTable)
// console.log("Performing loop")
// }

// function createMultiplicationTable(number){
//     console.log(`Table ${number}`)
//         console.log(`----------------------------`)
//         for (let x=1 ; x<12; x++){
//             let answer = `${number} * ${x} = ${number *  x}`;
//             console.log(answer)
        
//         }
//         console.log(`-------------------------------`)
//     }
// createMultiplicationTable(4)

// let x=1;
// while(x<=200){
//     console.log(x);
//     x++;
// }
// first clean userbalance and convert to a number beffore we can check if thed balance is /greater than produc
// function calculateUserBalance(user_balance , cost_of_balance){

 
// const balance_in_number=Number( user_balance.replace("NGN","  "));

// const cost_in_number=Number(cost_of_balance.replace("NGN", " "))

// if(cost_in_number >  balance_in_number){
//     console.log("Your balance is insufficient to purchace this item")
// }

// const balance_left = balance_in_number-cost_in_number;
// console.log("Item purchase and user balance is now NGN"+balance_left);
// return balance_left

// }



// calculateUserBalance('NGN700', 'NGN350')

/*Create a function that will check if the argument passed into a function, a number  or not. If the argument 
passed is a number then return true */
// function enterNumber(digitNum ){
//  let a=console.log(typeof(digitNum));
//  if(a==Number)
//  console.log('it is a number')

// else if(a==String)
//   console.log('not a number')

// }

// function isNumberSolution(number){
//   if(isNaN(number)){
//     return false;
//   }
//   return true;
// }
// console.log(isNumberSolution('fjfejef'))

// // Assigngmment 3
// //As a walmart software developer u have been tasked with developing an automated bot that helps gi
// function calDiscount(cost_of_product, quantity_of_item){

//      if (cost_of_product >= 250 && quantity_of_item >=25){
   
//       let discount = (3.5/100)*cost_of_product;
//       let amount_to_pay = cost_of_product - discount;
//       console.log('Discount criteria met')
//       console.log(`you are paying $${amount_to_pay} for each item`)
//       console.log(`Total Amount To Pay : $${amount_to_pay * quantity_of_item}`)
//     }
//     else{
//       console.log('Discount criteria not met')
//         console.log(`You are paying the full amount of $${cost_of_product} 
//          for each item`)
//     }
// console.log('Thanks for shopping with us')
// }

//   // calDiscount(300,45)
// // calDiscount(200, 15)

// // Assignment 2
// function sumOfEvenNumber(Input){
//     let sum=0
//     for(let num=1; num<=Input; num++){
//           if( num%2==0 ){
//         sum+=num
         

//           }
          
//         //   console.log('which adds to'+"  "+(num+num))
//     }        
//        console.log(`the sum of the even numbers betweeen 1 and  ${Input} is :`+"  " +sum ) 
   

// }
// // sumOfEvenNumber(6)     
//    let fruits=['mango','apple','orange']
    
//     // console.log(fruits.pop())  


//  fruits.forEach((item,index)=>console.log(`item:${item}`,`index:${index}`))


//  fruits.forEach(function(item,index){
//   console.log("item:"+"" +item+ "" + "index: is"+""+ +index)

//  })
// let numbers=[2,4,6,6,9]

// let filter_number=numbers.filter((item) => item>5)
// console.log(filter_number)

// let new_numbers = numbers.filter(function(item){
//   if(item<5){
//     return item
    
//   }
//  })
// console.log(new_numbers)
// //Given a cart item containing iphone, mobile speaker, headset, create a function for the following use case: 1)a function that create an array corresponding to the length of the string in the cart away. 
// //e.g cart =['iphone', 'itel'] ans =[6,4]

// let cart=['iphone','itel','headset','mobile speaker']

// function lengthOfItemsInCart(cart){
//   let cart_length = [];

//   for(let i=0;i<cart.length;i++){
//     const item = cart[i].replaceAll(" ",'')
//     cart_length.push(item.length);
//   }

//   return cart_length;
// }

// console.log(lengthOfItemsInCart(cart))
 let demoArray=[10, 20, 30, 40, 50, 60, 70, 80, 90,  100]
var itemPoped= demoArray.pop()
var newLength=demoArray.push('New Item')

console.log("\n New  Length=" +newLength)
console.log("demoArray ="+demoArray)

var itempopped=demoArray.pop()
console.log('\nitempopped ='+itempopped)
console.log('demoArray ='+demoArray)

var newLength= demoArray.unshift('Front item')
console.log("\nNew Length ="+newLength)
console.log('demoArray =' +demoArray)

var input= prompt("PLease enater a number : ")

if (input===0){
    console.log('Hello')
    console.log("you entered 0")
}
else if (input >0){
    console.log("You entered a positive number")

}
else if (input<0){
    console.log("You entered a negative number")
}
else{
    console.log("You did not enter a number ")
}