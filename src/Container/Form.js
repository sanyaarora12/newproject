import React, { useState } from "react";
import { Container } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Grid, Input, Paper, TextField } from "@mui/material";
import DatePickers from "../Components/DatePicker/DatePickers";
import RadioButton from "../Components/RadioButton/RadioButton";
import Inputs from "../Components/Input/Inputs";
import Checkboxes from "../Components/Checkbox/Checkboxes";
import Popup from "./Popup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const [formValues, setFormValues] = useState({ name: "", phonenumber: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const [form, setForm] = useState({
    id: 3,
    name: "JIO DIGITAL DEAL DAYS",
    urlName: "jddd",
    desktopImageUrl:
      "https://hdn-1.jiox0.de/jiox0/platform/extensions/screensaver/free/original/AgtYP1jSV-file.jpeg",
    tabletImageUrl:
      "https://yb4ke1guf9g32qn4pnt1k17m-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/deal-sites.jpg",
    mobileImageUrl:
      "https://yb4ke1guf9g32qn4pnt1k17m-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/deal-sites.jpg",
    title: "JIO DIGITAL DEAL DAYS",
    description:
      "UPTO 70% of on digital equipment in jio mart digital applications. Products can be bought in-store via retailer or by our online shopping platform at https://jmd-b2b.jiohostx0.de/.",
    tnc: "tnc",
    tncLink: "terms&Conditions",
    landingUrl: "https://www.landingurl.com",
    position: 1,
    isEnabled: true,
    startDate: "2007-12-03",
    endDate: "2007-12-03",
    createdBy: "jio",
    createdDate: "2022-07-25T13:58:57Z",
    lastModifiedBy: "jio",
    lastModifiedDate: "2022-07-25T13:58:57Z",
    formId: {
      id: 1,
      name: "Promotion Lead Capture",
      title: "Promotion Lead Capture",
      isActive: true,
      multiSubmissionAllowed: true,
      fields: [
        {
          id: 1,
          key: "Name",
          type: "TextBox",
          isMandatory: true,
          form: {
            id: 1,
            name: null,
            title: null,
            isActive: null,
            multiSubmissionAllowed: null,
            fields: null,
          },
          options: [],
        },
        {
          id: 2,
          key: "Gender",
          type: "RadioGroup",
          isMandatory: true,
          form: {
            id: 1,
            name: null,
            title: null,
            isActive: null,
            multiSubmissionAllowed: null,
            fields: null,
          },
          options: [
            {
              id: 1,
              valueStr: "female",
              title: "Female",
              isDefault: false,
            },
            {
              id: 2,
              valueStr: "male",
              title: "Male",
              isDefault: true,
            },
            {
              id: 2,
              valueStr: "other",
              title: "Other",
              isDefault: true,
            },
          ],
        },
        {
          id: 11,
          key: "Enter Contact Number for Registration as Retailer on Jiomart Digital",
          type: "ContactNumber",
          isMandatory: true,
          form: {
            id: 21,
            name: null,
            title: null,
            isActive: null,
            multiSubmissionAllowed: null,
            fields: null,
          },
          options: [],
        },
        {
          id: 12,
          key: "Select Industry of Business Operation",
          type: "MultiCheckBox",
          isMandatory: true,
          form: {
            id: 21,
            name: null,
            title: null,
            isActive: null,
            multiSubmissionAllowed: null,
            fields: null,
          },
          options: [
            {
              id: 6,
              valueStr: "bank",
              title: "Bank",
              isDefault: false,
            },
            {
              id: 7,
              valueStr: "Hospital",
              title: "Hospital",
              isDefault: false,
            },
            {
              id: 8,
              valueStr: "Store",
              title: "Store",
              isDefault: false,
            },
            {
              id: 9,
              valueStr: "School",
              title: "School",
              isDefault: false,
            },
            {
              id: 10,
              valueStr: "College",
              title: "College",
              isDefault: false,
            },
            {
              id: 11,
              valueStr: "Railway station",
              title: "Railway station",
              isDefault: false,
            },
            {
              id: 12,
              valueStr: "Airport",
              title: "Airport",
              isDefault: true,
            },
          ],
        },
        {
          id: 13,
          key: "Select Industry of Business Operation",
          type: "SingleCheckBox",
          isMandatory: true,
          form: {
            id: 21,
            name: null,
            title: null,
            isActive: null,
            multiSubmissionAllowed: null,
            fields: null,
          },
          options: [
            {
              id: 13,
              valueStr: "Airport",
              title: "Airport",
              isDefault: true,
            },
            {
              id: 14,
              valueStr: "School",
              title: "School",
              isDefault: true,
            },
            {
              id: 15,
              valueStr: "Bank",
              title: "Bank",
              isDefault: true,
            },
          ],
        },
      ],
    },
  });

  // const handleChange = (e, n) => {
  //   let updatedValue = { ...formValues };
  //   updatedValue[n] = e.target.value;
  //   setFormValues(updatedValue);
  // };

  const handleChange = (e) => {
    const { n, value } = e.target;
    setFormValues({ ...formValues, [n]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      setButtonPopup(true);
    }
  }, []);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "Phone number is required!";
    } else if (values.phonenumber.length < 10) {
      errors.phonenumber = "phonenumber needs to be 6 characters or more";
    }
    return errors;
  };

  const result = () => {
    let final = [];
    form.formId.fields.map((item) => {
      switch (String(item.type)) {
        case "ContactNumber":
          final.push(
            <div>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <Inputs
                type="text"
                required
                defaultValue={formValues.phonenumber}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{formErrors.phonenumber}</p>
            </div>
          );
          break;
        case "TextBox":
          console.log("a");
          final.push(
            <div>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <Inputs
                type="text"
                required
                name={item.name}
                defaultValue={formValues.name}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{formErrors.name}</p>
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
                  key={item.key}
                  title={item.title}
                  handleChange={handleChange}
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

          item.options.map((multicheckbox) => {
            final.push(
              <div>
                <input type="checkbox" />
                {multicheckbox.title}
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

  const paperStyle = { padding: 20, height: "120vh", width: 600 };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h3 style={{ marginLeft: "-250px" }}>
            <u>Form</u>
          </h3>
          {result()}
        </Grid>
        <br />
        <Button onClick={handleSubmit} style={{ marginLeft: "150px" }}>
          Submit
        </Button>
        {/* <button onClick={() => setButtonPopup(true)}>Click me</button> */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      </Paper>
    </Container>
  );
}
