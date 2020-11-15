const program = require('commander');
const api = require('./index.js')

program
    .option('-x, --xxx', 'this is a test')
program
    .command('add')
    .description('add a task')
    .action((...args) => {
        let trueArgs = args[1] || []
        const words = trueArgs.join(' ')
        api.add(words)
    });

program
    .command('clear')
    .description('clear all tasks')
    .action((...args) => {
        console.log("this is clear")
    });

program.parse(process.argv);