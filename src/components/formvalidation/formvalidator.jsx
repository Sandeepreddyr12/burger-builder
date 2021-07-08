const formvalidater = (rules, value) => {
    let isValid = false;
    let validationFeedback = null

if(!rules){
  return [true, null]
}

    if(rules.required){
      isValid = value.trim() !== '';
      validationFeedback =  isValid ? null :' Required,please complete the fields & ' 
    }
    if(rules.length){
      isValid = value.length === rules.length;
      validationFeedback = validationFeedback + (isValid ? null : ` must be exactly ${rules.length} characters long & `)
    }


    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
        validationFeedback = validationFeedback + (isValid ? null : `it must be atleast ${rules.minLength} character long`)
    }
  

  if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
      validationFeedback = validationFeedback + (isValid ? null : 'invalid Email')
  }

  if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
      validationFeedback = validationFeedback + ( isValid ? null : 'it must be Numeric')
  }

  let errorMessage = validationFeedback ? validationFeedback.replaceAll('null', ' ') : null ;

    return [isValid, errorMessage];
}

export default formvalidater;