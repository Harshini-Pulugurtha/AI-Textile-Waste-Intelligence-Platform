import {
    FaRecycle,
    FaLeaf,
    FaCoins,
    FaExclamationCircle,
    FaCheckCircle
} from "react-icons/fa";

import "./RecommendationCard.css";

function RecommendationCard({ recommendation }) {

    if (!recommendation) return null;

    return (

        <div className="recommendation-card">

            <div className="recommendation-header">

                <div className="recommendation-title">

                    <FaRecycle className="recommendation-icon" />

                    <h3>AI Recommendation</h3>

                </div>

            </div>

            <div className="action-card">

                <label>Recommended Action</label>

                <h2>{recommendation.recommended_action}</h2>

            </div>

            <div className="recommendation-grid">

                <div className="info-box">

                    <FaRecycle className="info-icon blue" />

                    <label>Recyclability</label>

                    <p>{recommendation.recyclability}</p>

                </div>

                <div className="info-box">

                    <FaLeaf className="info-icon green" />

                    <label>Environmental Impact</label>

                    <p>{recommendation.environmental_impact}</p>

                </div>

                <div className="info-box">

                    <FaCoins className="info-icon orange" />

                    <label>Estimated Value</label>

                    <p>{recommendation.estimated_value}</p>

                </div>

                <div className="info-box">

                    <FaExclamationCircle className="info-icon red" />

                    <label>Priority</label>

                    <p>{recommendation.priority}</p>

                </div>

            </div>

            <div className="reason">

                <div className="reason-title">

                    <FaCheckCircle />

                    <span>Reason</span>

                </div>

                <p>{recommendation.reason}</p>

            </div>

        </div>

    );

}

export default RecommendationCard;