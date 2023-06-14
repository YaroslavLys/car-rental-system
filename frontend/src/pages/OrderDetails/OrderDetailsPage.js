import {useHistory, useParams} from "react-router-dom";
import useAxios from "../../utils/useAxios";
import {baseOrderURL} from "../../utils/baseURLs";
import {useEffect, useState} from "react";
import {LOCATIONS} from "../../utils/locations";


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
            console.log(response.data)
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


    return <div>
        <h1>Order Detail Page</h1>
        Id of this order: {id}
        <ul>
            <li>Start date: {startDate}</li>
            <li>End date: {endDate}</li>
            <li>Start location: {LOCATIONS[startLocation]}</li>
            <li>End location: {LOCATIONS[endLocation]}</li>
            <li>Bill: {bill}</li>
            <li>Is open: {isOpen ? "True" : "False"}</li>
        </ul>
        <hr/>
        <button onClick={() => history.push('/profile')}>Back to profile</button>
        <button onClick={() => closeOrder()}>Close this order</button>
    </div>
}

export default OrderDetailsPage;