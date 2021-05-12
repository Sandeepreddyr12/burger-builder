const formvalidater = (rules, value) => {
    let isValid = false;

if(!rules){
  return true
}

    if(rules.required){
      isValid = value.trim() !== ''
    }
    if(rules.length){
      isValid = value.length === rules.length;
    }


    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }
  

  if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
  }

  if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
  }

    return isValid;
}

export default formvalidater;