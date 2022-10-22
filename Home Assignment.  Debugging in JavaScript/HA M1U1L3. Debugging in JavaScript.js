/*
  https://drive.google.com/file/d/1fQ1Lzz5KGmoJ15P1_1Y1iy-MVZBCm1NB/view

  var invoiceDocument = [
  {
  InvoiceID: 001,
  DocumentName: "Invoice 001",
  DocumentType: "invoice",
  Name: "Fly High Business Inc.",
  Product: [
    {
      Description: `24" Monitor`,
      QTY: 5,
      Price: 10000,
    },
    {
      Description: `Keyboard and Mouse set`,
      QTY: 4,
      Price: 1500,
    },
  ],
},
{
  InvoiceID: 002,
  DocumentName: "Invoice 002",
  DocumentType: "invoice",
  Name: "Bracket Logic Appliances Inc.",
  Product: [
    {
      Description: `Projector`,
      QTY: 2,
      Price: 15000,
    },
    {
      Description: `Speakerphone`,
      qty: 1,
      Price: 5500,
    },
    {
      Description: `Aircon`,
      QTY: 3,
      Price: 25200,
    },
},
];

function totalPerInvoice() {
let total = 0;
invoiceDocuments.forEach((data) => {
  console.log(`Invoice Name: ${data.DocumentName}`);
  let ProductDescription = data.prod.map((prod) => {
    total += prod.price;
  });

  console.log(`Products:`);
  console.log(`${ProductDescription.join("")} `);
  console.log(`-------------`);
  console.log(`Total: ₱${total} \n`);
});
}

totalPerInvoice();
*/

//DEBUG LOG

var invoiceDocument = [
  {
    InvoiceID: 001,
    DocumentName: "Invoice 001",
    DocumentType: "invoice",
    Name: "Fly High Business Inc.",
    Product: [
      {
        Description: `24" Monitor`,
        qty: 5, // this was QTY which violate naming rule and convention
        Price: 10000,
      },
      {
        Description: `Keyboard and Mouse set`,
        qty: 4,
        Price: 1500,
      },
    ],
  },
  {
    InvoiceID: 002,
    DocumentName: "Invoice 002",
    DocumentType: "invoice",
    Name: "Bracket Logic Appliances Inc.",
    Product: [
      {
        Description: `Projector`,
        qty: 2,
        Price: 15000,
      },
      {
        Description: `Speakerphone`,
        qty: 1,
        Price: 5500,
      },
      {
        Description: `Aircon`,
        qty: 3,
        Price: 25200,
      },
    ],
  },
];

function totalPerInvoice() {
  let total = 0;
  invoiceDocument.forEach((data) => {
    // this was invoiceDocuments.forEach((data) => {
    console.log(`Invoice Name: ${data.DocumentName}`);
    let ProductDescription = data.Product.map((prod) => {
      //this was let ProductDescription = data.prod.map((prod) => {
      total += prod.Price * prod.qty;
      //this was only total += prod.price;
      return prod.Description + " - P" + prod.Price + " x " + prod.qty + "\n";
    });
    console.log(`Products:`);
    console.log(`${ProductDescription.join("")}------------- `); /*
    this was 
    console.log(`${ProductDescription.join("")} `);
    console.log(`-------------`);
    */

    console.log(`Total: ₱${total} \n`);
  });
}

totalPerInvoice();
