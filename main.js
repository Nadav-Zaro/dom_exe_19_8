//1
// const button = document.getElementById("push")
// const input = document.getElementById("input")
// const list = document.getElementById("list")
// let array = [];
// button.addEventListener("click", function () {
//         array.push(input.value);
//         list.innerHTML += `<li>${input.value}</li>`
// })


//2
// const button = document.getElementById("push")
// function getSum(num1, num2) {
//     let sum = num1 + num2;
//     button.addEventListener("click", function(){
//         alert(sum); 
//     })
// }
// getSum(2,4);  

//3
// const button = document.getElementById("push");
// button.addEventListener("click", function(){
//     button.style = "background-color:Red;"
// })

//4
// const button = document.getElementById("push");
// const screen = document.getElementById("randomNumber");
// let randomNumber = Math.floor(Math.random() * 100);
// button.addEventListener("click", function(){
//     screen.innerText = randomNumber;
// })

//5
// const list = document.getElementById("list")
// const groceryList = [
//     {
//         itemName: "apple",
//         picture:"https://betzalim.co.il/wp-content/uploads/2020/06/%D7%AA%D7%A4%D7%95%D7%97-%D7%A2%D7%A5-%D7%96%D7%94%D7%95%D7%91.jpg"
//     },
//     {
//         itemName: "bannana",
//         picture:"https://malkat.co.il/wp-content/uploads/2020/09/%D7%91%D7%A0%D7%A0%D7%94-%D7%9E%D7%95%D7%9B%D7%9F.jpg"
//     },
// ]
// for (let i = 0; i < groceryList.length; i++) {
//     list.innerHTML +=`<h1>${groceryList[i].itemName}</h1>`
//     list.innerHTML += `<img src="${groceryList[i].picture}">`
// }

//6
// const button = document.getElementById("push")
// const userNum = document.getElementById("number")
// let numArray = [];
// button.addEventListener("click", function(){
//     numArray.push(userNum.value)
// })
// console.log(numArray);

//7
// const holder = document.getElementById("switched")
// let day = new Date();
// holder.addEventListener("click", function(){
//     holder.innerHTML = day
// })

//8
// const holder = document.getElementById("switched")
// let hour = new Date().getHours();
// holder.addEventListener("click", function(){
//     holder.innerHTML = hour
// })

//9
// const button = document.getElementById("push");
// const userAge = document.getElementById("number");
// const holder = document.getElementById("switched");
// let year = new Date().getFullYear();
// button.addEventListener("click", function(){
//     holder.innerHTML = year - Number(userAge.value);
// })

//10
// const button = document.getElementById("push");
// const userNum = document.getElementById("number");
// const holder = document.getElementById("screen");
// let numArray = [2, 4, 6, 8];
// button.addEventListener("click", function(){
//     for (let i = 0; i < numArray.length; i++) {
//         if(Number(userNum.value) == numArray[i]){
//         holder.innerHTML =`<h4>lucky number ${userNum.value}, you won</h4>`;
//         return 
//         }
       
//     } holder.innerHTML =`<h4>U wrong ${userNum.value}, is not the one</h4>`;
// })

//11
const button = document.getElementById("push");
const userName = document.getElementById("name");
const holder = document.getElementById("screen");
button.addEventListener("click", function(){
    let space = userName.value.indexOf(" ")
        holder.innerHTML += `<p>${userName.value.substring(0, space)}</p>`
        holder.innerHTML += `<p>${userName.value.substring(space)}</p>`
})


//12
const firstInput = document.getElementById("first")
const secondInput = document.getElementById("second")
const btn = document.getElementById("btn")
const screen1 = document.getElementById("screen1")
btn.addEventListener("click", function(){
    if (firstInput.value.length > secondInput.value.length) {
        screen1.innerHTML =` first input:"${firstInput.value}" is longer` 
    }
    else{
        screen1.innerHTML =` second input:"${secondInput.value}" is longer`
    }
})

//13
const userFirstName = document.getElementById("userFirstName");
const userEmail = document.getElementById("userEmail");
const userNumber = document.getElementById("userNumber");
const btn1 = document.getElementById("btn1");
const screen2 = document.getElementById("screen2");
btn1.addEventListener("click", function(){
    let custList = {
        firstName:userFirstName.value,
        userEmail:userEmail.value,
        userNumber:userNumber.value
    }
    screen2.innerHTML +=`${custList.firstName}, ${custList.userEmail}, ${custList.userNumber}`
    console.log(screen2);
})
