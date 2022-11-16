//union type

let gender: "Male" | "Female" | "Third"
gender = "Male"
console.log(gender)

function getPersonDetails(id: number | string , name: string = "", gender: "Male" | "Female" | "Third") {
      console.log(id,name,gender)
}
getPersonDetails(1,"subramanian","Male")
getPersonDetails("abc","subramanian","Male")


