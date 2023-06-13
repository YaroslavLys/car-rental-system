import {useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
import {baseTransportURL} from "../../utils/baseURLs";
import {Link} from "react-router-dom";
import {
    Image,
    Information,
    Item,
    ItemContent,
    ItemDetails,
    List,
    ListWrapper,
    NavButton,
    Navigation,
    Wrapper
} from "./TransportPage.styles"

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
        <Wrapper>
            <ListWrapper>
                <List>
                    {transport.map((item) => (
                        <Item key={item.id}>
                            <Link to={`/transport/${item.id}`}>
                                <ItemDetails>
                                    <ItemContent>
                                        <Image>
                                            <p>READ MORE</p>
                                            <li><img src={item.image} style={{width: "300px", height: "150px"}}
                                                     alt="No image"/>
                                            </li>
                                        </Image>
                                        <Information>
                                            <li>Brand: {item.brand}</li>
                                            <li>Model: {item.model}</li>
                                            <li>Year: {item.production_year}</li>
                                            <li className="price">Price: {item.base_price}</li>
                                        </Information>
                                    </ItemContent>
                                </ItemDetails>
                            </Link>
                        </Item>
                    ))}
                </List>
            </ListWrapper>
            <Navigation>
                <NavButton onClick={handlePrevious} disabled={!previous} className="fa-solid fa-arrow-left"></NavButton>
                <p>Page - {currentPage}</p>
                <NavButton onClick={handleNext} disabled={!next} className="fa-solid fa-arrow-right"></NavButton>
            </Navigation>
        </Wrapper>
    );
}

export default TransportPage;
