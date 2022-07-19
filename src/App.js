import "./App.css";
import React, { useState } from "react";

function App() {
  const [amount, setamount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "",
        key_secret: "",
        amount: amount * 100,
        currency: "INR",
        name: "Areeb Faridy",
        description: "Intership for Sparks Foundation",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Areeb Faridy",
          email: "areeb.faridy@speridian.com",
          contact: "9999094973",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <div className="App">
      <h2>Razorpay Payment Integration</h2>
      <br />
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
