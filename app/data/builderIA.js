let addOnObj = {
    glowBorder: {
        name: "Glow Border",
        variants: [{
            id: "gid://shopify/ProductVariant/39476152970302",
            value: 1,
        },
        ],
    }
};




// // data
// let type = {
//     // sample 
//     "id panel": {
//         name: "ID Panel",
//         basePrice: 23,
//         config: {
//             "sizes": [
//                 {
//                     size: '3” x 2”',
//                     text: {
//                         primary: {
//                             maxLength: 13,
//                             lines: 1,
//                             placeholder: 'Name',
//                         },
//                         secondary: {
//                             maxLength: 12,
//                             lines: 2,
//                             placeholder: 'APOS\nNKDA',
//                         },
//                     },
//                     upsells: {
//                         size: 0,
//                         hiVis: 3,
//                         glowInTheDark: 0,
//                         badge: 25,
//                     },
//                     hasFlag: true,
//                 },
//                 {
//                     size: '3.5” x 2”',
//                     maxLength: 13,
//                     lines: 1,
//                     placeholder: 'Name',
//                     maxLength2: 12,
//                     lines2: 2,
//                     placeholder2: 'APOS\nNKDA',
//                     hasFlag: true,
//                     sizeUpsell: 1,
//                     glowInTheDark: 0,
//                     hiVis: 3,
//                     badge: 25,
//                 },
//                 {
//                     size: '4” x 2”',
//                     maxLength: 13,
//                     lines: 1,
//                     placeholder: 'Name',
//                     maxLength2: 12,
//                     lines2: 2,
//                     placeholder2: 'APOS\nNKDA',
//                     hasFlag: true,
//                     sizeUpsell: 0,
//                     glowInTheDark: 5,
//                 },
//                 {
//                     size: '5” x 3”',
//                     maxLength: 13,
//                     lines: 1,
//                     placeholder: 'Name',
//                     maxLength2: 12,
//                     lines2: 2,
//                     placeholder2: 'APOS\nNKDA',
//                     hasFlag: true,
//                     sizeUpsell: 8,
//                     glowInTheDark: 10,
//                     hiVis: 5,
//                     badge: 25,
//                 },
//                 {
//                     size: '6” x 2”',
//                     maxLength: 13,
//                     lines: 1,
//                     placeholder: 'Name',
//                     maxLength2: 12,
//                     lines2: 2,
//                     placeholder2: 'APOS\nNKDA',
//                     hasFlag: true,
//                     sizeUpsell: 3,
//                     hiVis: 5,
//                     glowInTheDark: 10,
//                     badge: 25,
//                 },
//                 {
//                     size: '6” x 3”',
//                     maxLength: 13,
//                     lines: 1,
//                     placeholder: 'Your Name',
//                     maxLength2: 12,
//                     lines2: 2,
//                     placeholder2: 'APOS\nNKDA',
//                     hasFlag: true,
//                     sizeUpsell: 8,
//                     hiVis: 5,
//                     glowInTheDark: 10,
//                     badge: 25,
//                     tRexArms: true,
//                     policeID: 19,
//                 }
//             ],
//             extra: [
//                 {
//                     name: "DeadBug DV2",
//                     size: '6” x 4”',
//                     maxLength: 13,
//                     lines: 1,
//                     placeholder: 'Name',
//                     maxLength2: 12,
//                     lines2: 2,
//                     placeholder2: 'APOS\nNKDA',
//                     hasFlag: true,
//                     sizeUpsell: 8,
//                     hiVis: 5,
//                     glowInTheDark: 10,
//                     badge: 25,
//                     tRexArms: true,
//                     policeID: 19,
//                 }
//             ]
//         },
//         form: {
//             intro: "Our ID panels come in various sizes. You will be able to custom your ID, blood type or allergy, font & background colors. You will be able to choose from a wide variety of flags or upload one yourself. Get through all the steps and see your patch come to life.",
//             btnText: "Get Started",
//             steps: [
//                 {
//                     name: "Patch Size",
//                     input: [
//                         {
//                             id: 'size',
//                             label: 'Size',
//                             type: 'select',
//                             placeholder: '3" x 2"',
//                         },
//                     ],
//                 },
//                 {
//                     name: "Text",
//                     input: [
//                         {
//                             id: 'text',
//                             label: 'Text',
//                             type: 'input',
//                             placeholder: 'Name',
//                         },
//                         {
//                             id: 'bloodType',
//                             label: 'Blood Type & Allergies',
//                             type: 'textarea',
//                             placeholder: 'APOS\nNKDA',
//                         },
//                     ],
//                 },
//                 {
//                     name: "Font & Background Colors",
//                     input: [
//                         {
//                             id: 'textColor',
//                             label: 'Text Color',
//                             type: 'advancedSelect',
//                             placeholder: 'Flat Spice Brown',
//                         },
//                         {
//                             id: 'backgroundColor',
//                             label: 'Background Color',
//                             type: 'advancedSelect',
//                             placeholder: 'Multicam Alpine',
//                         },
//                     ],
//                 },
//                 {
//                     name: "Flag",
//                     input: [
//                         // {
//                         //   flag: 'flagType',
//                         //   label: 'Flag Type',
//                         //   type: 'select',
//                         //   placeholder: 'Lazer Cut Flag',
//                         // },
//                         {
//                             id: 'flag',
//                             label: 'Flag',
//                             type: 'advancedSelect',
//                             placeholder: 'USA',
//                         },
//                         {
//                             id: 'flagReverse',
//                             label: 'Do you want to reverse the flag?',
//                             type: 'checkmark',
//                             placeholder: '',
//                         },
//                     ],
//                 },
//                 {
//                     name: "Almost There",
//                     input: [
//                         {
//                             id: 'glowInTheDark',
//                             label: 'Add a glow in the dark border? +$10 USD',
//                             type: 'checkmark',
//                             placeholder: '',
//                         },
//                         {
//                             id: "leadTime",
//                             label: 'I Agree to the Lead Time',
//                             type: 'checkmark',
//                             placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
//                         },
//                     ],
//                 },
//             ]
//         },
//     },
//     // skeleton
//     typeName: {
//         // A string that represents the name of the object
//         name: "",
//         // A number that represents the base price of the object
//         base: 20,
//         // An object that contains configuration options for the object
//         config: {
//             "sizes": [
//                 {
//                     size: '',
//                     primary: {
//                         maxLength: 13,
//                         lines: 1,
//                         placeholder: '',
//                     },
//                     secondary: {
//                         maxLength: 12,
//                         lines: 2,
//                         placeholder: '',
//                     },
//                     upsell: {
//                         size: 0,
//                         hiVis: 3,
//                         glowInTheDark: 0,
//                         badge: 25,
//                     },
//                     hasFlag: true,
//                 },
//             ],
//         },
//         // An object that contains form options for the object
//         form: {

//         },
//     },
// };

// for (let key in type) {
//     if (type.hasOwnProperty(key)) {
//         let obj = type[key];
//         obj.calculatePrice = function (markType, upsells) {
//             // code for the method goes here
//             let price = this.basePrice;
//             let sizeOption = this.sizeOptions.find(option => option.size === this.selectedSize);
//         };
//     }
// }


// console.log(type);