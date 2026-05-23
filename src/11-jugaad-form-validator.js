export function validateForm(formData) {

  let isValid = false;
  let error = {};


  let name = formData?.name?.trim() ?? "";

  if(name === "" || name.length < 2 || name.length > 50){
    error["name"] = "Name must be 2-50 characters";
  }


  let email = formData?.email?.trim() ?? "";
  let emailMessage = validateEmail(email);

  if(emailMessage !== true){
    error["email"] = emailMessage;
  }


  let phoneNo = formData?.phone ?? "";
  let phoneNoMessage = validatePhone(phoneNo);

  if(phoneNoMessage !== true){
    error["phone"] = phoneNoMessage;
  }


  let age = formData?.age;
  let ageMessage = validateAge(age);

  if(ageMessage !== true){
    error["age"] = ageMessage;
  }


  let pinCode = formData?.pincode ?? "";
  let pincodeMessage = validatePin(pinCode);

  if(pincodeMessage !== true){
    error["pincode"] = pincodeMessage;
  }


  let state = formData?.state?.trim() ?? "";
  let stateMessage = validateState(state);

  if(stateMessage !== true){
    error["state"] = stateMessage;
  }

  let agree = formData?.agreeTerms;
  let agreeMessage = validateAgree(agree);

  if(agreeMessage !== true){
    error["agreeTerms"] = agreeMessage;
  }

  if(Object.keys(error).length === 0){
    isValid = true;
  }

  return {
    isValid,
    errors: error
  };
}



function validateEmail(email){

  let atIndex = email.indexOf('@');
  let lastAtIndex = email.lastIndexOf('@');
  let dotIndex = email.indexOf('.', atIndex);

  if(
    email === "" ||
    atIndex === -1 ||
    atIndex !== lastAtIndex ||
    dotIndex === -1
  ){
    return "Invalid email format";
  }

  return true;
}


function validatePhone(phone){

  const regexPhone = /^[6-9][0-9]{9}$/;

  if(regexPhone.test(phone)){
    return true;
  }

  return "Invalid Indian phone number";
}



function validateAge(age){

  let vAge = age;

  if(typeof age === "string" || age instanceof String){
    vAge = parseInt(age);
  }

  if(
    isNaN(vAge) ||
    !Number.isInteger(vAge) ||
    vAge < 16 ||
    vAge > 100
  ){
    return "Age must be an integer between 16 and 100";
  }

  return true;
}



function validatePin(pin){

  if(
    typeof pin !== "string" ||
    pin.length !== 6 ||
    pin.startsWith("0")
  ){
    return "Invalid Indian pincode";
  }

  for(let i = 0; i < pin.length; i++){

    if(pin[i] < '0' || pin[i] > '9'){
      return "Invalid Indian pincode";
    }
  }

  return true;
}



function validateState(state){

  if(state === ""){
    return "State is required";
  }

  return true;
}



function validateAgree(agree){

  if(Boolean(agree) !== true){
    return "Must agree to terms";
  }

  return true;
}



console.log(
  validateForm({
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9876543210",
    age: 20,
    pincode: "400001",
    state: "Maharashtra",
    agreeTerms: true
  })
);


console.log(
  validateForm({
    name: "",
    email: "bad-email",
    phone: "12345",
    age: 10,
    pincode: "0123",
    state: null,
    agreeTerms: false
  })
);