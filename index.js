import inquirer from "inquirer";
import chalk from "chalk";
// // declare a constant "answers" and assign results of inquirer pompt functions
console.log(chalk.bgGreenBright("Welcome to Word Counter!"));
do {
    const answers = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence! Which you wish to count words"
        }
    ]);
    const words = answers.Sentence.trim().split(" ");
    // // // print the array of wordsto the console
    console.log(chalk.bgYellowBright(words));
    // // // print the word count of the senteces to the console
    console.log(chalk.bgRedBright(`Word count in your sentence is ${words.length} words`));
} while (true);
