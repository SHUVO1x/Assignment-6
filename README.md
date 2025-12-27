1) What is the difference between var, let, and const?

ans: 
var is functional scoped it can be redeclared again and again and updated where let can be redeclared again but can be updated and const cant be re declared and updated later it should be done at the first time 
and var can hoist where let and const dont . This is the reason var creates a lots of bugs and we dont usually use it anymore 

2) What is the difference between map(), forEach(), and filter()?
ans: 
map returns a array if you want to anything with the array you have it gonna take every element of array and gonna return you new array which isnt the case in forEach . ForEach takes also every element but doesnt return anything 
most of the cases we use it showing in UI and its known for side effects . while filter uses for flitering basically like if you have an array and you want those numbers only which is greater than 5 then you gonna use filter method 
and put a condition and in return it gonna give an array which only fulfill your condition 

3) What are arrow functions in ES6?
ans: 
arrow functions are the new update which we got in es6. it actually shorted the function syntax . earlter we had to write function(){ } like this but it we can simply ()=>{ } which is way more easy and readable 

4) How does destructuring assignment work in ES6?
ans: 
it exracts values from array and objects easily like this 
const [ a , b ] = [1 , 2, ]
const { name , id } = person 
here it extracted the value of array and object and assignned it . it way more easier now

5) Explain template literals in ES6. How are they different from string concatenation?
ans: 
we can use template literals using backticks and its way more easier . Earlier we have to use string concatenation like 'we' + number(its a value here ) + " here" \n so much hard work for every space and going to new 
line but using template literals it has more easy go to new line use variables using the expression ${ } and boom .
