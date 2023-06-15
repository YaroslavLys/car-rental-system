import {useEffect, useState} from "react";
import {baseTransportURL} from "../../utils/baseURLs";
import useAxios from "../../utils/useAxios";
import {Link, useHistory, useParams} from "react-router-dom";
import CreateReview from "../../components/CreateReview/CreateReview";
import {CarDetails, CarName, TechnicalInfo, Review, CreateOrderButton, CarPreview, ListItemWrapper, Back, GoBack} from "./TransportDetailsPage.styles"

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

    return <CarDetails>
        <GoBack onClick={() => history.push('/transport')}>
            <Back className="fa fa-arrow-left" aria-hidden="true"></Back>
            <p>Go Back</p>
        </GoBack>
        <CarName>{brand} {model}</CarName>
        <div style={{display:"flex"}}>
            <CarPreview>
                <img src={image} style={{width: "500px", height: "auto"}} alt="No image"/>
                <CreateOrderButton onClick={() => history.push(`/transport/${id}/create-order`)}>Create order</CreateOrderButton>
            </CarPreview>
            <TechnicalInfo>
                <p>Technical characteristics:</p>
                <ListItemWrapper>
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
                </ListItemWrapper>
            </TechnicalInfo>
        </div>
        <hr/>
        <h2>Reviews</h2>
        <hr/>
        <CreateReview vehicleId={id}/>
        <hr/>
        <div style={{display: "table-cell"}}>
            {reviews.map((item) => (
                <Review>
                    <li key={item.id} style={{marginTop: "20px"}}>
                        <ul>
                            <li>Review by  {item.user.email}</li>
                            <li style={{fontWeight:"100", fontSize:"14px"}}>Created on  {item.created_at}</li>
                            <li style={{marginTop:"15px", fontWeight:"600", fontSize:"18px"}}>Review: {item.text}</li>
                            <li style={{marginTop:"15px", fontWeight:"600", fontSize:"18px"}}>Rate: {item.rate}/10</li>
                        </ul>
                    </li>
                </Review>
            ))}
        </div>
    </CarDetails>
}

export default TransportDetailsPage