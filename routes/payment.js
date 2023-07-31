const express = require("express");
const router = express.Router();
const fetch = require("isomorphic-fetch");

// Define your payment API endpoint
router.post("/performPayment", async function (req, res, next) {
  try {
    const { amount, id } = req.body;

    // Modify the options object as needed for your API call
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        method: "JustPay",
        apiKey: "0D3AE552E47642B48952BF07A1EE53C8",
        apiSecret: "1EBEB36D3C7C41EC8534A8D09DA9292F",
      }),
    };

    const response = await fetch("https://payze.io/api/v1", options);
    const data = await response.json();

    // Assuming the response contains the transactionUrl
    const transactionUrl = data.transactionUrl;

    // You can add any additional processing if needed

    // Send the transactionUrl back to the client
    res.json({ transactionUrl });
  } catch (err) {
    console.error("Error while processing payment", err.message);
    res
      .status(500)
      .json({ message: "An error occurred during payment processing." });
  }
});

module.exports = router;
