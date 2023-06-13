import * as Yup from "yup";
import {useFormik} from "formik";
import {useHistory} from "react-router-dom";
import useAxios from "../../utils/useAxios";
import {baseUserURL} from "../../utils/baseURLs";
import {ErrorText, FormContainer, FormGroup, Label, TextArea, Form, Button} from "./UpdateBioForm.styles";


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
                    window.location.reload()
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
            <Form onSubmit={formik.handleSubmit}>
                    <Label>Bio</Label>
                    <TextArea
                        id="bio"
                        name="bio"
                        maxlength="10"
                        placeholder="Tell briefly about yourself" autofocus
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.bio}
                    />
                    {formik.touched.bio && formik.errors.bio && (
                        <ErrorText>{formik.errors.bio}</ErrorText>
                    )}
                <Button type="submit">Submit</Button>
            </Form>
        </FormContainer>
    );
};

export default UpdateBioForm;