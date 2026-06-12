export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const DONGCO_THANHPHAM_VOI_CONFIG: ChartGroup[] = [
    {
        area: "Thành Phẩm",
        tags: [
            { key: "DONG_DIEN_GAUNANGTHANHPHAM_1_VOI", label: "Dòng điện động cơ gầu nâng 1 thành phẩm lò vôi", color: "#6366f1" },
            { key: "DONG_DIEN_GAUNANGTHANHPHAM_2_VOI", label: "Dòng điện động cơ gầu nâng 2 thành phẩm lò vôi", color: "#22c55e" },
            { key: "DONG_DIEN_GAUNANGTHANHPHAM_3_VOI", label: "Dòng điện động cơ gầu nâng 3 thành phẩm lò vôi", color: "#f97316" },
            { key: "finished_product_1#_cusher_current_feedback", label: "Dòng điện máy nghiền thành phẩm lò vôi 1", color: "#f91674ff" },
            { key: "finished_product_2#_cusher_current_feedback", label: "Dòng điện máy nghiền thành phẩm lò vôi 2", color: "#f93816ff" },
            { key: "finished_product_3#_cusher_current_feedback", label: "Dòng điện máy nghiền thành phẩm lò vôi 3", color: "#6E026F" },
            { key: "DONG_DIEN_GAU_NANG_DA_LOAI_DLM", label: "Gầu nâng đá loại dolomit", color: "#FA891A" },
            { key: "DONG_DIEN_GAU_NANG_1_TP_DLM", label: "Dòng điện động cơ gầu nâng 1 thành phẩm dolomit", color: "#D25353" },
            { key: "DONG_DIEN_GAU_NANG_2_TP_DLM", label: "Dòng điện động cơ gầu nâng 2 thành phẩm dolomit", color: "#2D3C59" },
            { key: "Kiln_finised_product_1#_crusher_current_feedback", label: "Máy nghiền 1 thành phẩm dolomit 1", color: "#4016f9c2" },
            { key: "Kiln_finised_product_2#_crusher_current_feedback", label: "Máy nghiền 1 thành phẩm dolomit 2", color: "#4D2B8C" },
            { key: "AI_Product_1#_bucket_elevator_current_display", label: "Dòng điện động cơ gầu nâng 1 thành phẩm lò vôi quay", color: "#f91616dc" },
            { key: "AI_Product_2#_bucket_elevator_current_display", label: "Dòng điện động cơ gầu nâng 2 thành phẩm lò vôi quay", color: "#831814c5" },
        ]
    },
];
export type Rows = {
    label: string;
}
export type Sections = {
    section: string;
    rows: Rows[];
};

export const DONGCO_THANHPHAM_VOI_SECTION: Sections[] = [
    {
        section: "Thành Phẩm",
        rows: [
            { label: "Dòng điện động cơ gầu nâng 1 thành phẩm lò vôi" },
            { label: "Dòng điện động cơ gầu nâng 2 thành phẩm lò vôi" },
            { label: "Dòng điện động cơ gầu nâng 3 thành phẩm lò vôi" },
            { label: "Dòng điện máy nghiền thành phẩm lò vôi 1" },
            { label: "Dòng điện máy nghiền thành phẩm lò vôi 2" },
            { label: "Dòng điện máy nghiền thành phẩm lò vôi 3" },
            { label: "Gầu nâng đá loại dolomit" },
            { label: "Dòng điện động cơ gầu nâng 1 thành phẩm dolomit" },
            { label: "Dòng điện động cơ gầu nâng 2 thành phẩm dolomit" },
            { label: "Máy nghiền 1 thành phẩm dolomit 1" },
            { label: "Máy nghiền 1 thành phẩm dolomit 2" },
            { label: "Dòng điện động cơ gầu nâng 1 thành phẩm lò vôi quay" },
            { label: "Dòng điện động cơ gầu nâng 2 thành phẩm lò vôi quay" },
        ]
    },  
]

