import "./MaterialDetailsCard.css";
import { FaInfoCircle } from "react-icons/fa";

function MaterialDetailsCard({ details }) {

    if (!details) return null;

    return (

        <div className="material-details-card">

            <h3>
                <FaInfoCircle />
                Material Details
            </h3>

            <div className="details-grid">

                <div>
                    <span>Fabric Type</span>
                    <strong>{details.fabric_type}</strong>
                </div>

                <div>
                    <span>Category</span>
                    <strong>{details.material_category}</strong>
                </div>

                <div>
                    <span>Fiber Composition</span>
                    <strong>{details.fiber_composition}</strong>
                </div>

                <div>
                    <span>Blend Identification</span>
                    <strong>{details.blend_identification}</strong>
                </div>

                <div>
                    <span>Fabric Texture</span>
                    <strong>{details.fabric_texture}</strong>
                </div>

                <div>
                    <span>Fabric Pattern</span>
                    <strong>{details.fabric_pattern}</strong>
                </div>

            </div>

        </div>

    );

}

export default MaterialDetailsCard;