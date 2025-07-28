import chalk from "chalk";
import { handlePassword } from "./handle.js";

export const createPassword = async () => {
  console.log(chalk.green("Password"));
  const password = await handlePassword();
  console.log(password);
}