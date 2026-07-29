from sqlalchemy.orm import Session

from app.models import AnalysisHistory


class HistoryService:

    def __init__(self, db: Session):
        self.db = db

    def save_analysis(
    self,
    image_name: str,
    material: dict,
    damage: dict,
    quality: dict,
    recommendation: dict,
    material_classification: dict,
    waste_classification: dict,
    recycling_engine: dict,
    sustainability: dict,
    environmental_analytics: dict,
    analyzed_by: int = None
):
        """
        Save AI analysis results into the database.
        """

        record = AnalysisHistory(

            image_name=image_name,

            material=material["label"],
            material_confidence=material["confidence"],

            damage=damage["label"],
            damage_confidence=damage["confidence"],

            quality_score=quality["quality_score"],
            quality_grade=quality["quality_grade"],

            recommended_action=recommendation.get("recommended_action", "Unknown"),
            recyclability=recommendation["recyclability"],
            environmental_impact=recommendation.get("environmental_impact", "Unknown"),
            estimated_value=recommendation.get("estimated_value", "Unknown"),
            priority=recommendation.get("priority", "N/A"),

            # ==========================
            # Material Classification
            # ==========================

            material_category=material_classification["material_category"],
            fiber_composition=material_classification["fiber_composition"],
            blend_identification=material_classification["blend_identification"],
            fabric_texture=material_classification["fabric_texture"],
            fabric_pattern=material_classification["fabric_pattern"],

            # ==========================
            # Waste Classification
            # ==========================

            waste_category=waste_classification["category"],
            reuse_potential=waste_classification["reuse_potential"],
            contamination_detection=waste_classification["contamination_detection"],
            disposal_recommendation=waste_classification["disposal_recommendation"],
            compostable=str(waste_classification["compostable"]),
            hazardous_textile=str(waste_classification["hazardous_textile"]),

            # ==========================
            # Recycling Recommendation
            # ==========================

            recommended_method=recycling_engine["recommended_method"],
            fiber_recycling=recycling_engine["fiber_recycling"],
            mechanical_recycling=recycling_engine["mechanical_recycling"],
            chemical_recycling=recycling_engine["chemical_recycling"],
            fabric_reuse=recycling_engine["fabric_reuse"],
            industrial_recovery=recycling_engine["industrial_recovery"],
            donation=recycling_engine["donation"],
            waste_reduction_strategy=recycling_engine["waste_reduction_strategy"],
            upcycling_suggestions=", ".join(
                recycling_engine["upcycling_suggestions"]
            ),

            # ==========================
            # Sustainability Intelligence
            # ==========================

            sustainability_score=sustainability["score"],
            environmental_rating=sustainability["environmental_rating"],
            co2_saved=sustainability["co2_saved"],
            water_saved=sustainability["water_saved"],
            landfill_saved=sustainability["landfill_saved"],
            resource_conservation=sustainability["resource_conservation"],

            # ==========================
            # Environmental Analytics
            # ==========================

            carbon_reduction=environmental_analytics["carbon_reduction"],
            water_conservation=environmental_analytics["water_conservation"],
            landfill_diversion=environmental_analytics["landfill_diversion"],
            eco_rating=environmental_analytics["eco_rating"],

            analyzed_by=analyzed_by
        )

        self.db.add(record)
        self.db.commit()
        self.db.refresh(record)

        return record

    def get_all_history(self):
        """
        Return all analysis records.
        """

        return (
            self.db.query(AnalysisHistory)
            .order_by(AnalysisHistory.analyzed_at.desc())
            .all()
        )

    def get_history_by_id(self, history_id: int):
        """
        Return a single analysis record.
        """

        return (
            self.db.query(AnalysisHistory)
            .filter(AnalysisHistory.id == history_id)
            .first()
        )

    def delete_history(self, history_id: int):
        """
        Delete one analysis record.
        """

        record = (
            self.db.query(AnalysisHistory)
            .filter(AnalysisHistory.id == history_id)
            .first()
        )

        if record:
            self.db.delete(record)
            self.db.commit()
            return True

        return False

    def get_dashboard_summary(self):
        """
        Return dashboard statistics.
        """

        total = self.db.query(AnalysisHistory).count()

        reusable = (
            self.db.query(AnalysisHistory)
            .filter(
                AnalysisHistory.recommended_action.like("%Reuse%")
            )
            .count()
        )

        recyclable = (
            self.db.query(AnalysisHistory)
            .filter(
                AnalysisHistory.recommended_action.like("%Recycle%")
            )
            .count()
        )

        defective = (
            self.db.query(AnalysisHistory)
            .filter(
                AnalysisHistory.damage == "Defective"
            )
            .count()
        )

        clean = (
            self.db.query(AnalysisHistory)
            .filter(
                AnalysisHistory.damage == "Clean"
            )
            .count()
        )

        return {
            "total_analyses": total,
            "reusable_items": reusable,
            "recyclable_items": recyclable,
            "clean_items": clean,
            "defective_items": defective
        }

    def get_material_distribution(self):
        """
        Material-wise distribution.
        """

        materials = {}

        rows = self.db.query(AnalysisHistory).all()

        for row in rows:
            materials[row.material] = materials.get(row.material, 0) + 1

        return materials

    def get_damage_distribution(self):
        """
        Damage-wise distribution.
        """

        damage = {}

        rows = self.db.query(AnalysisHistory).all()

        for row in rows:
            damage[row.damage] = damage.get(row.damage, 0) + 1

        return damage

    def get_quality_distribution(self):
        """
        Quality grade distribution.
        """

        grades = {}

        rows = self.db.query(AnalysisHistory).all()

        for row in rows:
            grades[row.quality_grade] = grades.get(row.quality_grade, 0) + 1

        return grades

    def get_recommendation_distribution(self):
        """
        Recommendation distribution.
        """

        recommendations = {}

        rows = self.db.query(AnalysisHistory).all()

        for row in rows:
            action = row.recommended_action
            recommendations[action] = recommendations.get(action, 0) + 1

        return recommendations