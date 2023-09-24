import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome to Typescript TODOLIST Made By Shan");
    await sleep();
    rainbowTitle.stop();
}
await welcome()


interface Answers {
    todo: string;
    addMore: boolean
}

const todos: string [] = []
let AddMore: boolean = true;
while (AddMore) {
    const answers: Answers = await inquirer.prompt([
        {
            type: 'string',
            name: 'todo',
            message: 'Enter your Todo',
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Enter your Todo',
            default: false,
        }
    ]);

    const {todo, addMore} = answers;
    AddMore = addMore;
if (todo) {
    todos.push(todo);
}
else {
    console.info(`Kindly write any input`);
     }
}

if(todos.length > 0){
    console.info(`Your todo list:`)
    todos.forEach((t) => console.info (t))
} else {
    console.info(`No todos in the list`)
}
