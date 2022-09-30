//  let a = ["Ali", "kamran" , "Hassan" , "Nimra"]
//  let result = a.slice(1,2);
//     document.write(result)

// let x = "Muhammad Aziz"
//  let result = x.slice(9,14)
//  document.write(result);

// function myfunction(fname,lname,age,location){
//     document.write("My first name is : " , fname , "<br>")
//     document.write("My last name is : " , lname , "<br>")
//     document.write("My age is :  " , age , "<br>")
//     document.write("Location : " , location , "<br>")


// }
// myfunction("Muhmmad" ,"Aziz" , 18 , "Karachi")

// // function hg(a + b){
// //     return a + b
// // }
// // x = 2 * 5
// // document.write(x)

// // function myfunction(){
// //     document.write("hello")
// // }

// function getinputvalue(){
//     var x = document.getElementById("input").value;
//     alert(x)
// // }
const object = {
    firstname: "Aziz",
    Age: 19,
};


for (const [key ,value] of Object.entries(object)){
    console.log(key,value);
                
}
document.write(object.firstname + "<br> is" + object.Age + "years old.");
