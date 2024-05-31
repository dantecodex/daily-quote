document.addEventListener("DOMContentLoaded", () => {
    const dailyQuoteSwitch = document.getElementById("daily-quote");
    const timePicker = document.getElementById("time-picker");
    const profileMenuButton = document.getElementById("profile-menu-button");
    const profileMenu = document.getElementById("profile-menu");
    const formEle = document.getElementById("user-setting");


    // dailyQuoteSwitch.addEventListener("click", () => {
    //     const isChecked = dailyQuoteSwitch.getAttribute("aria-checked") === "true";
    //     console.log(isChecked);

    //     dailyQuoteSwitch.setAttribute("aria-checked", !isChecked);
    //     dailyQuoteSwitch.querySelector(".switch-thumb").style.transform = isChecked ? "translateX(0)" : "translateX(20px)";
    //     dailyQuoteSwitch.style.backgroundColor = isChecked ? "#e2e8f0" : "#18181b";
    // });

    // Initialize Flatpickr for time selection
    const fp = flatpickr(timePicker, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        defaultHour: 6,
        defaultMinute: 0,
        time_24hr: false
    });

    // Toggle profile menu
    profileMenuButton.addEventListener("click", () => {
        const isExpanded = profileMenuButton.getAttribute("aria-expanded") === "true";
        profileMenuButton.setAttribute("aria-expanded", !isExpanded);
        profileMenu.style.display = isExpanded ? "none" : "block";
    });

    // Close the profile menu when clicking outside of it
    document.addEventListener("click", (event) => {
        if (!profileMenu.contains(event.target) && !profileMenuButton.contains(event.target)) {
            profileMenu.style.display = "none";
            profileMenuButton.setAttribute("aria-expanded", "false");
        }
    });

    // formEle.onsubmit = async (event) => {
    //     event.preventDefault(); // Prevent the default form submission behavior

    //     let formData = new FormData(formEle);
    //     if (!formData.has("quote")) {
    //         formData.append("quote", false)
    //     }

    //     for (let pair of formData.entries()) {
    //         if (pair.includes("time")) {
    //             if (pair[1] == '') {
    //                 formData.set("time", "6:00: AM")
    //             }
    //         }
    //     }

    //     fetch('/api/user/settings', {
    //         method: "POST",
    //         body: new URLSearchParams(formData)
    //     }).then(response => response.json())
    //         .then(data => console.log("Success", data))
    //         .catch(err => console.error("Error", err))
    // };

    formEle.onsubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        let formData = new FormData(formEle);

        if (!formData.has("quote")) {
            formData.append("quote", false);
        }

        if (!formData.has("time") || formData.get("time") === '') {
            formData.set("time", "6:00 AM");
        }

        // for (let pair of formData.entries()) {
        //     console.log(pair[0] + ':' + pair[1]);
        // }


        fetch('/api/user/settings', {
            method: "POST",
            body: new URLSearchParams(formData)
        }).then(response => response.json())
            .then(data => {
                if (data) {
                    // window.alert("User Details have been updated")
                    const modal = new bootstrap.Modal(document.getElementById('submitModel'));
                    modal.show();
                }
                console.log(data);
            })
            .catch(err => console.error("Error", err));
    };


});
