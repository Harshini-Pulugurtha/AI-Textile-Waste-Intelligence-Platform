import {
    FaCheckCircle,
    FaShieldAlt
} from "react-icons/fa";

import ConfidenceBar from "./ConfidenceBar";

import "./ResultCard.css";

function ResultCard({

    title,

    value,

    confidence,

    icon: Icon,

    color

}) {

    return (

        <div className={`result-card`}>

            <div className="result-header">

                <div className="result-title">

                    <Icon className="result-icon"/>

                    <h3>{title}</h3>

                </div>

                <div className="status-badge">

                    <FaCheckCircle/>

                    Detected

                </div>

            </div>

            <div className="result-body">

                <h1 className="result-value">

                    {value}

                </h1>

                <p className="result-subtitle">

                    AI Detection Result

                </p>

            </div>

            {confidence !== undefined && (

                <div className="confidence-section">

                    <div className="confidence-text">

                        <span>Confidence</span>

                        <strong>

                            {(confidence * 100).toFixed(1)}%

                        </strong>

                    </div>

                    <ConfidenceBar
                        confidence={confidence}
                    />

                </div>

            )}

        </div>

    );

}

export default ResultCard;