import React, { useState } from "react";
import { Container } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Input, Paper,TextField } from "@mui/material";
import DatePickers from "./Components/DatePicker/DatePickers";
import { SixteenMp } from "@mui/icons-material";
import RadioButton from "./Components/RadioButton/RadioButton";
import Inputs from "./Components/Input/Inputs";

export default function Form() {
  const [formValues, setFormValues] = useState({});
  const [form, setForm] = useState(
    {
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
            ],
          },
        ],
      },
    },
   
  );

  const handleChange = (e, n) => {
    let updatedValue = { ...formValues };
    updatedValue[n] = e.target.value;
    setFormValues(updatedValue);
  };

  const result = () => {
    let final = [];
    form.formId.fields.map((item) => {
      console.log(item.type)
      console.log(item.type)
      switch(String(item.type)){
        case "TextBox" :
          console.log("a")
            final.push(
            <div>
              <label>
                <strong>{item.key}</strong>
              </label>
              <br />
              <TextField
                type="text"
                name={item.name}
                onChange={(e) => handleChange(e, item.key)}
              />
              
            </div>
          );
          break;
          case "RadioGroup":
              item.options.map((radioitem) => {
              final.push(
                <label>
                  <input type="radio"/>
                  {radioitem.title}
                </label>
              );
            });
            break;
            case "MultiCheckBox":
              
              item.options.map((multicheck) => {
                final.push(
                  <label>
                    <input type="radio"/>
                    {multicheck.title}
                  </label>
                );
              });
              break;
            default: 
            console.log("b")
          } 
          console.log(final)
          
          
      })
      return final;
  };


  const paperStyle = { padding: 20, height: "90vh", width: 400 };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <form>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h3 style={{ marginLeft: "-250px" }}>
              <u>Form</u>
            </h3>
            {result()}
          </Grid>
        </Paper>
      </form>
    </Container>
  );
}
