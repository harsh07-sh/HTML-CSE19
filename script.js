// // console.log("Hello World!");
// // This is a comment
// // /*var x = 9;
// // var y = 10;
// // var z = x + y;
// // console.log(z);
// // var name="Harsh";
// // console.log("My name is " + name);*/

// //  let name="harsh";
// // name="harsh sharma";
// // console.log(name);
// function calculate(){
//     let n = document.getElementById("numb").value;
//     let total=0;
    
//     for(let i=1;i<=n;i++){
//         let marks=parseFloat(prompt("Enter marks for subject"+i));
//     total+=marks;
//     }

// }
  function findLargest() {
      let input = document.getElementById("numbers").value;
      let numArray = input.split(",").map(num => parseFloat(num.trim()));
      numArray = numArray.filter(num => !isNaN(num));
      if (numArray.length > 0) {
        let largest = Math.max(...numArray);
        document.getElementById("result").innerText = "Largest number is: " + largest;
      } else {
        document.getElementById("result").innerText = "Please enter valid numbers!";
      }
    }

