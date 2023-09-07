$(document).ready(function () {
    // Check if dark mode is stored in localStorage
    const darkModeEnabled = localStorage.getItem("darkModeEnabled");

    // Apply dark mode if enabled
    if (darkModeEnabled === "true") {
        $("body").addClass("dark-mode");
    }

    // Dark mode toggle button
    $("#dark-mode-toggle").click(function () {
        const body = $("body");
        body.toggleClass("dark-mode");

        // Store the user's preference in localStorage
        if (body.hasClass("dark-mode")) {
            localStorage.setItem("darkModeEnabled", "true");
        } else {
            localStorage.setItem("darkModeEnabled", "false");
        }
    });
});
