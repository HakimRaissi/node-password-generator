const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

module.exports = (length = 16, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;
  let password = "";

  hasNumbers && (chars += numbers);
  hasSymbols && (chars += symbols);

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.random() * chars.length);
  }

  return password;
};
