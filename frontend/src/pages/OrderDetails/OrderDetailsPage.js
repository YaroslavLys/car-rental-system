import {useHistory, useParams} from "react-router-dom";
import useAxios from "../../utils/useAxios";
import {baseOrderURL} from "../../utils/baseURLs";
import {useEffect, useState} from "react";
import {LOCATIONS} from "../../utils/locations";

import {OrderDetailsWrapper, OrderDetailsList, OrderDetailsButton, OrderDetailsRow, OrderDetailsBox, OrderImage} from "./OrderDetailsPage.styles";
import placeholder from "../../assets/car-0.jpg";

function OrderDetailsPage() {
    const {id} = useParams();
    const history = useHistory();
    const api = useAxios();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startLocation, setStartLocation] = useState(null);
    const [endLocation, setEndLocation] = useState(null);
    const [bill, setBill] = useState(null);
    const [isOpen, setIsOpen] = useState(null);


    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await api.get(`${baseOrderURL}/${id}`);
            setStartDate(response.data.start_date);
            setEndDate(response.data.end_date);
            setStartLocation(response.data.start_location);
            setEndLocation(response.data.end_location);
            setBill(response.data.bill);
            setIsOpen(response.data.is_open);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const closeOrder = async () => {
        try {
            const response = await api.delete(`${baseOrderURL}/${id}`);
            history.push('/profile')
        } catch (error) {
            console.error(error);
        }
    };


    return <OrderDetailsWrapper>
        <h1>Order Detail Page</h1>

        <OrderDetailsBox>
            <OrderImage>
            <img 
                src={placeholder}
//TODO: change src no database picture of rented car. For me it somehow wasn't working
                style={{aspectRatio: 16/9}} 
                alt="Transport vehicle"/>
            </OrderImage>

            <OrderDetailsList>
                
                    <li><strong>Start date: </strong>{startDate}</li>
                    <li><strong>End date: </strong>{endDate}</li>
                    <li><strong>Start location: </strong>{LOCATIONS[startLocation]}</li>
                    <li><strong>End location: </strong>{LOCATIONS[endLocation]}</li>
                    <li><strong>Bill: </strong>{bill}</li>
                    <li><strong>Is open: </strong>{isOpen ? "True" : "False"}</li>
                
            </OrderDetailsList>
        </OrderDetailsBox>
    <hr/>
    <OrderDetailsRow>
        <OrderDetailsButton onClick={() => history.push('/profile')}>Back to profile</OrderDetailsButton>
        <OrderDetailsButton onClick={() => closeOrder()}>Close this order</OrderDetailsButton>
    </OrderDetailsRow>
</OrderDetailsWrapper>
}

export default OrderDetailsPage;