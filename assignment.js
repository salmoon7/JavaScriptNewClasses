//create a variable of users
//store the variables of user in an array
//create a function that accept user's input as in username and amount
//let the function store those variables so if a user inputs his user name and amount returns the user info
   
  
function handleSubscription(username,amount_to_pay){
    let signup_users = [user1,user2,user3]
    signup_users.forEach(element=>{
        if(element===username && amount_to_pay>=2500){
        let subscriber= {
            'id': id,
            'username': username,
            'amount' : amount_to_pay,
            'subscribed': true,
            'signup_date': new Date().toGMTString(),
            'subscription_date':new Date().toGMTString()
        
        
        }
        return subscriber;
    }
    })
    
}
let user1 =handleSubscription('adam245',9000);
let user2 = handleSubscription('poamn4005',2000);
let user3 = handleSubscription('paulo23n',3000);

console.log(user1)
