// =========================================================
// GiiT COMPUTER LTD - JAVASCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

  // Get the form
  const form = document.querySelector("form");

  // Get important form elements
  const rating = document.getElementById("rating");
  const week = document.getElementById("week");
  const feedback = document.getElementById("feedback");
  const password = document.getElementById("portal-password");

  // =======================================================
  // 1. TRAINING RATING DISPLAY
  // =======================================================

  const ratingDisplay = document.createElement("span");

  ratingDisplay.style.fontWeight = "bold";
  ratingDisplay.style.marginLeft = "10px";
  ratingDisplay.textContent = rating.value + "/10";

  rating.parentNode.appendChild(ratingDisplay);

  rating.addEventListener("input", function () {
    ratingDisplay.textContent = rating.value + "/10";
  });


  // =======================================================
  // 2. PASSWORD VALIDATION
  // =======================================================

  password.addEventListener("input", function () {

    if (password.value.length === 0) {
      password.style.borderColor = "";
    }

    else if (password.value.length < 8) {
      password.style.borderColor = "red";
    }

    else {
      password.style.borderColor = "green";
    }
  });


  // =======================================================
  // 3. WEEK NUMBER VALIDATION
  // =======================================================

  week.addEventListener("input", function () {

    if (week.value < 1 || week.value > 24) {
      week.setCustomValidity(
        "SIWES week must be between 1 and 24."
      );
    } else {
      week.setCustomValidity("");
    }
  });


  // =======================================================
  // 4. CHARACTER COUNTER FOR FEEDBACK
  // =======================================================

  const counter = document.createElement("small");

  counter.style.display = "block";
  counter.style.marginTop = "5px";
  counter.textContent = "0 characters";

  feedback.parentNode.insertBefore(
    counter,
    feedback.nextSibling
  );

  feedback.addEventListener("input", function () {
    counter.textContent =
      feedback.value.length + " characters";
  });


  // =======================================================
  // 5. FORM SUBMISSION
  // =======================================================

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Check password length
    if (
      password.value.length > 0 &&
      password.value.length < 8
    ) {
      alert("Password must contain at least 8 characters.");
      password.focus();
      return;
    }

    // Check institution
    const institution = document.querySelector(
      'input[name="institution"]:checked'
    );

    if (!institution) {
      alert("Please select your institution.");
      return;
    }

    // Check training track
    const track = document.getElementById("track");

    if (track.value === "") {
      alert("Please select your training track.");
      track.focus();
      return;
    }

    // Success message
    alert(
      "Thank you! Your SIWES feedback has been submitted successfully."
    );

    // Reset the form
    form.reset();

    // Reset rating display
    ratingDisplay.textContent = rating.value + "/10";

    // Reset character counter
    counter.textContent = "0 characters";

    // Reset password border
    password.style.borderColor = "";
  });


  // =======================================================
  // 6. CONFIRM BEFORE CLEARING FORM
  // =======================================================

  const resetButton = form.querySelector(
    'input[type="reset"]'
  );

  resetButton.addEventListener("click", function (event) {

    const confirmed = confirm(
      "Are you sure you want to clear the entire form?"
    );

    if (!confirmed) {
      event.preventDefault();
    }
  });


  // =======================================================
  // 7. CURRENT YEAR
  // =======================================================

  console.log(
    "GiiT Computer LTD website loaded successfully."
  );

});