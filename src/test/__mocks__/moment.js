// import moment from "moment"
//the above code will cause A STACK ERROR (A PROCESS WHEREBY WE HAVE A FUNCTION THAT CALL ITSELF . You're going to ru down all the memory and eventually the process is going to fail.)
// What we want to do is grab the original version of moment  and jest gie us a way to do that with require.requireActual("module-name")
const moment = require("moment")
export default (timestamp = 0) => {
 return moment(timestamp)
}