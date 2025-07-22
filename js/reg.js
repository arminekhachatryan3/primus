// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },

            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            company_name: "required",

            city: {
                required: true,
                minlength: 2
            },

            address: {
                required: true,
                minlength: 2
            },

            region: {
                required: true,
                minlength: 2
            },
            zip_code: {
                required: true,
                minlength: 2
            },
            phone_number: {
                required: true,
                minlength: 2
            },
            ssn: {
                required: true,
                minlength: 2
            },
            code: {
                required: true,
                minlength: 2,
            }
        },
        // Specify validation error messages
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",

            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",



            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            company_name:"Please enter your company name",

            city: {
                required:  "Please provide a city",
                minlength: "Your city must be at least 2 characters long"
            },

            address: {
                required: "Please provide a address",
                minlength: "Your addres must be at least 2 characters long"
            },
            region: {
                required: "Please provide a region",
                minlength:"Your region must be at least 2 characters long"
            },
            zip_code: {
                required: "Please provide a zip code",
                minlength: "Your Zip code be at least 2 characters long"
            },

            phone_number: {
                required: "Please provide a phone number",
                minlength: "Your phone number must be at least 2 characters long"
            },
            ssn: {
                required: "Please provide a vat id",
                minlength: "Your VAt ID must be at least 2 characters long"

            },
            code: {
                required: "Please provide a code",
                minlength: "Your code must be at least 2 characters long",
            }

        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});