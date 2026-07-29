import os
import shutil

from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.services.analysis_service import AnalysisService
from app.services.history_service import HistoryService
from app.services.decision_engine import DecisionEngine

router = APIRouter(
    prefix="/analysis",
    tags=["AI Analysis"]
)

analysis_service = AnalysisService()
decision_engine = DecisionEngine()


@router.post("/analyze")
async def analyze_image(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    # ===============================
    # Create uploads folder
    # ===============================

    os.makedirs("uploads", exist_ok=True)

    file_path = os.path.join(
        "uploads",
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # ===============================
    # AI Analysis
    # ===============================

    result = analysis_service.analyze(file_path)

    # ===============================
    # Decision Engine
    # ===============================

    decision_result = decision_engine.classify(
        material=result["material"],
        damage=result["damage"],
        quality=result["quality"]
    )

    # Merge AI result + Decision Engine
    result.update(decision_result)

    # ===============================
    # Save History
    # ===============================

    history_service = HistoryService(db)

    history_service.save_analysis(
    image_name=file.filename,
    material=result["material"],
    damage=result["damage"],
    quality=result["quality"],
    recommendation=result["recommendation"],
    material_classification=result["material_classification"],
    waste_classification=result["waste_classification"],
    recycling_engine=result["recycling_engine"],
    sustainability=result["sustainability"],
    environmental_analytics=result["environmental_analytics"],
    analyzed_by=None
)

    # ===============================
    # Return Final Result
    # ===============================

    return result