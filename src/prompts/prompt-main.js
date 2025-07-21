export const mainPrompt = [
  {
    name: "select",
    description: "Choose tool (1 - QrCode, 2 - Password)",
    pattern: /^[1-2]+$/,
    message: "Choose only one or two",
    required: true
  }
];