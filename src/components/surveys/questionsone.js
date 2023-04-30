const json = {
    "title":"Basic Survey One",
    "description":"This is try",
    questions: [
        {
            name: "name",
            type: "text",
            title: "Please enter a name",
            placeHolder: "John Snow",
            isRequered: true
        },
        {
            name: "birthdate",
            type: "text",
            inputType: "date",
            title: "Your birthdate",
            isRequered: true
        },
        {
            name: "color",
            type: "text",
            inputType: "color",
            title: "Your favorite color"
        },
        {
            name: "email",
            type: "text",
            inputType: "text",
            title: "Your email address",
            placeHolder:"john.snow@gmail.com",
            isRequered: true,
            validators: [
                {
                    type:"email"
                }
            ]
        }
    ]
};

export default json;