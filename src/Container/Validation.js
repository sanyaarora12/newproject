export default function Validations(values) {

    let errors = {};
    
    if (!values.name || values.name==="") {
      errors.name = 'name is required';
    } 
    if (!values.phonenumber || values.phonenumber==="" || values.phonenumber.length>10 ) {
      errors.phonenumber = 'Phone number is required';

    } else if (values.phonenumber.length < 10) {
      errors.phonenumber = 'Phone number needs to be 6 characters or more';
    }
    if (!values.email || values.email==="") {
      errors.email = 'Email required';
    
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
   
    return errors;
  }