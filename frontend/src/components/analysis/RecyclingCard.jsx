// import "./RecyclingCard.css";

// function RecyclingCard({ recycle }) {

//     if (!recycle) return null;

//     return (

//         <div className="recycling-card">

//             <h3>♻ Recycling Recommendation Engine</h3>

//             <div className="recycling-item">
//                 <span>Recommended Method</span>
//                 <strong>{recycle.recommended_method}</strong>
//             </div>

//             <div className="recycling-item">
//                 <span>Fiber Recycling</span>
//                 <strong>{recycle.fiber_recycling}</strong>
//             </div>

//             <div className="recycling-item">
//                 <span>Mechanical Recycling</span>
//                 <strong>{recycle.mechanical_recycling}</strong>
//             </div>

//             <div className="recycling-item">
//                 <span>Chemical Recycling</span>
//                 <strong>{recycle.chemical_recycling}</strong>
//             </div>

//             <div className="recycling-item">
//                 <span>Fabric Reuse</span>
//                 <strong>{recycle.fabric_reuse}</strong>
//             </div>

//             <div className="recycling-item">
//                 <span>Industrial Recovery</span>
//                 <strong>{recycle.industrial_recovery}</strong>
//             </div>

//             <div className="recycling-item">
//                 <span>Donation</span>
//                 <strong>{recycle.donation}</strong>
//             </div>

//             <div className="recycling-item">
//                 <span>Waste Reduction</span>
//                 <strong>{recycle.waste_reduction_strategy}</strong>
//             </div>

//             <div className="recycling-item">

//                 <span>Upcycling Suggestions</span>

//                 <ul>

//                     {recycle.upcycling_suggestions.map((item,index)=>(

//                         <li key={index}>{item}</li>

//                     ))}

//                 </ul>

//             </div>

//         </div>

//     );

// }

// export default RecyclingCard;

import "./RecyclingCard.css";

import {
    FaRecycle,
    FaIndustry,
    FaLeaf,
    FaGift,
    FaCogs,
    FaCheckCircle,
    FaLightbulb
} from "react-icons/fa";

function RecyclingCard({ recycle }) {

    if (!recycle) return null;

    return (

        <div className="recycling-card">

            <h3>
                <FaRecycle />
                Recycling Recommendation Engine
            </h3>

            <div className="recycling-grid">

                <div className="recycling-item">
                    <span>Recommended Method</span>
                    <strong>{recycle.recommended_method}</strong>
                </div>

                <div className="recycling-item">
                    <span>Fiber Recycling</span>
                    <strong>{recycle.fiber_recycling}</strong>
                </div>

                <div className="recycling-item">
                    <span>Mechanical Recycling</span>
                    <strong>{recycle.mechanical_recycling}</strong>
                </div>

                <div className="recycling-item">
                    <span>Chemical Recycling</span>
                    <strong>{recycle.chemical_recycling}</strong>
                </div>

                <div className="recycling-item">
                    <span>Fabric Reuse</span>
                    <strong>{recycle.fabric_reuse}</strong>
                </div>

                <div className="recycling-item">
                    <span>Industrial Recovery</span>
                    <strong>{recycle.industrial_recovery}</strong>
                </div>

                <div className="recycling-item">
                    <span>Donation</span>
                    <strong>{recycle.donation}</strong>
                </div>

                <div className="recycling-item">
                    <span>Waste Reduction</span>
                    <strong>{recycle.waste_reduction_strategy}</strong>
                </div>

            </div>

            <div className="upcycling-box">

                <h4>
                    <FaLightbulb />
                    Upcycling Suggestions
                </h4>

                <ul>

                    {recycle.upcycling_suggestions.map((item, index) => (

                        <li key={index}>
                            <FaCheckCircle className="tick-icon" />
                            {item}
                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );

}

export default RecyclingCard;