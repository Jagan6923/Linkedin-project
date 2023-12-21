$(document).ready(function () {
    $('#signup').validate({
        rules: {
            mob: {
                required: true,
                minlength: 10,
            },
            pass: {
                required: true,
                minlength: 6,
            },
        },
        messages: {
            mob: {
                required: "Please enter the Mobile no or email",
                minlength: "Please enter correct no"
            },
            pass: {
                required: "Please enter the password",
                minlength: "Please enter minimum 6 letters password"
            },

        }
    })
})