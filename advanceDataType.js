
// let person =  {
//         'name' : 'John Walker',
//         'age' : 34,
//         'friends': ['David', 'micheal'],

// } 

// for(let key in person){
//     console.log(key, person[key])
// } ,

// username, id assigned, amount will be set to o by default, subscription will be false

function createUser(username,amount){


    let id = "#"+Math.round(Math.random()*1000000);
        let subscriber = {
        'id': id,
        'username': username,
        'amount' : 0,
        'subscribed': false,
        'signup_date': new Date().toGMTString(),
        'subscription_date': new Date().toGMTString(),
        }
    
        return subscriber;
    }
    
let user1 = createUser('adam245',2700)
let user2 = createUser('poamn4005',1500);
let user3 = createUser('paulo23n',2500);

 let get_user=[user1,user2,user3]
function searchForUser(search){
    get_user.forEach(element=> {
        if(element===search)
            console.log(search)
           
     });
     let get_user[i]=get_user
     if(search!==get_user[i].length){
        console.log('You are not a registered user')
            }
    
      }
      searchForUser(user3)
      
// console.log(user2)
// console.log(user3)
// console.log(user1)

// handle subscription
/** 
 * hint: create a function to handle subscription of users in which the function takes in two parameter username and amount. the program will then looop through each signupusers in the array of users database to find the user. ensure the user amount meets the minimum subscription level of 2500 and also that the username exist in the database. then update the users subscriptioon state, amount and the subscription date. if successfull with subscription then return true otherwise false
 * */ 

/**function createUserSub(username, amount_to_pay){
    
    let id=['#420122','#234286','#222111','#456732','#687930']
   
    if(amount_to_pay>=2500){
        amount=amount_to_pay
    }
    else{
    }
        console.log('insufficient amount for subscription')
    let subscriber = {
        'id': id,
        'username': username,
        'amount' : 0,
        'subscribed': false,
        'signup_date': new Date().toGMTString(),
        'subscription_date':new Date().toGMTString()
    
    
    }
    return subscriber;
}  **/
