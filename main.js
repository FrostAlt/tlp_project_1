
(function() {
    console.log("Ready")
    document.querySelector("#EmailButtonSend").addEventListener("click", () => {
        let success = true;
        // Clear success alert ahead of time.
        let alertSent = document.querySelector("#EmailAlertSent");
        alertSent.style.display = "none";

        let nameEl = document.querySelector("#EmailNameInput");
        let alertName = document.querySelector("#EmailAlertName");
        let name = nameEl.value.trim();
        // Check if name is not blank and alert accordingly.
        if (name == "") {
            alertName.style.display = "block";
            success = false;
        } else {
            alertName.style.display = "none";
        }

        let bodyEl = document.querySelector("#EmailBodyInput");
        let alertBody = document.querySelector("#EmailAlertBody");
        let body = bodyEl.value.trim();
        // Check if body is not blank and alert accordingly.
        if (body == "") {
            alertBody.style.display = "block";
            success = false;
        } else {
            alertBody.style.display = "none";
        }

        if (success) {
            // Tailor success message to user's name.
            alertSent.innerHTML = `Thank you ${name}!`;
            alertSent.style.display = "block";
        }

    });
})();