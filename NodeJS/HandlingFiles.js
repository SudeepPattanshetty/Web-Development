const fs = require('fs');
const filePath = "./tasks.json"

const command = process.argv[2]
const argument = process.argv[3];

const loadTask = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return [];
    }
}

const saveTask = (task) => {
    const dataJSON = JSON.stringify(task);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTask();
    tasks.push({task});
    saveTask(tasks);
    console.log("Task added ", task)
}

const listTasks = () => {
    const tasks = loadTask();
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
}

const removedTask = (argument) => {
    try {
        let tasks = loadTask();
        tasks = tasks.filter((_, index) => index != argument)
        saveTask(tasks)
        console.log("removed task");
    } catch (error) {
        console.log(error)
    }
}

if(command === "add"){
    addTask(argument);
}
else if(command === "list") {
    listTasks();
}
else if(command === "remove"){
    removedTask(parseInt(argument) - 1);
}
else{
    console.log("Command not found!")
}