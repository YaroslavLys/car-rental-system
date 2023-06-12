import * as Yup from "yup";
import {useFormik} from "formik";
import {
    Card,
    CVC,
    ErrorText,
    ExpirationDate,
    ExpirationDetails,
    Form,
    FormContainer,
    FormGroup,
    FormSecurityDetailsWrapper,
    Input,
    Label
} from "./CreditCardForm.styles";
import {baseUserURL} from "../../utils/baseURLs";
import useAxios from "../../utils/useAxios";
import {useHistory} from "react-router-dom";

const validationSchema = Yup.object({
    cardNumber: Yup.string()
        .required('Card number is required')
        .matches(/^\d{16}$/, 'Card number must be exactly 16 digits'),
    cardHolder: Yup.string()
        .required('Card Holder is required'),
    expirationMonth: Yup.string()
        .required('Month is required')
        .matches(/^\d{2}$/),
    expirationYear: Yup.string()
        .required('Year is required')
        .matches(/^\d{4}$/),
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
            cardHolder: '',
            expirationMonth: '',
            expirationYear: '',
            cvc: '',
            amount: '',
        },
        validationSchema,
        onSubmit: values => {
            const formData = new FormData();
            formData.append('amount', values['amount']);
            api.post(`${baseUserURL}/balance/`, formData)
                .then((response) => {
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

    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <Card>
                    <div className="provider"><i className="fab fa-cc-visa fa-lg"></i></div>
                    <div className="number">
                        <span>card number</span>
                        <p>XXXX XXXX XXXX XXXX</p>
                        {/*<div>*/}
                        {/*    /!*<p>XXXX</p>*!/*/}
                        {/*    /!*<p>XXXX</p>*!/*/}
                        {/*    /!*<p>XXXX</p>*!/*/}
                        {/*    /!*<p>XXXX</p>*!/*/}
                        {/*</div>*/}

                    </div>

                    <div className="card-bottom">
                        <div className="holder">
                            <span>card holder</span>
                            <p>NAME SURNAME</p>
                        </div>
                        <div className="good-through">
                            <div className="good-through-label">good<br/>through</div>
                            <div className="good-through-value">09/24</div>
                        </div>
                    </div>
                </Card>
                <FormGroup>
                    <Label>Card Number</Label>
                    <Input
                        type="text" id="cardNumber" name="cardNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardNumber}
                        placeholder="XXXX XXXX XXXX XXXX"
                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber && (
                        <ErrorText>{formik.errors.cardNumber}</ErrorText>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label>Card Holder</Label>
                    <Input
                        type="text" id="cardHolder" name="cardHolder"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardHolder}
                        placeholder="NAME SURNAME"
                    />
                    {formik.touched.cardHolder && formik.errors.cardHolder && (
                        <ErrorText>{formik.errors.cardHolder}</ErrorText>
                    )}
                </FormGroup>
                <FormSecurityDetailsWrapper>
                    <ExpirationDate>
                        <p>Expiration Date</p>
                        <ExpirationDetails>
                            <FormGroup id="expirationMonth">
                                <select
                                    type="text" id="expirationMonth" name="expirationMonth"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.expirationMonth}>
                                    <option value="" disabled selected>Month</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                {formik.touched.expirationMonth && (
                                    <ErrorText>{formik.errors.expirationMonth}</ErrorText>
                                )}
                            </FormGroup>
                            <FormGroup id="expirationYear">
                                <select
                                    type="text" id="expirationYear" name="expirationYear"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.expirationYear}>
                                    <option value="" disabled selected>Year</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                    <option>2031</option>
                                    <option>2032</option>
                                </select>
                                {formik.touched.expirationYear && (
                                    <ErrorText>{formik.errors.expirationYear}</ErrorText>
                                )}
                            </FormGroup>
                        </ExpirationDetails>
                    </ExpirationDate>
                    <CVC>
                        <p>CVC</p>
                        <FormGroup>
                            <Input
                                type="text" id="cvc" name="cvc"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cvc}
                            />
                            {formik.touched.cvc && formik.errors.cvc && (
                                <ErrorText className="cvc-text">{formik.errors.cvc}</ErrorText>
                            )}
                        </FormGroup>
                    </CVC>
                </FormSecurityDetailsWrapper>
                <FormGroup>
                    <div className="form-amount">
                        <Label>Amount, USD</Label>
                        <Input
                            type="number" id="amount" name="amount"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.amount}
                        />
                        {formik.touched.amount && formik.errors.amount && (
                            <ErrorText>{formik.errors.amount}</ErrorText>
                        )}
                    </div>
                </FormGroup>
                <button type="submit">Submit</button>
            </Form>
        </FormContainer>
    );
};
export default CreditCardForm;
