
// JS EXERCISES
//


//  21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"


let x = "John"
let y = "Doe"
//console.log(x + " <> " + y)


//  22) Create an object with properties such name, surname, email


let user = {
    name: "John",
    surname: "Doe",
    email: "john.doe@yahoo.com"
}
//console.log(user)
//  23) Delete Email from the previously created object

delete user.email 
//console.log(user)

//      24) Create an array with 10 strings in it

const myArray = ["this", "is", "an", "array", "of", "ten", "elemnt", "in", "it", "!"]

//      25) Print in the console every string in the previous array
for (let i=0; i<myArray.length; i++){
    //console.log(myArray[i])
}

//      26) Create an array with 100 random numbers in it

const myarr = []
const random = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
for (let i=0; i<100; i++){
    myarr.push(random(0, 100))
}
//console.log(myarr)
//console.log(myarr.length)


//      27) Wrote a function to get the MAX and the MIN from the previously created array

const getMaxMin = function(arr){
    console.log("Max is: " + Math.max(...arr) + " and min is: " + Math.min(...arr))
}
//getMaxMin(myarr)


//      28) Create an array of arrays, in which every array has 10 random numbers

let arr1 = []
let arr2 = []

for (let i = 0; i < 10; i++) {
    arr1.push(random(0, 100))
}
for (let j = 0; j < 3; j++) {
    arr2.push(arr1)
    
}

//console.log(arr1)
//console.log(arr2)


//      29) Create a function that gets 2 arrays and returns the longest one

let arr = [1, 2, 4, 5, 8]
const longest = function(array1, array2) {
    let result = array1.length > array2.length ? "the first array are the longest" : "the second array are the longest"
    console.log(result)
}
//longest(arr, arr1)



//      30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

const higherSum = function(array1, array2) {
    const arraySum = function(array){
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
            return sum
        }
        
    }
    let result = arraySum(array1)>arraySum(array2)? array1 : array2
    console.log(result)
}
//higherSum(arr, arr1)

//


//      DOM 
//


//      31) Get element with ID "container" from the page

let container = document.getElementById('container')

//      32) Get every "td" from the page

let cels = document.getElementsByTagName('td')
//console.log(cels)

//      33) Create a cycle that prints the text inside every td of the page

for (let i = 0; i < cels.length; i++) {
    //console.log(cels[i].innerHTML)
    //console.log("ceva")
}
//console.log(cels)

//let par = document.getElementsByTagName('p')
//console.log(par.innerText)

//      34) Write a function to change the heading of the page

let heading = document.querySelector('h1')
const changeHeader = function(text){
    heading.innerText = text
}
changeHeader("new text")

//      35) Write a function to add an extra row to the table

const addRow = function (){
    let tr = document.createElement('tr')
    let tb =  document.querySelector('tbody')
    tb.appendChild(tr)
} 
addRow()

//      36) Write a function to add the class "test" to each row in the table
//      37) Write a function to add a red background to every link in the page
//      38) Console log "Page loaded" when the page is correctly loaded
//      39) Write a function to add new items to a UL
//      40) Write a function to empty a list
//
//      EXTRA 
//
//      41) Add an eventListener to alert when the mouse is over a link, displaying the URL
//      42) Add a button to hide every image on the page
//      43) Add a button to hide and show the table from the page
//      44) Write a function to sum every number inside the TD (if the content is numeric)
//      45) Delete the last letter from the title each time the user clicks on it
//      46) Change a single TD background color when the user clicks on it
//      47) Add a button DELETE, on click it should delete a random TD from the page
//      48) Add a pink border to a cell when the mouse is over it
//      49) Write a function to add a table with 4 rows and 3 columns programmatically
//      50) Write a function to remove the table from the page