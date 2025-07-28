import { permittedCharacters } from "./utils/permitted-characters";

export const handlePassword = async () => {
  let characters = [];
  let generatedPassword = [];
  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedCharacters();
  for(let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    generatedPassword += characters[index];
  }
  return generatedPassword;
};
