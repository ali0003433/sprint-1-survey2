// declaring 
let captchaArray = ['Who is the President?', 'What is our Nations capital?','How many states are there?']

function captchaFunction() {
    let correctAnswer = ['Trump', 'DC','50']
for(let i=0; i < correctAnswer.length; i++) {
    let result = prompt(captchaArray[i]);
    if(correctAnswer[i] !== result) {
        alert('Sorry robot')
        return
}
alert('Hello Human'); 
}

// Function called newFunc that accepts parameters. Prompts x and returns y. 

function newFunc(x) { 
    return prompt(x);
};

//Invoke newFunc and return yourName
let yourName = newFunc('What\'s your name?'); 
console.log();

//Invoke newFunc and return teacherName
let teacherName = newFunc('What\'s your Javascript teacher\'s name?'); 
console.log(teacherName);

//Invoke newFunc and return favFood 
let favFood = newFunc('What\'s your favorite food?'); 
console.log(favFood);

//Confirm favFood
let agree = confirm("Is your favorite food " + favFood + "?")
console.log(agree);

//Invoke newFunc and return forgiving 

let forgiving = confirm('Would you forgive easily?');
if (forgiving === true) 
{
' forgive '; 
} else 
{
' not forgive '; 
}; 

console.log(forgiving); 

//Create function newFunc2 which uses HTML method and property 
function newFunc2(l, m) 
{
let elOne = document.getElementsByClassName(l)
    for(i = 0; i < elOne.length; i++)
    {
        elOne[i].innerHTML = m; 
    }; 
};

//Invoke newFunc2 and pass it arguments 
newFunc2('name', yourName); 
console.log(newFunc2);
newFunc2('food1', favFood); 
console.log(newFunc2); 

// Function called newFunc2. Gets element by id, using argument id1, and replaces it with a string. Sets element to equal parameter para1. 
function newFunc3(id1, para1)
{
    let elTwo= document.getElementById(id1)
    elTwo.innerHTML = para1; 
}; 

// Invoke newFunc2 three times by passing it arguments 
newFunc3('teacher', teacherName); 
console.log(newFunc3); 
newFunc3('forgive', forgiving); 
console.log(newFunc3); 
}
