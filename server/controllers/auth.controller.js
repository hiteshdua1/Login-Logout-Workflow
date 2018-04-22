/*
 * Internal Modules
 */

const users = require('./../api-fixtures/users');

const config = require('./../config/app.config'); 

/*
 * Function Exports
 */
exports.login = login;
exports.logout = logout;


// Login Function
function login(req,res){ 
    
    try {
        //Get Username and password from request
        const username = req.body.userName;
        const password = req.body.password;

        //Check whether user credentials are valid or not;
        if(users[username] && users[username]["password"] === password) {
            const user = Object.assign({}, users[username]);
            user.username = username;
            delete user.password;

            //Set the cookie in case of valid user
            res.cookie(config.userCookieName, JSON.stringify(user));
            //Return the user data
            res.send({ success: true , errorMessage : null , user: user });

        } else {
            // Create Error Object for invalid Credentials
            const error = { success: false, errorMessage : "wrong username/password" };
            throw error;
        }
    
    } catch(error) {
        console.log(error)
        res.send(error);
    }
   
}

//Logout Function
function logout(req,res) {
    //Clear the cookie 
    res.clearCookie(config.userCookieName);
    res.send(true)
}
