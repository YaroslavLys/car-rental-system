import * as Yup from "yup";
import {useFormik} from "formik";
import {ErrorText, FormContainer, FormGroup, Input, Label} from "./CreditCardForm.styles";
import {baseUserURL} from "../../utils/baseURLs";
import useAxios from "../../utils/useAxios";
import {useHistory} from "react-router-dom";

const validationSchema = Yup.object({
    cardNumber: Yup.string()
        .required('Card number is required')
        .matches(/^\d{16}$/, 'Card number must be exactly 16 digits'),
    cardName: Yup.string()
        .required('Card name is required'),
    expirationDate: Yup.string()
        .required('Expiration date is required')
        .matches(/^\d{2}\/\d{2}$/, 'Invalid expiration date'),
    cvc: Yup.string()
        .required('CVC is required')
        .matches(/^\d{3}$/, 'Invalid CVC'),
    amount: Yup.number()
        .required('Specify the amount of money!')
});

const CreditCardForm = () => {
    const history = useHistory();
    const api = useAxios();
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            cardName: '',
            expirationDate: '',
            cvc: '',
            amount: '',
        },
        validationSchema,
        onSubmit: values => {
            const formData = new FormData();
            formData.append('amount', values['amount']);
            api.post(`${baseUserURL}/balance/`, formData)
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
                    <Label>Card Number</Label>
                    <Input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardNumber}
                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber && (
                        <ErrorText>{formik.errors.cardNumber}</ErrorText>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label>Card Name</Label>
                    <Input
                        type="text"
                        id="cardName"
                        name="cardName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardName}
                    />
                    {formik.touched.cardName && formik.errors.cardName && (
                        <ErrorText>{formik.errors.cardName}</ErrorText>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label>Expiration Date</Label>
                    <Input
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expirationDate}
                    />
                    {formik.touched.expirationDate && formik.errors.expirationDate && (
                        <ErrorText>{formik.errors.expirationDate}</ErrorText>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label>CVC</Label>
                    <Input
                        type="text"
                        id="cvc"
                        name="cvc"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cvc}
                    />
                    {formik.touched.cvc && formik.errors.cvc && (
                        <ErrorText>{formik.errors.cvc}</ErrorText>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label>Amount, USD</Label>
                    <Input
                        type="number"
                        id="amount"
                        name="amount"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                    />
                    {formik.touched.amount && formik.errors.amount && (
                        <ErrorText>{formik.errors.amount}</ErrorText>
                    )}
                </FormGroup>
                <button type="submit">Submit</button>
            </form>
        </FormContainer>
    );
};

export default CreditCardForm;