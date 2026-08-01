class WasteScoringService:

    def calculate(
        self,
        material,
        damage,
        quality,
        recommendation,
        sustainability
    ):

        # ==========================
        # Recyclability Score (35%)
        # ==========================

        action = recommendation.get("recommended_action", "")

        if action == "Reuse":
            recyclability_score = 100
        elif action == "Recycle":
            recyclability_score = 90
        elif action == "Repair":
            recyclability_score = 75
        else:
            recyclability_score = 40

        # ==========================
        # Reuse Score (20%)
        # ==========================

        damage_label = damage.get("label", "Defective")

        if damage_label == "Clean":
            reuse_score = 100
        else:
            reuse_score = 50

        # ==========================
        # Sustainability Score (20%)
        # ==========================

        sustainability_score = sustainability.get("score", 80)

        # ==========================
        # Material Recovery Score (15%)
        # ==========================

        confidence = material.get("confidence", 0.80)

        material_recovery_score = round(confidence * 100)

        # ==========================
        # Processing Feasibility (10%)
        # ==========================

        quality_grade = quality.get("quality_grade", "C")

        if quality_grade == "A":
            processing_score = 100
        elif quality_grade == "B":
            processing_score = 90
        elif quality_grade == "C":
            processing_score = 75
        elif quality_grade == "D":
            processing_score = 60
        else:
            processing_score = 40

        # ==========================
        # Weighted Circularity Score
        # ==========================

        circularity_score = round(

            recyclability_score * 0.35 +

            reuse_score * 0.20 +

            sustainability_score * 0.20 +

            material_recovery_score * 0.15 +

            processing_score * 0.10

        )

        # ==========================
        # Circularity Category
        # ==========================

        if circularity_score >= 90:
            category = "Excellent Recovery Potential"

        elif circularity_score >= 75:
            category = "High Recovery Potential"

        elif circularity_score >= 60:
            category = "Moderate Recovery Potential"

        elif circularity_score >= 40:
            category = "Limited Recovery Potential"

        else:
            category = "Disposal Recommended"

        return {

            "recyclability_score": recyclability_score,

            "reuse_score": reuse_score,

            "sustainability_score": sustainability_score,

            "material_recovery_score": material_recovery_score,

            "processing_feasibility_score": processing_score,

            "circularity_score": circularity_score,

            "circularity_category": category

        }