const accountId = 144553
let accountEmail = "hasdk@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed


accountEmail = "hcjd@gmail.com";
accountPassword = 21212121
accountCity = "Bengaluru"

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
