import * as yup from "yup";


export const validate = yup.object(
    {
        email: yup.string().email(),
        name: yup.string().min(4).max(25).required("Please enter a valid name"),
        roll_number: yup.number().positive().integer().min(10).required().typeError("Please enter a valid Roll number"),
        branch: yup.string().required(),
        course: yup.string().min(4).required()
    }
);
