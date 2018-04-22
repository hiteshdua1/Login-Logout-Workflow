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
            setTimeout(() => {
                res.send({ success: true , errorMessage : null , user: user });
            }, getRandomTimeout());

        } else {
            // Create Error Object for invalid Credentials
            const error = { success: false, errorMessage : "wrong username/password" };
            throw error;
        }
    
    } catch(error) {
        console.log(error);
        //Return the user data
        setTimeout(() => {
            res.send(error);
        }, getRandomTimeout());

    }
   
}

//Logout Function
function logout(req,res) {
    //Clear the cookie 
    res.clearCookie(config.userCookieName);
    res.send(true)
}

// Returns a random number between min and max
function getRandomTimeout() {
    return Math.random() * (3000 - 1000) + 1000;
  }
  
