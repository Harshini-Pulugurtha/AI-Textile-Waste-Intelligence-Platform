import {
    FaLeaf,
    FaGlobe,
    FaTint,
    FaRecycle,
    FaTree
} from "react-icons/fa";

import "./SustainabilityCard.css";

function SustainabilityCard({ sustainability }) {

    if (!sustainability) return null;

    return (

        <div className="sustainability-card">

            <div className="sustainability-header">

                <FaLeaf className="leaf-icon"/>

                <h2>Sustainability Intelligence</h2>

            </div>

            <div className="score-section">

                <div className="score-circle">

                    {sustainability.score}

                </div>

                <div>

                    <h3>Sustainability Score</h3>

                    <p>{sustainability.environmental_rating}</p>

                </div>

            </div>

            <div className="sustainability-grid">

                <div className="info-box">

                    <FaGlobe />

                    <h4>CO₂ Saved</h4>

                    <p>{sustainability.co2_saved} kg</p>

                </div>

                <div className="info-box">

                    <FaTint />

                    <h4>Water Saved</h4>

                    <p>{sustainability.water_saved} L</p>

                </div>

                <div className="info-box">

                    <FaRecycle />

                    <h4>Landfill Saved</h4>

                    <p>{sustainability.landfill_saved} kg</p>

                </div>

                <div className="info-box">

                    <FaTree />

                    <h4>Resources</h4>

                    <p>{sustainability.resource_conservation}</p>

                </div>

            </div>

        </div>

    );

}

export default SustainabilityCard;