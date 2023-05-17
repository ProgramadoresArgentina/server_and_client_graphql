import CryptoJS from "crypto-js";

export const encryptPassowrd = (password) => {
  const hashPassword = CryptoJS.AES.encrypt(
    password,
    process.env.SECRET_KEY_HASH
  ).toString();

  return hashPassword;
};

export const decryptPassowrd = (password) => {
  const decryptPassword = CryptoJS.AES.decrypt(
    password,
    process.env.SECRET_KEY_HASH
  );
  const hashPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

  return hashPassword;
};
