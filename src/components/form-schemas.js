import * as Yup from "yup";


export const songValidationSchema = Yup.object({
    artista: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('we need an artisc'),
    canción: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('we need an artisc')
});