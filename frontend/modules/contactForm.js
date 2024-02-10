function submitContactForm() {
  // Disable the submit button to prevent multiple submissions

  document.getElementById("contact_submitForm").disabled = true;

  // Get form values
  let fullName = document.getElementById("contact-fullName").value;
  let email = document.getElementById("contact-email").value;
  let mobileNumber = document.getElementById("contact-number").value;
  let address = document.getElementById("contact-address").value;
  let selectedCourse = document.getElementById("contact-selectedCourse").value;
  let messageBox = document.getElementById("contact-messageBox").value;

  // Perform basic form validation
  if (!fullName || !email || !mobileNumber || !address) {
    alert("Please fill in all required fields.");
    // Re-enable the submit button
    document.getElementById("contact_submitForm").disabled = false;
    return;
  }
  // Check if mobileNumber is exactly 10 digits
  if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
    alert("Please enter a valid 10-digit mobile number.");
    // Re-enable the submit button
    document.getElementById("submitButton").disabled = false;
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
        document.getElementById("contact_successMessage").style.display =
          "block";

        // Reset form fields
        document.getElementById("contact_queryForm").reset();
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
      document.getElementById("contact_submitForm").disabled = false;
    });
}

const contact_submitForm = document.getElementById("contact_submitForm");
// contact_submitForm.addEventListener("click", () => {
//   submitForm();
// });
contact_submitForm.addEventListener("click", (event) => {
  submitContactForm();
  event.preventDefault();
});
