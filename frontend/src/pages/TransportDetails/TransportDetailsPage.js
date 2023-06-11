import {useEffect, useState} from "react";
import {baseTransportURL} from "../../utils/baseURLs";
import useAxios from "../../utils/useAxios";
import {useHistory, useParams} from "react-router-dom";
import CreateReview from "../../components/CreateReview/CreateReview";

function TransportDetailsPage() {
    const {id} = useParams();
    const history = useHistory();
    const api = useAxios();
    const [image, setImage] = useState(null);
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [mileage, setMileage] = useState(0);
    const [range, setRange] = useState(0);
    const [color, setColor] = useState(0);
    const [type, setType] = useState(0);
    const [description, setDescription] = useState("");
    const [basePrice, setBasePrice] = useState(0);
    const [electro, setElectro] = useState(false);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchData();
        console.log(reviews);
    }, []);

    const fetchData = async () => {
        try {
            const response = await api.get(`${baseTransportURL}/${id}`);
            setImage(response.data.transport.image);
            setBrand(response.data.transport.brand);
            setModel(response.data.transport.model);
            setYear(response.data.transport.production_year);
            setMileage(response.data.transport.mileage);
            setRange(response.data.transport.range);
            setColor(response.data.transport.color);
            setType(response.data.transport.type);
            setDescription(response.data.transport.description);
            setBasePrice(response.data.transport.base_price);
            setElectro(response.data.transport.electro);
            setReviews(response.data.reviews);
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    return <div>
        <h1>Transport Detail Page</h1>
        Id of this transport: {id}
        <ul>
            <li>Image: <img src={image} style={{width: "300px", height: "150px"}} alt="No image"/>
            </li>
            <li>Brand: {brand}</li>
            <li>Model: {model}</li>
            <li>Is electro: {electro ? <div>Yes</div> : <div>No</div>}</li>
            <li>Year: {year}</li>
            <li>Mileage: {mileage}</li>
            <li>Range: {range}</li>
            <li>Color: {color}</li>
            <li>Type: {type}</li>
            <li>Description: {description}</li>
            <li>Base price: {basePrice}</li>
        </ul>
        <hr/>
        <h2>Reviews</h2>
        <hr/>
        <CreateReview vehicleId={id}/>
        <hr/>
        <ul>
            {reviews.map((item) => (
                <li key={item.id} style={{marginTop: "20px"}}>
                    <ul>
                        <li>Date of review: {item.created_at}</li>
                        <li>User: {item.user.email}</li>
                        <li>Text of review: {item.text}</li>
                        <li>Rate: {item.rate}/10</li>
                    </ul>
                </li>
            ))}
        </ul>
        <button onClick={() => history.push('/transport')}>Go back</button>
    </div>


}

export default TransportDetailsPage