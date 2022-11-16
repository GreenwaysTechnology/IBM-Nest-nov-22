//union type
let gender;
gender = "Male";
console.log(gender);
function getPersonDetails(id, name = "", gender) {
    console.log(id, name, gender);
}
getPersonDetails(1, "subramanian", "Male");
getPersonDetails("abc", "subramanian", "Male");
