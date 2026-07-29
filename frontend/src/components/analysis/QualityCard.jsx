import {
    FaStar,
    FaAward,
    FaPalette,
    FaSun,
    FaAdjust,
    FaBullseye
} from "react-icons/fa";

import "./QualityCard.css";

function QualityCard({ quality }) {

    if (!quality) return null;

    return (

        <div className="quality-card">

            <div className="quality-header">

                <div className="quality-title">

                    <FaStar className="quality-icon" />

                    <h3>Quality Analysis</h3>

                </div>

                <div className="grade-badge">

                    Grade {quality.quality_grade}

                </div>

            </div>

            <div className="quality-grid">

                <div className="quality-box">

                    <FaAward className="metric-icon"/>

                    <label>Quality Score</label>

                    <span>{quality.quality_score}</span>

                </div>

                <div className="quality-box">

                    <FaPalette className="metric-icon"/>

                    <label>Dominant Color</label>

                    <span>{quality.dominant_color}</span>

                </div>

                <div className="quality-box">

                    <FaSun className="metric-icon"/>

                    <label>Brightness</label>

                    <span>{Math.round(quality.brightness)}</span>

                </div>

                <div className="quality-box">

                    <FaAdjust className="metric-icon"/>

                    <label>Contrast</label>

                    <span>{Math.round(quality.contrast)}</span>

                </div>

                <div className="quality-box full-width">

                    <FaBullseye className="metric-icon"/>

                    <label>Sharpness</label>

                    <span>{Math.round(quality.sharpness)}</span>

                </div>

            </div>

        </div>

    );

}

export default QualityCard;