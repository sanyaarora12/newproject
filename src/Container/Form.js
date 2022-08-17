import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Grid, Paper, TextField } from "@mui/material";
import RadioButton from "../Components/RadioButton/RadioButton";
import Checkboxes from "../Components/Checkbox/Checkboxes";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Popup from "./Popup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Form() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    ContactNumber: "",
    ContactMail: "",
    Name: "",
  });

  const [form, setForm] = useState({});
  const [buttonPopup, setButtonPopup] = useState(false);

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
    let arr = [];

    let obj = {
      valueStr: "",

      fieldKey: {
        id: "",
      },
    };
    console.log(formValues);

    // apiSubmit();
  };

  const apiSubmit = (e) => {
    console.log("came here");

    axios

      .post(
        "https://jio-clickstream-product-suggestion.extensions.jiox0.de/i/form-submissions-full",
        {
          Name: formValues.Name,

          ContactMail: formValues.ContactMail,

          ContactNumber: formValues.ContactNumber,
        }
      )

      .then((res) => {
        console.log(res.data);
      })

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // we will call an api here
    // have to get form id from url and have to pass in this func

    fetchPromotionDetails(id).then((temp) => {
      console.log(temp, "mounted");
      setForm(temp);
    });
  }, []);

  const fetchPromotionDetails = async (id) => {
    // you will call AN api here and will return the updated response

    const resp = await axios.get(
      `https://jio-clickstream-product-suggestion.extensions.jiox0.de/api/promotions/url/jddefghtj${id}/full`
    );
    // .catch((err) => {
    //   console.log(err.res.status);
    //   if (err.res.status === 404) {
    //     navigate("/Page404");
    //     return;
    //   }
    // });

    let res = resp.data;

    let newFields = res.formId.fields.map((item) => {
      const newOptions = item.options.map((val) => {
        return {
          ...val,
          isSelected: false,
        };
      });
      item.options = newOptions;
      const res = {
        ...item,

        showError: false,

        errorLabel: "invalid input!",
        valueInput: "",
      };
      return res;
    });

    res.formId.fields = newFields;

    return res;
  };
  const handleOptions = (e, n, type = "", optionIndex) => {
    let updatedValue = { ...form };

    if (type === "MultiCheckBox") {
      updatedValue.formId.fields[n].options[optionIndex].isSelected =
        e.target.value;
    }
    debugger;
    console.log(updatedValue, "updatedvalue");
    setFormValues(updatedValue);
    console.log(updatedValue.formId.fields[n].valueInput);
  };
  const handleChange = (e, n, type = "") => {
    let updatedValue = { ...form };
    updatedValue.formId.fields[n].valueInput = e.target.value;
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
    console.log(updatedValue.formId.fields[n].valueInput);
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
                <RadioButton
                  handleChange={(e) => handleChange(e, index, item.key)}
                  key={item.key}
                  title={item.title}
                  value={item.valueInput}
                />
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
          item.options.map((multicheckbox, optionIndex) => {
            final.push(
              <div>
                <Checkboxes
                  handleChange={(e) =>
                    handleOptions(e, index, item.key, optionIndex)
                  }
                  title={multicheckbox.title}
                  value={multicheckbox.isSelected}
                  checked={multicheckbox.isSelected}
                />
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
                <Checkboxes
                  onChange={(e) => handleChange(e, index, item.key)}
                  title={singlecheckbox.title}
                />
              </div>
            );
          });
          break;
        default:
          console.log("default");
      }
      console.log(final);
    });
    return final;
  };

  const theme = createTheme();
  const paperStyle = { padding: 20, height: "auto", width: 600 };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h3 style={{ marginLeft: "-450px" }}>
              <u>Form</u>
              <br />
              <br />
              <h5 style={{ marginLeft: "150px" }}>
                <strong>Promotion Lead Capture</strong>
              </h5>
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