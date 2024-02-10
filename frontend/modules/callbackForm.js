function submitCallbackForm() {
  // Disable the submit button to prevent multiple submissions

  document.getElementById("callback_submitButton").disabled = true;

  // Get form values
  let fullName = document.getElementById("callback-fullName").value;
  let email = document.getElementById("callback-email").value;
  let mobileNumber = document.getElementById("callback-number").value;
  let address = document.getElementById("callback-address").value;
  let selectedCourse = document.getElementById("callback-selectedCourse").value;
  let messageBox = document.getElementById("callback-messageBox").value;

  // Perform basic form validation
  if (!fullName || !email || !mobileNumber || !address) {
    alert("Please fill in all required fields.");
    // Re-enable the submit button
    document.getElementById("callback_submitButton").disabled = false;
    return;
  }

  // Assume you have a backend API endpoint for form submission
  // You can replace this with your actual backend endpoint
  const endpoint = "http://localhost:5000/api/submit-form";

  // Create a FormData object to send data in the POST request
  const formData = {
    fullName: fullName,
    email: email,
    mobileNumber: mobileNumber,
    address: address,
    selectedCourse: selectedCourse,
    messageBox: messageBox,
  };
  // Send a POST request to the backend
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        // Display success message
        document.getElementById("callback_successMessage").style.display =
          "block";

        // Reset form fields
        document.getElementById("callback_queryForm").reset();
      } else {
        // Display error message if submission fails
        alert("Failed to submit the query. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again.");
    })
    .finally(() => {
      // Re-enable the submit button after the request is completed
      document.getElementById("callback_submitButton").disabled = false;
    });
}

const callback_submitButton = document.getElementById("callback_submitButton");
// callback_submitButton.addEventListener("click", () => {
//   submitForm();
// });
callback_submitButton.addEventListener("click", (event) => {
  submitCallbackForm();
  event.preventDefault();
});
