import chalk from 'chalk';
import qr from 'qrcode-terminal';

export const handleQrCode = async (err, choose) => {
  if (err) console.error("Error on application");
  const isSmall = choose.type == 2;
  qr.generate(choose.link, { small: isSmall }, (qrCode) => {
    console.log(chalk.green("Generated Qr Code successfully"));
    console.log(qrCode);
  });
}