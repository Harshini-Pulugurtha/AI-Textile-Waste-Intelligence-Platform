export function generateHistoryCSV(item) {

    if (!item) return;

    const rows = [

        ["Section", "Field", "Value"],

        // ==========================
        // Basic Information
        // ==========================

        ["Basic Information", "Image", item.image_name],
        ["Basic Information", "Material", item.material],
        ["Basic Information", "Material Confidence", `${(item.material_confidence * 100).toFixed(1)}%`],
        ["Basic Information", "Damage", item.damage],
        ["Basic Information", "Damage Confidence", `${(item.damage_confidence * 100).toFixed(1)}%`],
        ["Basic Information", "Quality Grade", item.quality_grade],
        ["Basic Information", "Quality Score", item.quality_score],
        ["Basic Information", "Recommendation", item.recommended_action],
        ["Basic Information", "Analysis Date", new Date(item.analyzed_at).toLocaleString()],

        // ==========================
        // Material Classification
        // ==========================

        ["Material Classification", "Material Category", item.material_category],
        ["Material Classification", "Fiber Composition", item.fiber_composition],
        ["Material Classification", "Blend Identification", item.blend_identification],
        ["Material Classification", "Fabric Texture", item.fabric_texture],
        ["Material Classification", "Fabric Pattern", item.fabric_pattern],

        // ==========================
        // Waste Classification
        // ==========================

        ["Waste Classification", "Category", item.waste_category],
        ["Waste Classification", "Recyclability", item.recyclability],
        ["Waste Classification", "Reuse Potential", item.reuse_potential],
        ["Waste Classification", "Contamination Detection", item.contamination_detection],
        ["Waste Classification", "Disposal Recommendation", item.disposal_recommendation],
        ["Waste Classification", "Compostable", item.compostable],
        ["Waste Classification", "Hazardous Textile", item.hazardous_textile],

        // ==========================
        // Recycling Recommendation
        // ==========================

        ["Recycling Recommendation", "Recommended Method", item.recommended_method],
        ["Recycling Recommendation", "Fiber Recycling", item.fiber_recycling],
        ["Recycling Recommendation", "Mechanical Recycling", item.mechanical_recycling],
        ["Recycling Recommendation", "Chemical Recycling", item.chemical_recycling],
        ["Recycling Recommendation", "Fabric Reuse", item.fabric_reuse],
        ["Recycling Recommendation", "Industrial Recovery", item.industrial_recovery],
        ["Recycling Recommendation", "Donation", item.donation],
        ["Recycling Recommendation", "Estimated Value", item.estimated_value],
        ["Recycling Recommendation", "Environmental Impact", item.environmental_impact],
        ["Recycling Recommendation", "Priority", item.priority],
        ["Recycling Recommendation", "Waste Reduction Strategy", item.waste_reduction_strategy],
        ["Recycling Recommendation", "Upcycling Suggestions", item.upcycling_suggestions]

    ];

    const csvContent = rows
        .map(row =>
            row.map(value => `"${String(value ?? "").replace(/"/g, '""')}"`).join(",")
        )
        .join("\n");

    const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `Analysis_Report_${item.id}.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}