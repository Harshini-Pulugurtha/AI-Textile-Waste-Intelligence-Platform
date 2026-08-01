class SustainabilityService:
    """
Environmental Reference Factors

The following values represent approximate environmental
savings achieved by recovering or reusing 1 kg of textile
material instead of producing virgin textile.

These estimates are derived from published Life Cycle
Assessment (LCA) studies and sustainability reports
(Textile Exchange, Higg MSI, Ecoinvent, IWTO, Water
Footprint Network and other literature).

The values are intended for educational decision-support
and sustainability estimation within the Textile Waste
Intelligence Platform.
"""

    MATERIAL_DATA = {

    "Cotton": {
        "co2_saved": 5.2,
        "water_saved": 8500,
        "landfill_saved": 1.0,
        "resource_conservation": "High",
        "score": 92
    },

    "Polyester": {
        "co2_saved": 5.4,
        "water_saved": 95,
        "landfill_saved": 1.0,
        "resource_conservation": "Medium",
        "score": 85
    },

    "Polyamide": {
        "co2_saved": 6.8,
        "water_saved": 120,
        "landfill_saved": 1.0,
        "resource_conservation": "Medium",
        "score": 87
    },

    "Acrylic": {
        "co2_saved": 8.3,
        "water_saved": 180,
        "landfill_saved": 1.0,
        "resource_conservation": "Medium",
        "score": 84
    },

    "Wool": {
        "co2_saved": 19.5,
        "water_saved": 1450,
        "landfill_saved": 1.0,
        "resource_conservation": "High",
        "score": 88
    },

    "Silk": {
        "co2_saved": 155.0,
        "water_saved": 1100,
        "landfill_saved": 1.0,
        "resource_conservation": "Very High",
        "score": 95
    },

    "Denim": {
        "co2_saved": 6.0,
        "water_saved": 9200,
        "landfill_saved": 1.0,
        "resource_conservation": "High",
        "score": 94
    },

    "Linen": {
        "co2_saved": 4.8,
        "water_saved": 6500,
        "landfill_saved": 1.0,
        "resource_conservation": "High",
        "score": 91
    },

    "Rayon": {
        "co2_saved": 4.6,
        "water_saved": 2100,
        "landfill_saved": 1.0,
        "resource_conservation": "High",
        "score": 88
    },

    "Mixed Fabrics": {
        "co2_saved": 4.0,
        "water_saved": 1700,
        "landfill_saved": 1.0,
        "resource_conservation": "Medium",
        "score": 80
    }

}

    

    def calculate(self, material, recommendation):

        material_name = material.get("label", "Cotton")

        data = self.MATERIAL_DATA.get(
            material_name,
            self.MATERIAL_DATA["Cotton"]
        )

        score = data["score"]

        action = recommendation.get(
            "recommended_action",
            ""
        )

        if action == "Reuse":
            score += 5

        elif action == "Recycle":
            score += 4

        elif action == "Repair":
            score += 3

        elif action == "Donate":
            score += 4

        elif action == "Upcycle":
            score += 5

        elif action == "Dispose":
            score -= 5

        if score > 100:
            score = 100

        if score >= 90:
            rating = "Excellent"

        elif score >= 80:
            rating = "Good"

        elif score >= 70:
            rating = "Average"

        else:
            rating = "Poor"

        return {

            

                "score": score,

                "environmental_rating": rating,

                "co2_saved": data["co2_saved"],

                "water_saved": data["water_saved"],

                "landfill_saved": data["landfill_saved"],

                "resource_conservation": data[
                    "resource_conservation"
                ]

            

        }