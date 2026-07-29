class SustainabilityService:

    MATERIAL_DATA = {

        "Cotton": {
            "co2_saved": 3.2,
            "water_saved": 2700,
            "landfill_saved": 1.8,
            "resource_conservation": "High",
            "score": 92
        },

        "Polyester": {
            "co2_saved": 2.6,
            "water_saved": 1200,
            "landfill_saved": 1.5,
            "resource_conservation": "Medium",
            "score": 85
        },

        "Wool": {
            "co2_saved": 2.9,
            "water_saved": 1800,
            "landfill_saved": 1.7,
            "resource_conservation": "High",
            "score": 88
        },

        "Silk": {
            "co2_saved": 2.1,
            "water_saved": 900,
            "landfill_saved": 1.3,
            "resource_conservation": "Medium",
            "score": 82
        },

        "Denim": {
            "co2_saved": 4.2,
            "water_saved": 3500,
            "landfill_saved": 2.2,
            "resource_conservation": "Very High",
            "score": 94
        },

        "Linen": {
            "co2_saved": 3.0,
            "water_saved": 2200,
            "landfill_saved": 1.9,
            "resource_conservation": "High",
            "score": 90
        },

        "Nylon": {
            "co2_saved": 2.3,
            "water_saved": 1000,
            "landfill_saved": 1.4,
            "resource_conservation": "Medium",
            "score": 81
        },

        "Rayon": {
            "co2_saved": 2.8,
            "water_saved": 1600,
            "landfill_saved": 1.6,
            "resource_conservation": "High",
            "score": 87
        },

        "Acrylic": {
            "co2_saved": 2.4,
            "water_saved": 1400,
            "landfill_saved": 1.5,
            "resource_conservation": "Medium",
            "score": 84
        },

        "Mixed Fabrics": {
            "co2_saved": 2.5,
            "water_saved": 1500,
            "landfill_saved": 1.6,
            "resource_conservation": "Medium",
            "score": 83
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
            score += 3

        elif action == "Repair":
            score += 2

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