import "./TopPredictions.css";

function TopPredictions({ predictions }) {

  return (

    <div className="prediction-card">

      <h2>Top Predictions</h2>

      {predictions.map((item, index) => (

        <div className="prediction-row" key={index}>

          <span>{item.disease}</span>

          <span>{item.confidence}%</span>

        </div>

      ))}

    </div>

  );

}

export default TopPredictions;