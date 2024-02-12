function submitForm() {
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
        const successMessage = document.getElementById("successMessage");
        if (successMessage) {
          successMessage.style.display = "block";
        }
        // Reset form fields
        document.getElementById("queryForm").reset();
      } else {
        // Display specific error message received from the backend
        return response.json();
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

const queryForm = document.getElementById("queryForm");

queryForm.addEventListener("submit", (event) => {
  submitForm();
  event.preventDefault();
});
