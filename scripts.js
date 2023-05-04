
var gameLoop = true;
const todoArray = [];
isValid = true;

while(gameLoop === true){
    let userInput = prompt("Welcome to the To Do List, Please write your command:");

if (userInput==='new'){
    let newInput = prompt("Write the item you would like to add:");
    todoArray.push(newInput);
    console.log('Added Succesfully');

}
if (userInput==='list'){
    console.log('The Current List');
    console.log(todoArray);

}
if (userInput==='delete'){
    let num = 1;
    console.log('The Current List');
    for (let i of todoArray){
        console.log(num +" " + i);
        num++;
    }
    const newInput = parseInt(prompt("Write the number you would like to delete:"));
    if (!Number.isNaN(newInput)){
        console.log(`The value '${todoArray[newInput-1]}' has been deleted`)
        todoArray.splice(newInput-1,1);
        console.log('The Current List');
        console.log(todoArray);
    } else{
        console.log('Error: NaN; action terminated')
    }

}
if (userInput === 'quit'){
    gameLoop= false;
    console.log('Quitting Successfully');
    break;
}

}