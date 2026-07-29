// import "./WasteClassificationCard.css";

// function WasteClassificationCard({ waste }) {

//     if (!waste) return null;

//     return (

//         <div className="waste-card">

//             <h3>♻ Textile Waste Classification</h3>

//             <div className="waste-grid">

//                 <div>
//                     <span>Waste Category</span>
//                     <strong>{waste.category}</strong>
//                 </div>

//                 <div>
//                     <span>Recyclability</span>
//                     <strong>{waste.recyclability}</strong>
//                 </div>

//                 <div>
//                     <span>Reuse Potential</span>
//                     <strong>{waste.reuse_potential}</strong>
//                 </div>

//                 <div>
//                     <span>Contamination</span>
//                     <strong>{waste.contamination_detection}</strong>
//                 </div>

//                 <div>
//                     <span>Disposal</span>
//                     <strong>{waste.disposal_recommendation}</strong>
//                 </div>

//                 <div>
//                     <span>Compostable</span>
//                     <strong>{waste.compostable ? "Yes" : "No"}</strong>
//                 </div>

//                 <div>
//                     <span>Hazardous</span>
//                     <strong>{waste.hazardous_textile ? "Yes" : "No"}</strong>
//                 </div>

//             </div>

//         </div>

//     );

// }

// export default WasteClassificationCard;

import "./WasteClassificationCard.css";

import {
    FaRecycle,
    FaLeaf,
    FaCheckCircle,
    FaExclamationTriangle
} from "react-icons/fa";

function WasteClassificationCard({ waste }) {

    if (!waste) return null;

    return (

        <div className="waste-card">

            <h3>
                <FaRecycle />
                Textile Waste Classification
            </h3>

            <div className="waste-grid">

                <div>
                    <span>Waste Category</span>
                    <strong>{waste.category}</strong>
                </div>

                <div>
                    <span>Recyclability</span>
                    <strong>{waste.recyclability}</strong>
                </div>

                <div>
                    <span>Reuse Potential</span>
                    <strong>{waste.reuse_potential}</strong>
                </div>

                <div>
                    <span>Contamination</span>
                    <strong>{waste.contamination_detection}</strong>
                </div>

                <div>
                    <span>Disposal Recommendation</span>
                    <strong>{waste.disposal_recommendation}</strong>
                </div>

                <div>
                    <span>Compostable</span>
                    <strong>
                        {waste.compostable ? (
                            <>
                                <FaLeaf style={{ color: "#16a34a", marginRight: "6px" }} />
                                Yes
                            </>
                        ) : (
                            "No"
                        )}
                    </strong>
                </div>

                <div>
                    <span>Hazardous Textile</span>
                    <strong>
                        {waste.hazardous_textile ? (
                            <>
                                <FaExclamationTriangle style={{ color: "#dc2626", marginRight: "6px" }} />
                                Yes
                            </>
                        ) : (
                            <>
                                <FaCheckCircle style={{ color: "#16a34a", marginRight: "6px" }} />
                                No
                            </>
                        )}
                    </strong>
                </div>

            </div>

        </div>

    );

}

export default WasteClassificationCard;