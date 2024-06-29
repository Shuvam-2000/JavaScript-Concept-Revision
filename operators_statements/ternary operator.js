// ternary operator example

const isLoggedIn = 1; // if  val is 0 then logged\out and if 1 then loggedin

// if(isLoggedIn == 0){
//     document.write('Login')
// }else if(isLoggedIn == 1){
//     document.write("Logout")
// }

// using ternary operator
// in ternary operator the ? & the : stands for if & else
// here if it its logged in then it will print logout 
// else if logut then loggedin
const option = isLoggedIn == 1 ? "Logout" : "Login"; 
                // condition       true      False
                document.write(option);
