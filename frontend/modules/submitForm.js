function submitForm() {
  // Disable the submit button to prevent multiple submissions

  console.log("submitForm function called");

  document.getElementById("submitButton").disabled = true;

  // Get form values
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let mobileNumber = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  let selectedCourse = document.getElementById("selectedCourse").value;
  let messageBox = document.getElementById("messageBox").value;

  // Perform basic form validation
  if (!fullName || !email || !mobileNumber || !address) {
    alert("Please fill in all required fields.");
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
  console.log("formData:::", formData);
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
        document.getElementById("successMessage").style.display = "block";

        // Reset form fields
        document.getElementById("queryForm").reset();
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
      document.getElementById("submitButton").disabled = false;
    });
}

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (event) => {
  submitForm();
  event.preventDefault();
});
