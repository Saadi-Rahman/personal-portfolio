// Contact Form Validation

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const message = document.getElementById("message");

    let valid = true;

    // Clear old warnings

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("addressError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Check Name

    if (name.value.trim() === "") {
      document.getElementById("nameError").textContent =
        "Please enter your name.";
      valid = false;
    }

    // Check Email

    if (email.value.trim() === "") {
      document.getElementById("emailError").textContent =
        "Please enter your email.";
      valid = false;
    }

    // Check Phone

    if (phone.value.trim() === "") {
      document.getElementById("phoneError").textContent =
        "Please enter your phone number.";
      valid = false;
    }

    // Check Address

    if (address.value.trim() === "") {
      document.getElementById("addressError").textContent =
        "Please enter your address.";
      valid = false;
    }

    // Check Message

    if (message.value.trim() === "") {
      document.getElementById("messageError").textContent =
        "Please enter your message.";
      valid = false;
    }

    // Successful submission

    if (valid) {
      alert("Form submitted successfully!");

      form.reset();
    }
  });
}

// Live Date and Time

function updateDateTime() {
  const dateTime = new Date();

  const formattedDateTime = dateTime.toLocaleString();

  document.getElementById("liveDateTime").textContent = formattedDateTime;
}

updateDateTime();

setInterval(updateDateTime, 1000);
