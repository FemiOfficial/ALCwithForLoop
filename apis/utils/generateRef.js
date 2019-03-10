let randomString = '';
function generateRandomString(length = 10) {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    randomString += characters.substring(0, Math.random(charactersLength - 1));
  }
  return randomString;
}

generateRandomString(10);
module.exports = generateRandomString;
