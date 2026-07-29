from app.services.material_service import MaterialClassifier
from app.services.damage_service import DamageDetector
from app.services.quality_analysis import QualityAnalyzer
from app.services.recommendation_service import RecommendationService
from app.services.sustainability_service import SustainabilityService
from app.services.environmental_service import EnvironmentalService

class AnalysisService:

    def __init__(self):
        self.material_classifier = MaterialClassifier()
        self.damage_detector = DamageDetector()
        self.quality_analyzer = QualityAnalyzer()
        self.recommendation_service = RecommendationService()
        self.sustainability_service = SustainabilityService()
        self.environmental_service = EnvironmentalService()

    def analyze(self, image_path):

        material = self.material_classifier.predict(image_path)

        damage = self.damage_detector.predict(image_path)

        quality = self.quality_analyzer.analyze(image_path)

        
        recommendation = self.recommendation_service.recommend(
                material,
                damage,
                quality
            )
        sustainability = self.sustainability_service.calculate(
                    material,
                    recommendation
                )
        environmental = self.environmental_service.generate(
                sustainability
            )
        
        print(recommendation)
        return {
            "material": material,
            "damage": damage,
            "quality": quality,
            "recommendation": recommendation,
            "sustainability": sustainability,
            "environmental_analytics": environmental
        }