import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Card, CardBody, Divider, Image, Link} from "@heroui/react";
import {zeroPad} from "../../utility/utility.js";
import CardDetailsHeading from "../../components/CardDetailsInfo/CardDetailsHeading.jsx";
import CardDetailsInfo from "../../components/CardDetailsInfo/CardDetailsInfo.jsx";
import CardDetailsPrices from "../../components/CardDetailsInfo/CardDetailsPrices.jsx";
import CardDetailsLoading from "../../components/CardDetailsInfo/CardDetailsLoading.jsx";

const CardDetails = () => {

    const {setId, cardId} = useParams();
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.pokemontcg.io/v2/cards/${cardId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setCard(result.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [cardId]);

    return (
        <div className="container mx-auto my-20">
            {loading ?
                <CardDetailsLoading />
                :
                (error ?
                    <p>Error: {error}</p>
                :
                    <div className="flex flex-col md:flex-row w-full">
                        <section className={"px-20 md:px-0 mb-10 md:mb-0 md:mr-8" }>
                                <Image
                                    alt={card.name}
                                    src={card.images.large}
                                />

                        </section>

                        <section className={"w-full flex flex-col gap-y-8 items-start "}>
                            <CardDetailsHeading card={card} />
                            <Divider />
                            <CardDetailsPrices tcgplayer={card.tcgplayer} cardmarket={card.cardmarket} />
                            <Divider />
                            <CardDetailsInfo card={card} />


                        </section>
                    </div>
                )
            }
        </div>
    )
}

export default CardDetails;