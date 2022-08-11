import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Grid, Paper, TextField } from "@mui/material";
import RadioButton from "../Components/RadioButton/RadioButton";
import Checkboxes from "../Components/Checkbox/Checkboxes";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { dummy } from "./data";
import Popup from "./Popup";

export default function Form() {
  const [formValues, setFormValues] = useState({ name: "", phonenumber: "" });

  const [form, setForm] = useState({});
  const[buttonPopup,setButtonPopup]=useState(false)

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
  }

  function validateName(input_str) {
    var re = /^[A-Za-z]+([\ A-Za-z]+)*/;
    return re.test(input_str);
  }

  const onSubmit = () => {
    let flag = true;
    let validationobj1 = {};
    form.formId.fields.forEach((i) => {
      if (i.type === "ContactNumber") {
        if (!validatePhoneNumber(i.type)) {
          validationobj1[i] = true;
          flag = false;
        } else {
          validationobj1[i] = false;
          flag = true;
          setButtonPopup(true);
        }
      }
    });
    console.log(validationobj1, "validationobj1", flag, "flag");
    
  };

  useEffect(() => {
    // we will call an api here
    const temp = fetchPromotionDetails();
    console.log(temp, "mounted");
    setForm(temp);
  }, []);

  const fetchPromotionDetails = () => {
    // you will call AN api here and will return the updated response
    var res = dummy;
    let newFields = res.formId.fields.map((item) => {
      return {
        ...item,
        showError: false,
        errorLabel: "invalid input!",
      };
    });
    res.formId.fields = newFields;
    return res;
  };

  const handleChange = (e, n, type = "") => {
    let updatedValue = { ...form };

    if (type === "ContactNumber") {
      const validate = validatePhoneNumber(e.target.value);
      if (validate) {
        updatedValue.formId.fields[n].showError = false;
      } else {
        updatedValue.formId.fields[n].showError = true;
      }
    } else if (type === "Name") {
      const validate = validateName(e.target.value);
      if (validate) {
        updatedValue.formId.fields[n].showError = false;
      } else {
        updatedValue.formId.fields[n].showError = true;
      }
    } else if (type === "ContactMail") {
      const validate = validateEmail(e.target.value);
      if (validate) {
        updatedValue.formId.fields[n].showError = false;
      } else {
        updatedValue.formId.fields[n].showError = true;
      }
    }
    updatedValue[n] = e.target.value;
    console.log(updatedValue, "updatedvalue");
    setFormValues(updatedValue);
    
  };

  const result = () => {
    let final = [];

    form?.formId?.fields.map((item, index) => {
      switch (String(item.type)) {
        case "ContactNumber":
          final.push(
            <div>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <TextField
                type="text"
                required
                label={item.type}
                onChange={(e) => handleChange(e, index, item.type)}
              />
              {item.showError && (
                <div style={{ color: "red" }}>{item.errorLabel}</div>
              )}
            </div>
          );
          break;
        case "ContactMail":
          final.push(
            <div>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <TextField
                type="text"
                required
                label={item.type}
                onChange={(e) => handleChange(e, index, item.type)}
              />
              {item.showError && (
                <div style={{ color: "red" }}>{item.errorLabel}</div>
              )}
            </div>
          );
          break;
        case "TextBox":
          final.push(
            <div>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <TextField
                type="text"
                required
                label={item.key}
                onChange={(e) => handleChange(e, index, item.key)}
              />
              {item.showError && (
                <div style={{ color: "red" }}>{item.errorLabel}</div>
              )}
            </div>
          );
          break;
        case "RadioGroup":
          final.push(
            <label>
              <strong>{item.key}</strong>
            </label>
          );
          item.options.map((radioitem) => {
            final.push(
              <div>
                <RadioButton key={item.key} title={item.title} />
                {radioitem.title}
              </div>
            );
          });
          break;

        case "MultiCheckBox":
          final.push(
            <label>
              <strong>{item.key}</strong>
            </label>
          );
          item.options.map((multicheckbox) => {
            final.push(
              <div>
                <Checkboxes title={multicheckbox.title} />
              </div>
            );
          });
          break;
        case "SingleCheckBox":
          final.push(
            <label>
              <strong>{item.key}</strong>
            </label>
          );
          item.options.map((singlecheckbox) => {
            final.push(
              <div>
                <Checkboxes title={singlecheckbox.title} />
              </div>
            );
          });
          break;
        default:
          console.log("b");
      }
      console.log(final);
    });
    return final;
  };

  const theme = createTheme();
  const paperStyle = { padding: 20, height: "180vh", width: 600 };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h3 style={{ marginLeft: "-450px" }}>
              <u>Form</u>
              <br/><br/>
              <h5 style={{ marginLeft: "150px" }}><strong>Promotion Lead Capture</strong></h5>
            </h3>
          </Grid>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" noValidate sx={{ mt: 1 }}>
              {result()}
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
              SUBMIT
            </Button>
           
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
        
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
