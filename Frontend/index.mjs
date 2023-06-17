"use strict";
import "dotenv/config";
import asyncHandler from "express-async-handler";
import sendEmailAsync from "./components/nodemailer.js";
import { htmlTop, htmlBottom } from "./components/constants.js";
import { products } from "./products.js";
import express, { response } from "express";
const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  const htmlMessage = `${htmlTop}
    <div id=response> <h1>Hello Brenden</h1>
    <p>I would like to talk with you about ${req.body.subject}. <br><br> ${req.body.message} <br><br>Job Offer: ${req.body.joboffer} at a salary of ${req.body.payrange}
    <p> Sincerly, <br> ${req.body.name} <br> ${req.body.email}<p> </div>
    ${htmlBottom}`;
  const sender = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  sendEmailAsync(sender, subject, message, htmlMessage);
  res.send(
    `${htmlTop}<div id=sentMessage> <p>Your message has been sent</p> <div>${htmlBottom}`
  );
});

app.post("/order", (req, res) => {
  const choice = products.find((element) => element.company == req.body.choice);
  const cost = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(choice.price * req.body.quantity);
  const htmlMessage = `
    <section id=response> <h1>Hello Brenden</h1>
    <p>An order was made<br><br>Details: <br> name: ${req.body.name} <br> email: ${req.body.email} <br> address: ${req.body.address} <br> delivery instructions: ${req.body.deliveryinstructions} <br> company: ${choice.company} <br> quantity: ${req.body.quantity} <br> cost: ${cost}<p> </section>
    `;
  const sender = req.body.email;
  const order = `Details: \n name: ${req.body.name} \n email: ${req.body.email} \n address: ${req.body.address} \n delivery instructiions: ${req.body.deliveryinstructions} \n company: ${choice} \n quantity: ${req.body.quantity} \n cost: ${cost}`;
  sendEmailAsync(sender, "order", order, htmlMessage);
  res.send(
    `${htmlTop}<div id=sentMessage> <p>Your order has been sent</p> <br> <p>Details: <br> name: ${req.body.name} <br> email: ${req.body.email} <br> address: ${req.body.address} <br> delivery instructions: ${req.body.deliveryinstructions} <br> company: ${choice.company} <br> quantity: ${req.body.quantity} <br> cost: ${cost}</p><div>${htmlBottom}`
  );
});

app.get(
  "/random-person",
  asyncHandler(async (req, res, next) => {
    const URL = await fetch("https://randomuser.me/api/");

    const data = await URL.json();
    res.send(data);
  })
);

app.use(express.static("public"));

app.use(function (error, req, res, next) {
  res.status(500).render(htmlTop + "<p>An Error Occured</p>" + htmlBottom);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
