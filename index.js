// Requires
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const createPassword = require("./utils/createPassword");

// Init commander
program.version("1.0.0").description("password generator");

// Config Commander
program
  .option("-l ,--length <number>", "length of password", "16")
  .option("-nn ,--no-numbers", "remove numbers")
  .option("-ns ,--no-symbols", "remove symbols")
  .parse();

const { length, numbers, symbols } = program.opts();

// Generate password
const generatedPassword = createPassword(length, numbers, symbols);

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output
console.log(chalk.blue("Generated password : ") + generatedPassword);
console.log(chalk.yellow("password copied to clipboard"));
