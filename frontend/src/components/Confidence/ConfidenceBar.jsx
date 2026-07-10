import "./ConfidenceBar.css";

function ConfidenceBar({ confidence }) {

  return (

    <div className="confidence-box">

      <div className="confidence-header">

        <span>Confidence</span>

        <span>{confidence}%</span>

      </div>

      <div className="confidence-track">

        <div
          className="confidence-fill"
          style={{ width: `${confidence}%` }}
        ></div>

      </div>

    </div>

  );

}

export default ConfidenceBar;