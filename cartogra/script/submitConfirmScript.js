// Ensure the travel information 
//collection page loads correctly after a manual browser refresh
window.addEventListener("load", function() {
    // Detect page reload by checking browser navigation info
    const navType = performance.getEntriesByType("navigation")[0].type;
    if (navType === "reload") {
        // Redirect to the form page on page refresh
        window.location.replace("travelEnrollmentForm.html");
    }

});
