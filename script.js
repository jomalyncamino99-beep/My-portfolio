(function () {
  const sendBtn = document.getElementById("sendMsgBtn");
  const nameInput = document.getElementById("nameField");
  const emailInput = document.getElementById("emailField");
  const msgInput = document.getElementById("msgField");

  function handleFormMessage() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = msgInput.value.trim();

    if (!name && !email && !message) {
      alert(
        "👋 Hi! Please fill at least one field — I'd love to hear from you!",
      );
    } else {
      let summary = "📬 Thanks for reaching out!\n\n";
      if (name) summary += `Name: ${name}\n`;
      if (email) summary += `Email: ${email}\n`;
      if (message) summary += `Message: ${message}\n`;
      summary += "\n✅ Jomalyn will get back to you soon.";
      alert(summary);
    }
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", handleFormMessage);
  }
  // prevent any accidental form reload
  const form = document.getElementById("simpleContactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleFormMessage();
    });
  }
})();
