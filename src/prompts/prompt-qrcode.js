import chalk from "chalk";

export const promptQrCode = [
  {
    name: "link",
    description: chalk.yellow("Type link to generate qr code:"),
  },
  {
    name: "type",
    description: chalk.yellow("Choose between 1 - Normal or 2 - Terminal: "),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choose only between one or two")
  }
];