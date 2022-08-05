import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Inputs() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      
    </Box>
  );
}
// {
  // id: 12,
  // name: "JIO DIGITAL DEAL DAYS JIO DIGITAL DEAL DAYS JIO DIGITAL DEAL DAYS JIO DIGITAL DEAL DAYS JIO DIGITAL DEAL DAYS",
  // urlName: "jddd",
  // desktopImageUrl:
  //   "https://i.pinimg.com/736x/70/11/1e/70111e568787b06c99a215766a9d0cdc.jpg",
  // tabletImageUrl:
  //   "https://i.pinimg.com/736x/70/11/1e/70111e568787b06c99a215766a9d0cdc.jpg",
  // mobileImageUrl:
  //   "https://i.pinimg.com/736x/70/11/1e/70111e568787b06c99a215766a9d0cdc.jpg",
  // title: "JIO DIGITAL DEAL DAYS",
  // description:
  //   "UPTO 90% of on digital equipment in jio mart digital applications. Products can be bought in-store via retailer or by our online shopping platform at https://jmd-b2b.jiohostx0.de/.UPTO 90% of on digital equipment in jio mart digital applications.",
  // tnc: "tnc",
  // tncLink: "terms&Conditions",
  // landingUrl: "https://www.landingurl.com",
  // position: 1,
  // isEnabled: true,
  // startDate: "2007-12-03",
  // endDate: "2007-12-03",
  // createdBy: "jio",
  // createdDate: "2022-07-25T13:58:57Z",
  // lastModifiedBy: "jio",
  // lastModifiedDate: "2022-07-25T13:58:57Z",
  // formId: {
  //   id: 21,
  //   name: "This is Jiomart Digital Deals of the day Offer.This is Jiomart Digital Deals of the day Offer",
  //   title:
  //     "This is Jiomart Digital Deals of the day Offer.his is Jiomart Digital Deals of the day Offer",
  //   isActive: true,
  //   multiSubmissionAllowed: true,
  //   fields: [
  //     {
  //       id: 9,
  //       key: "Visit Date",
  //       type: "DateBox",
  //       isMandatory: true,
  //       form: {
  //         id: 21,
  //         name: null,
  //         title: null,
  //         isActive: null,
  //         multiSubmissionAllowed: null,
  //         fields: null,
  //       },
  //       options: [],
  //     },
  //     {
  //       id: 10,
  //       key: "Enter Email ID for Registration as Retailer on Jiomart Digital",
  //       type: "ContactMail",
  //       isMandatory: false,
  //       form: {
  //         id: 21,
  //         name: null,
  //         title: null,
  //         isActive: null,
  //         multiSubmissionAllowed: null,
  //         fields: null,
  //       },
  //       options: [],
  //     },
  //     {
  //       id: 11,
  //       key: "Enter Contact Number for Registration as Retailer on Jiomart Digital",
  //       type: "ContactNumber",
  //       isMandatory: true,
  //       form: {
  //         id: 21,
  //         name: null,
  //         title: null,
  //         isActive: null,
  //         multiSubmissionAllowed: null,
  //         fields: null,
  //       },
  //       options: [],
  //     },
  //     {
  //       id: 12,
  //       key: "Select Industry of Business Operation",
  //       type: "MultiCheckBox",
  //       isMandatory: true,
  //       form: {
  //         id: 21,
  //         name: null,
  //         title: null,
  //         isActive: null,
  //         multiSubmissionAllowed: null,
  //         fields: null,
  //       },
  //       options: [
  //         {
  //           id: 6,
  //           valueStr: "bank",
  //           title: "Bank",
  //           isDefault: false,
  //         },
  //         {
  //           id: 7,
  //           valueStr: "Hospital",
  //           title: "Hospital",
  //           isDefault: false,
  //         },
  //         {
  //           id: 8,
  //           valueStr: "Store",
  //           title: "Store",
  //           isDefault: false,
  //         },
  //         {
  //           id: 9,
  //           valueStr: "School",
  //           title: "School",
  //           isDefault: false,
  //         },
  //         {
  //           id: 10,
  //           valueStr: "College",
  //           title: "College",
  //           isDefault: false,
  //         },
  //         {
  //           id: 11,
  //           valueStr: "Railway station",
  //           title: "Railway station",
  //           isDefault: false,
  //         },
  //         {
  //           id: 12,
  //           valueStr: "Airport",
  //           title: "Airport",
  //           isDefault: true,
  //         },
  //       ],
  //     },
  //     {
  //       id: 13,
  //       key: "Select Industry of Business Operation",
  //       type: "SingleCheckBox",
  //       isMandatory: true,
  //       form: {
  //         id: 21,
  //         name: null,
  //         title: null,
  //         isActive: null,
  //         multiSubmissionAllowed: null,
  //         fields: null,
  //       },
  //       options: [
  //         {
  //           id: 13,
  //           valueStr: "Airport",
  //           title: "Airport",
  //           isDefault: true,
  //         },
  //         {
  //           id: 14,
  //           valueStr: "School",
  //           title: "School",
  //           isDefault: true,
  //         },
  //         {
  //           id: 15,
  //           valueStr: "Bank",
  //           title: "Bank",
  //           isDefault: true,
  //         },
  //       ],
  //     },
  //     {
  //       id: 14,
  //       key: "Select Gender of Business Operation",
  //       type: "RadioGroup",
  //       isMandatory: true,
  //       form: {
  //         id: 21,
  //         name: null,
  //         title: null,
  //         isActive: null,
  //         multiSubmissionAllowed: null,
  //         fields: null,
  //       },
  //       options: [
  //         {
  //           id: 17,
  //           valueStr: "Male",
  //           title: "Male",
  //           isDefault: true,
  //         },
  //         {
  //           id: 18,
  //           valueStr: "Others",
  //           title: "Others",
  //           isDefault: true,
  //         },
  //         {
  //           id: 16,
  //           valueStr: "Female",
  //           title: "Female",
  //           isDefault: true,
  //         },
  //       ],
  //     },
  //     {
  //       id: 15,
  //       key: "Select Gender of Business Operation",
  //       type: "SelectBox",
  //       isMandatory: true,
  //       form: {
  //         id: 21,
  //         name: null,
  //         title: null,
  //         isActive: null,
  //         multiSubmissionAllowed: null,
  //         fields: null,
  //       },
  //       options: [
  //         {
  //           id: 19,
  //           valueStr: "Others",
  //           title: "Others",
  //           isDefault: true,
  //         },
  //         {
  //           id: 20,
  //           valueStr: "Others 1 ",
  //           title: "Others 1",
  //           isDefault: true,
  //         },
  //       ],
  //     },
  //     {
  //       id: 16,
  //       key: "",
  //       type: "SelectBox",
  //       isMandatory: true,
  //       form: {
  //         id: 21,
  //         name: null,
  //         title: null,
  //         isActive: null,
  //         multiSubmissionAllowed: null,
  //         fields: null,
  //       },
  //       options: [],
  //     },
  //   ],
  // },

      //   if (item.type === "TextBox") {
    //     forms.push(
    //       <div>
    //         <label>
    //           <strong>{item.key}</strong>
    //         </label>
    //         <br />
    //         <TextField
    //           type="text"
    //           name={item.name}
    //           onChange={(e) => handleChange(e, item.key)}
    //         />
    //       </div>
          
    //     );
       
    //   }  else if (item.type === "RadioGroup") {
    //     item.options.map((radioitem) => {
    //       forms.push(
    //         <label>
    //           <input type="radio" />
    //           {radioitem.title}
    //         </label>
    //       );
    //     });
    //   } 
    // });

    // return forms;