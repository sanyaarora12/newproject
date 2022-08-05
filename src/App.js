import React, { useState } from "react";
import { Container } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Grid, Input, Paper, TextField } from "@mui/material";
import DatePickers from "./Components/DatePicker/DatePickers";
import { SixteenMp } from "@mui/icons-material";
import RadioButton from "./Components/RadioButton/RadioButton";
import Inputs from "./Components/Input/Inputs";

export default function Form() {
  const [formValues, setFormValues] = useState({});
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

  const handleChange = (e, n) => {
    let updatedValue = { ...formValues };
    updatedValue[n] = e.target.value;
    setFormValues(updatedValue);
  };

  const result = () => {
    let final = [];
    form.formId.fields.map((item) => {
      console.log(item.type);
      switch (String(item.type)) {
        case "TextBox":
          console.log("a");
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
          // case "ContactNumber":
          //   item.map((contact)=>{
          //     final.push(
          //       <label>{contact.key}</label>
          //     )
          //   })
          //   break;
        case "RadioGroup":
          item.options.map((radioitem) => {
            final.push(
              <div>
                {/* <label>
                <strong>{item.key}</strong>
              </label> */}
                <input type="radio" />
                {radioitem.title}
              </div>
            );
          });
          break;
        // case "SingleCheckBox":
        //   item.options.map((singlecheck) => {
        //     final.push(
        //       <label>
        //         <input type="checkbox" />
        //         {singlecheck.title}
        //       </label>
        //     );
        //   });
         // break;
          case "MultiCheckBox":
            item.options.map((multicheckbox)=>{
              final.push(
                <label>
                  <input type="checkbox"/>
                  {multicheckbox.title}
                </label>
              )
            })
            break;
        default:
          console.log("b");
      }
      console.log(final);
    });
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
          <br />
          <Button style={{marginLeft:"150px"}}>Submit</Button>
        </Paper>
      </form>
    </Container>
  );
}
