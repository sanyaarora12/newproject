export default function Validations(values) {

    let errors = {};
    
    if (!values.input ) {
      errors.input = 'Name required';
    
    } 
    if (!values.phonenumber || values.phonenumber==="" || values.phonenumber.length>10 ) {
      errors.phonenumber = 'Phone number is required';
      
    } else if (values.phonenumber.length < 10) {
      errors.phonenumber = 'Phone number needs to be 6 characters or more';
    }
  
   
    return errors;
  }