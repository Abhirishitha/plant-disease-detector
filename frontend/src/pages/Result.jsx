import { useLocation } from "react-router-dom";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import NearbyCenters from "../components/NearbyCenters/NearbyCenters";
function Result() {

    const location = useLocation();

    const data = location.state;

    if (!data) {

        return <h2>No Result Found</h2>;

    }

    return (

        <div style={{ padding: "50px" }}>

            <h1>{data.prediction.disease}</h1>

            <h2>

                Confidence :

                {data.prediction.confidence}%

            </h2>

            <hr />

            <h2>Description</h2>

            <p>

                {data.ai.description}

            </p>

            <hr />

            <h2>Symptoms</h2>

            <ul>

                {data.ai.symptoms.map((item, index) => (

                    <li key={index}>{item}</li>

                ))}

            </ul>

            <hr />

            <h2>Organic Treatment</h2>

            <ul>

                {data.ai.organicTreatment.map((item, index) => (

                    <li key={index}>{item}</li>

                ))}

            </ul>

            <hr />

            <h2>Chemical Treatment</h2>

            <ul>

                {data.ai.chemicalTreatment.map((item, index) => (

                    <li key={index}>{item}</li>

                ))}

            </ul>

            <hr />

            <h2>Prevention</h2>

            <ul>

                {data.ai.prevention.map((item, index) => (

                    <li key={index}>{item}</li>

                ))}

            </ul>

            <hr />

            <h2>Farmer Advice</h2>

            <p>

                {data.ai.farmerAdvice}

            </p>

            <hr />

            <h2>When To Seek Help</h2>

            <p>

                {data.ai.whenToSeekHelp}

            </p>
<WeatherCard />

<NearbyCenters />
        </div>

    );

}

export default Result;