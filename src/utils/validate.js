export const checkValidData = (email, password, name = null) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPassword) return "Password is not valid";
  if (name !== null && name.trim() === "") return "Name is required";
  return null;
};
