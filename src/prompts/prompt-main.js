import chalk from "chalk";

export const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow.bold("Choose tool (1 - QrCode, 2 - Password)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choose only one or two"),
    required: true
  }
];