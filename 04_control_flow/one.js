//control/logic flow
//if
const isUserLoggedIn=true
if (2 === "2") {
    console.log("true");
    
}
//>, <, >=, <=, 
//= assignment
//== compare
//!=
//=== also check the type
//!===

//short hand notation
const balance= 1000;
if (balance>50) console.log("test"); //impelecite scope
if (balance>50) console.log("test"),
console.log("test2"); //don't do it

//nesting
if (balance> 500) {
    console.log("gretter than 500");
}else if (balance < 700) {
    console.log("less than 700")
}else{
    console.log("gretter than 700");
}

