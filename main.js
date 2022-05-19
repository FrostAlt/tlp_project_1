
(function() {
    console.log("Ready")
    document.querySelector("#EmailButtonSend").addEventListener("click", () => {
        let success = true;
        let alertSent = document.querySelector("#EmailAlertSent");
        alertSent.style.display = "none";

        let nameEl = document.querySelector("#EmailNameInput");
        let alertName = document.querySelector("#EmailAlertName");
        let name = nameEl.value.trim();
        if (name == "") {
            alertName.style.display = "block";
            success = false;
        } else {
            alertName.style.display = "none";
        }

        let bodyEl = document.querySelector("#EmailBodyInput");
        let alertBody = document.querySelector("#EmailAlertBody");
        let body = bodyEl.value.trim();
        if (body == "") {
            alertBody.style.display = "block";
            success = false;
        } else {
            alertBody.style.display = "none";
        }

        if (success) {
            alertSent.innerHTML = `Thank you ${name}!`;
            alertSent.style.display = "block";
        }

    });
})();