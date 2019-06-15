/*
 * Internal Modules
 */

const skills = require('../data/hard-skills');

/*
 * Function Exports
 */
exports.getSkills = getSkills;


// Login Function
function getSkills(req,res){
  res.send(skills);
}


