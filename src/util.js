export const getLettersFromName = (name) => {
  const nameArray = name.split(" ");
  let result = "";
  nameArray.forEach((str) => (result += str[0]));
  return result;
};
