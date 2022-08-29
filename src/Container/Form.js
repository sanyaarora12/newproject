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
import Dropdown from "../Components/Dropdown/Dropdown";

export default function Form({ date }) {
  let { id } = useParams();
  let navigate = useNavigate();
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

    let formFields = [];
    console.log(form);
    form.formId.fields.forEach((element) => {
      const obj = {
        valueStr: element.valueInput,
        fieldKey: {
          id: element.id,
        },
      };
      formFields.push(obj);
    });
    const request = {
      fields: formFields,
      formKey: { id: form.formId.id },
    };
    console.log(form);
    console.log(request);

    apiSubmit(request);
  };

  const apiSubmit = (request) => {
    console.log("came here");

    fetch("/api/form-submissions-full", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "*/*",
      },
      body: JSON.stringify(request),
    })
      .then((response) => {
        console.log(response.json());
        setButtonPopup(true);
      })
      .catch((err) => {
        console.log(err.res.status);
        if (err.res.status === 404) {
          navigate("/Page404");
          return;
        }
      });
  };

  useEffect(() => {
    fetchPromotionDetails(id).then((temp) => {
      console.log(temp);
      setForm(temp);
    });
  }, []);

  const fetchPromotionDetails = async (id) => {
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
  const checkBoxFields = (options) => {
    const temp = options
      .filter((val) => val.isSelected)
      .map((p) => p.valueStr)
      .join(",");

    return temp;
  };
  const handleOptions = (e, n, type = "", optionIndex = null) => {
    let updatedValue = { ...form };

    if (type === "MultiCheckBox" || type === "SingleCheckBox") {
      updatedValue.formId.fields[n].options[optionIndex].isSelected =
        e.target.checked;
      updatedValue.formId.fields[n].valueInput = checkBoxFields(
        updatedValue.formId.fields[n].options
      );
    } else if (type === "SelectBox" || type === "RadioGroup") {
      const currentOptions = updatedValue.formId.fields[n].options;
      optionIndex = currentOptions.findIndex(
        (val) => val.title === e.target.value
      );
      updatedValue.formId.fields[n].options.forEach((element, ind) => {
        if (ind === optionIndex) {
          element.isSelected = true;
          updatedValue.formId.fields[n].valueInput = e.target.value;
        } else {
          element.isSelected = false;
        }
      });
    }
    console.log(updatedValue, "updatedvalue");
    setForm(updatedValue);
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
    } else if (type === "Name" || type === "name") {
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
    } else if (type === "DateBox") {
      updatedValue.formId.fields[n].valueInput = e.target.value;
    }
    updatedValue[n] = e.target.value;
    console.log(updatedValue, "updatedvalue");
    setForm(updatedValue);
    console.log(updatedValue.formId.fields[n].valueInput);
  };

  const handleDisable = () => {
    const mandatoryArr =
      form?.formId?.fields.filter((val) => val.isMandatory) || [];
    if (mandatoryArr.some((ele) => ele.valueInput == "")) return true;
    else if (form?.formId?.fields.some((val) => val.showError)) return true;
    else return false;
  };

  const result = () => {
    let final = [];

    form?.formId?.fields.map((item, index) => {
      switch (String(item.type)) {
        case "ContactNumber":
          final.push(
            <div style={{ marginBottom: "40px" }}>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <TextField
                type="text"
                required
                fullWidth
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
            <div style={{ marginBottom: "40px" }}>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <TextField
                type="text"
                fullWidth
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
            <div style={{ marginTop: "20px" }}>
              <div>
                <label>
                  <strong>{item.key}</strong>
                </label>
                <br />
                <TextField
                  type="text"
                  required
                  fullWidth
                  label={item.key}
                  onChange={(e) => handleChange(e, index, item.key)}
                />
                {item.showError && (
                  <div style={{ color: "red" }}>{item.errorLabel}</div>
                )}
              </div>
              <br />
            </div>
          );
          break;
        case "DateBox":
          final.push(
            <div style={{ marginBottom: "40px" }}>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <TextField
                type="date"
                fullWidth
                value={date}
                onChange={(e) => handleChange(e, index, item.type)}
              />
            </div>
          );
          break;
        case "RadioGroup":
          final.push(
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <div style={{ display: "flex" }}>
                <RadioButton
                  handleChange={(e) => handleOptions(e, index, item.type)}
                  options={item.options}
                  item={item}
                />
              </div>
            </div>
          );
          break;
        case "MultiCheckBox":
          final.push(
            <div>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
            </div>
          );
          item.options.map((multicheckbox, optionIndex) => {
            final.push(
              <div style={{ display: "inline-flex" }}>
                <Checkboxes
                  handleChange={(e) =>
                    handleOptions(e, index, item.type, optionIndex)
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
            <div>
              <br />
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
            </div>
          );
          item.options.map((singlecheckbox, optionIndex) => {
            final.push(
              <div style={{ display: "inline-flex" }}>
                <Checkboxes
                  handleChange={(e) =>
                    handleOptions(e, index, item.type, optionIndex)
                  }
                  title={singlecheckbox.title}
                  value={singlecheckbox.isSelected}
                  checked={singlecheckbox.isSelected}
                />
              </div>
            );
          });
          break;
        case "SelectBox":
          final.push(
            <>
              <label>
                <strong>{item.key}</strong>
              </label>
              <div>
                <Dropdown
                  handleChange={(e) => handleOptions(e, index, item.type)}
                  options={item.options}
                  item={item}
                />
              </div>
            </>
          );

          break;
        default:
          console.log("default");
      }
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
              style={{
                marginLeft: "-420px",
                marginTop: "50px",
                width: "120px",
              }}
              disabled={handleDisable()}
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
