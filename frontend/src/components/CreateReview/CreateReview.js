import * as Yup from "yup";
import {useFormik} from "formik";
import AuthContext from "../../context/AuthContext";
import {useContext} from "react";
import {ErrorText, FormGroup, Input, Label} from "../../pages/CreditCardPage/CreditCardForm.styles";
import {TextArea} from "../../pages/UpdateBioPage/UpdateBioForm.styles";
import useAxios from "../../utils/useAxios";
import {baseTransportURL} from "../../utils/baseURLs";


const validationSchema = Yup.object({
    text: Yup.string()
        .required('Must be filled!')
        .max(100, 'Review is too big!'),
    rate: Yup.number()
        .required('Must be filled!')
        .min(1, 'Must be equal or greater than 1!')
        .max(10, 'Must be equal or less than 10!')
});

function CreateReview(props) {
    const {user} = useContext(AuthContext);

    const api = useAxios();
    const formik = useFormik({
        initialValues: {
            text: '',
            rate: '',
        },
        validationSchema,
        onSubmit: values => {
            const formData = new FormData();
            formData.append('text', values['text']);
            formData.append('rate', values['rate']);
            formData.append('user', user.user_id);
            formData.append('transport', props.vehicleId);
            api.post(`${baseTransportURL}/create-review/`, formData)
                .then((response) => {
                    console.log('Success!');
                })
                .catch((error) => {
                    console.error('Error', error);
                });
        }
    });

    return (
        <div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <Label>Add new review</Label>
                        <TextArea
                            id="text"
                            name="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.text}
                        />
                        {formik.touched.text && formik.errors.text && (
                            <ErrorText>{formik.errors.text}</ErrorText>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <Label>Rate this transport</Label>
                        <Input
                            type="number"
                            id="rate"
                            name="rate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.rate}
                        />
                        {formik.touched.rate && formik.errors.rate && (
                            <ErrorText>{formik.errors.rate}</ErrorText>
                        )}
                    </FormGroup>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>

    );
}

export default CreateReview;
