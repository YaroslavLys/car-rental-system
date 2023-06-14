import {useHistory, useParams} from "react-router-dom";
import * as Yup from "yup";
import {useFormik} from "formik";
import {
    ErrorText,
    FormContainer,
    FormGroup,
    Input,
    Label
} from "../CreditCardPage/CreditCardForm.styles";
import {LOCATIONS} from "../../utils/locations";
import useAxios from "../../utils/useAxios";
import {baseOrderURL, baseTransportURL, baseUserProfileURL} from "../../utils/baseURLs";
import {useEffect, useState} from "react";


const validationSchema = Yup.object().shape({
    startDate: Yup.string().required('Start date is required'),
    endDate: Yup.string().required('End date is required'),
    startLocation: Yup.string().required('Start location is required'),
    endLocation: Yup.string().required('End location is required'),
});


function CreateOrderPage() {
    const {id} = useParams();
    const [profileId, setProfileId] = useState(null);

    const api = useAxios();
    const history = useHistory();

    const getUserProfile = async () => {
        try {
            const response = await api.get(`${baseUserProfileURL}/`);
            setProfileId(response.data.profile.id)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUserProfile();
    }, []);

    const formik = useFormik({
        initialValues: {
            startDate: '',
            endDate: '',
            startLocation: '',
            endLocation: '',
        },
        validationSchema,
        onSubmit: values => {
            const formData = new FormData();
            formData.append('transport', id);
            formData.append('profile', profileId);
            formData.append('start_date', values['startDate']);
            formData.append('end_date', values['endDate']);
            formData.append('start_location', values['startLocation']);
            formData.append('end_location', values['endLocation']);
            formData.append('bill', "300");
            formData.append('is_open', "True")
            api.post(`${baseOrderURL}/`, formData).then((response) => {
                window.location.reload();
                console.log('Success!');
            })
                .catch((error) => {
                    console.error('Error', error);
                });
            history.push('/profile');
            console.log(values);
        }
    });

    return <div>
        <h1>Create order</h1>
        Creating order for transport with id: {id}


        <FormContainer>
            <form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <Label>startDate</Label>
                    <Input
                        type="date"
                        id="startDate"
                        name="startDate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.startDate}
                    />
                    {formik.touched.startDate && formik.errors.startDate && (
                        <ErrorText>{formik.errors.startDate}</ErrorText>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label>endDate</Label>
                    <Input
                        type="date"
                        id="endDate"
                        name="endDate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.endDate}
                    />
                    {formik.touched.endDate && formik.errors.endDate && (
                        <ErrorText>{formik.errors.endDate}</ErrorText>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label>startLocation</Label>
                    <select
                        type="text" id="startLocation" name="startLocation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.startLocation}>
                        <option value="" disabled selected>Location</option>
                        <option value="0">Ukraine, Lviv. Stepan Bandera Street, 12.</option>
                        <option value="1">Ukraine, Rivne. Soborna Street, 12a.</option>
                        <option value="2">Ukraine, Ternopil. Lystopadova Street, 5.</option>
                        <option value="3">Ukraine, Ivano-Frankivsk. Mykhailo Hrushevsky Street, 21.</option>
                    </select>

                    {formik.touched.startLocation && formik.errors.startLocation && (
                        <ErrorText>{formik.errors.startLocation}</ErrorText>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label>endLocation</Label>
                    <select
                        type="text" id="endLocation" name="endLocation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.endLocation}>
                        <option value="" disabled selected>Location</option>
                        <option value="0">Ukraine, Lviv. Stepan Bandera Street, 12.</option>
                        <option value="1">Ukraine, Rivne. Soborna Street, 12a.</option>
                        <option value="2">Ukraine, Ternopil. Lystopadova Street, 5.</option>
                        <option value="3">Ukraine, Ivano-Frankivsk. Mykhailo Hrushevsky Street, 21.</option>
                    </select>
                    {formik.touched.endLocation && formik.errors.endLocation && (
                        <ErrorText>{formik.errors.endLocation}</ErrorText>
                    )}
                </FormGroup>
                <button type="submit">Submit</button>
            </form>
        </FormContainer>
    </div>
}

export default CreateOrderPage;