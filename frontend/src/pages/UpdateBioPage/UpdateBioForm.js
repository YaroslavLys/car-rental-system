import * as Yup from "yup";
import {useFormik} from "formik";
import {useHistory} from "react-router-dom";
import useAxios from "../../utils/useAxios";
import {baseUserURL} from "../../utils/baseURLs";
import {ErrorText, FormContainer, FormGroup, Label, TextArea} from "../CreditCardPage/CreditCardForm.styles";


const validationSchema = Yup.object({
    bio: Yup.string()
        .required('Must be filled!')
        .max(200, 'Bio is too big!')
});
const UpdateBioForm = () => {
    const history = useHistory();
    const api = useAxios();
    const formik = useFormik({
        initialValues: {
            bio: '',
        },
        validationSchema,
        onSubmit: values => {
            const formData = new FormData();
            formData.append('bio', values['bio']);
            api.put(`${baseUserURL}/bio/`, formData)
                .then((response) => {
                    console.log('Success!');
                })
                .catch((error) => {
                    console.error('Error', error);
                });
            history.push('/profile');
            console.log(values);
        }
    });

    return (
        <FormContainer>
            <form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Label>Bio</Label>
                    <TextArea
                        id="bio"
                        name="bio"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bio}
                    />
                    {formik.touched.bio && formik.errors.bio && (
                        <ErrorText>{formik.errors.bio}</ErrorText>
                    )}
                </FormGroup>
                <button type="submit">Submit</button>
            </form>
        </FormContainer>
    );
};

export default UpdateBioForm;