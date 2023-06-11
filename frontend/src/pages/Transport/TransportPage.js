import {useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
import {baseTransportURL} from "../../utils/baseURLs";
import {Link} from "react-router-dom";

function TransportPage() {
    const [transport, setTransport] = useState([]);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const api = useAxios();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await api.get(`${baseTransportURL}/`);
            setTransport(response.data.results);
            setCount(response.data.count);
            setNext(response.data.next);
            setPrevious(response.data.previous);
        } catch (error) {
            console.error(error);
        }
    };

    const handleNext = async () => {
        if (next) {
            try {
                const response = await api.get(next);
                setTransport(response.data.results);
                setCount(response.data.count);
                setNext(response.data.next);
                setPrevious(response.data.previous);
                setCurrentPage(currentPage + 1);
                console.log(response.data.results);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handlePrevious = async () => {
        if (previous) {
            try {
                const response = await api.get(previous);
                setTransport(response.data.results);
                setCount(response.data.count);
                setNext(response.data.next);
                setPrevious(response.data.previous);
                setCurrentPage(currentPage - 1);
                console.log(response.data.results);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div>
            <h1>Transport Page</h1>
            <p>Current Page: {currentPage}</p>
            <button onClick={handlePrevious} disabled={!previous}>Previous</button>
            <button onClick={handleNext} disabled={!next}>Next</button>
            <ul>
                {transport.map((item) => (
                    <li key={item.id}>
                        <ul>
                            <li>Image: <img src={item.image} style={{width: "300px", height: "150px"}} alt="No image"/>
                            </li>
                            <li>Brand: {item.brand}</li>
                            <li>Model: {item.model}</li>
                            <li>Year: {item.production_year}</li>
                            <Link to={`/transport/${item.id}`}>
                                <button>Details</button>
                            </Link>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransportPage;
