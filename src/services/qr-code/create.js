import prompt from "prompt";
import { promptQrCode } from "../../prompts/prompt-qrcode.js";
import { handleQrCode } from "./handle.js";

async function createQrCode() {
  prompt.get(promptQrCode, handleQrCode); 
  prompt.start();
}

export { createQrCode };