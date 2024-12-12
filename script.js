$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Use jQuery to get form data
        const formData = $(this).serialize();

        // Send data to PHP using AJAX
        $.post("submit.php", formData, function (data) {
            $("#result").html(data); // Display the response
        });
    });
});
