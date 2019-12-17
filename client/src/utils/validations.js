// email
const validateEmail = email =>
  // /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email);
  /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/.test(email);
// password - Uppercase && Lowercase && Number && Special Character && minimum length 8 characters
const validatePassword = password =>
  /^(?=.*\d)(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{4,20}/.test(
    password
  );
// /^^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\d)(?=.*[!@#$%^&*()-_~`])[A-Za-z\d!@#$%^&*()-_~`)(]{4,20}$/.test(
// password
// );

const validateName = name => /^[a-zA-Z ]*$/.test(name);
export { validateEmail, validatePassword, validateName };
