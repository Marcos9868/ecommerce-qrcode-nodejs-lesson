import prompt from 'prompt';
import { mainPrompt } from './prompts/prompt-main.js';

async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select == 1) console.log("QrCode");
    if (result.select == 2) console.log("Password");

    prompt.start();
  });
}

main();