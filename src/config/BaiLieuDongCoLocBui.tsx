export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const LOCBUIC1_CONFIG: ChartGroup[] = [
    {
        area: "LỌC BỤI C1",
        tags: [
            { key: "C1_G101_PA_CV", label: "Dòng", color: "#6366f1" },
            { key: "C1_KI101_CV", label: "Góc mở van cửa gió", color: "#22c55e" },
            { key: "C1_PDT_CV", label: "Chênh áp", color: "#f97316" },
            { key: "C1_PT101_CV", label: "Áp suất đầu vào", color: "#1b57fcff" },
            { key: "C1_PT102_CV", label: "Áp suất đầu ra", color: "#85409D" },
            { key: "C1_PT103_CV", label: "Áp suất túi khí", color: "#a306a3ff" },
            { key: "C1_PT104_CV", label: "Áp suất nước tuần hoàn", color: "#000080" },
            { key: "C1_TE101_CV", label: "Nhiệt độ gối đỡ phía trước quạt", color: "#FF0000" },
            { key: "C1_TE102_CV", label: "Nhiệt độ gối đỡ phía sau quạt", color: "#9E2A3A" },
            { key: "C1_TE103_CV", label: "Nhiệt độ gối đỡ phía trước động cơ", color: "#1421dbff" },
            { key: "C1_TE104_CV", label: "Nhiệt độ gối đỡ phía sau động cơ", color: "#fc7323ff" },
            { key: "C1_TE105_CV", label: "Nhiệt độ cuộn dây pha A", color: "#393D7E" },
            { key: "C1_TE106_CV", label: "Nhiệt độ cuộn dây pha B", color: "#FF3F7F" },
            { key: "C1_TE107_CV", label: "Nhiệt độ cuộn dây pha C", color: "#FFC400" },
            { key: "C1_VT101_CV", label: "Độ rung gối đỡ phía trước quạt", color: "#CC561E" },
            { key: "C1_VT102_CV", label: "Độ rung gối đỡ phía sau quạt", color: "#f97316" },
            { key: "C1_VT103_CV", label: "Độ rung gối đỡ phía trước động cơ", color: "#005461" },
            { key: "C1_VT104_CV", label: "Độ rung gối đỡ phía sau động cơ", color: "#CF0F0F" },

        ]
    },
];

export const LOCBUIC2_CONFIG: ChartGroup[] = [
    {
        area: "LỌC BỤI C2",
        tags: [
            { key: "C2_G101_PA_CV", label: "Dòng", color: "#6366f1" },
            { key: "C2_KI101_CV", label: "Góc mở van cửa gió", color: "#22c55e" },
            { key: "C2_PDT_CV", label: "Chênh áp", color: "#f97316" },
            { key: "C2_PT101_CV", label: "Áp suất đầu vào", color: "#1b57fcff" },
            { key: "C2_PT102_CV", label: "Áp suất đầu ra", color: "#85409D" },
            { key: "C2_PT103_CV", label: "Áp suất túi khí", color: "#a306a3ff" },
            { key: "C2_PT104_CV", label: "Áp suất nước tuần hoàn", color: "#000080" },
            { key: "C2_TE101_CV", label: "Nhiệt độ gối đỡ phía trước quạt", color: "#FF0000" },
            { key: "C2_TE102_CV", label: "Nhiệt độ gối đỡ phía sau quạt", color: "#9E2A3A" },
            { key: "C2_TE103_CV", label: "Nhiệt độ gối đỡ phía trước động cơ", color: "#1421dbff" },
            { key: "C2_TE104_CV", label: "Nhiệt độ gối đỡ phía sau động cơ", color: "#360185" },
            { key: "C2_TE105_CV", label: "Nhiệt độ cuộn dây pha A", color: "#FF3F7F" },
            { key: "C2_TE106_CV", label: "Nhiệt độ cuộn dây pha B", color: "#f97316" },
            { key: "C2_TE107_CV", label: "Nhiệt độ cuộn dây pha C", color: "#FFC400" },
            { key: "C2_VT101_CV", label: "Độ rung gối đỡ phía trước quạt", color: "#005461" },
            { key: "C2_VT102_CV", label: "Độ rung gối đỡ phía sau quạt", color: "#CF0F0F" },
            { key: "C2_VT103_CV", label: "Độ rung gối đỡ phía trước động cơ", color: "#360185" },
            { key: "C2_VT104_CV", label: "Độ rung gối đỡ phía sau động cơ", color: "#7132CA" },

        ]
    },
];

export const LOCBUIC3_CONFIG: ChartGroup[] = [
    {
        area: "LỌC BỤI C3",
        tags: [
            { key: "C3_G101_PA_CV", label: "Dòng", color: "#6366f1" },
            { key: "C3_KI101_CV", label: "Góc mở van cửa gió", color: "#22c55e" },
            { key: "C3_PDT_CV", label: "Chênh áp", color: "#f97316" },
            { key: "C3_PT101_CV", label: "Áp suất đầu vào", color: "#1b57fcff" },
            { key: "C3_PT102_CV", label: "Áp suất đầu ra", color: "#85409D" },
            { key: "C3_PT103_CV", label: "Áp suất túi khí", color: "#a306a3ff" },
            { key: "C3_PT104_CV", label: "Áp suất nước tuần hoàn", color: "#000080" },
            { key: "C3_TE101_CV", label: "Nhiệt độ gối đỡ phía trước quạt", color: "#FF0000" },
            { key: "C3_TE102_CV", label: "Nhiệt độ gối đỡ phía sau quạt", color: "#9E2A3A" },
            { key: "C3_TE103_CV", label: "Nhiệt độ gối đỡ phía trước động cơ", color: "#0245aaff" },
            { key: "C3_TE104_CV", label: "Nhiệt độ gối đỡ phía sau động cơ", color: "#005461" },
            { key: "C3_TE105_CV", label: "Nhiệt độ cuộn dây pha A", color: "#CF0F0F" },
            { key: "C3_TE106_CV", label: "Nhiệt độ cuộn dây pha B", color: "#360185" },
            { key: "C3_TE107_CV", label: "Nhiệt độ cuộn dây pha C", color: "#DE1A58" },
            { key: "C3_VT101_CV", label: "Độ rung gối đỡ phía trước quạt", color: "#00c247" },
            { key: "C3_VT102_CV", label: "Độ rung gối đỡ phía sau quạt", color: "#3291B6" },
            { key: "C3_VT103_CV", label: "Độ rung gối đỡ phía trước động cơ", color: "#7132CA" },
            { key: "C3_VT104_CV", label: "Độ rung gối đỡ phía sau động cơ", color: "#301CA0" },

        ]
    },
];

export const LOCBUIC4_CONFIG: ChartGroup[] = [
    {
        area: "LỌC BỤI C4",
        tags: [
            { key: "C4_G101_PA_CV", label: "Dòng", color: "#6366f1" },
            { key: "C4_KI101_CV", label: "Góc mở van cửa gió", color: "#22c55e" },
            { key: "C4_PDT_CV", label: "Chênh áp", color: "#f97316" },
            { key: "C4_PT101_CV", label: "Áp suất đầu vào", color: "#1b57fcff" },
            { key: "C4_PT102_CV", label: "Áp suất đầu ra", color: "#85409D" },
            { key: "C4_PT103_CV", label: "Áp suất túi khí", color: "#a306a3ff" },
            { key: "C4_PT104_CV", label: "Áp suất nước tuần hoàn", color: "#000080" },
            { key: "C4_TE101_CV", label: "Nhiệt độ gối đỡ phía trước quạt", color: "#FF0000" },
            { key: "C4_TE102_CV", label: "Nhiệt độ gối đỡ phía sau quạt", color: "#9E2A3A" },
            { key: "C4_TE103_CV", label: "Nhiệt độ gối đỡ phía trước động cơ", color: "#842A3B" },
            { key: "C4_TE104_CV", label: "Nhiệt độ gối đỡ phía sau động cơ", color: "#700303" },
            { key: "C4_TE105_CV", label: "Nhiệt độ cuộn dây pha A", color: "#301CA0" },
            { key: "C4_TE106_CV", label: "Nhiệt độ cuộn dây pha B", color: "#DE1A58" },
            { key: "C4_TE107_CV", label: "Nhiệt độ cuộn dây pha C", color: "#1421dbff" },
            { key: "C4_VT101_CV", label: "Độ rung gối đỡ phía trước quạt", color: "#005461" },
            { key: "C4_VT102_CV", label: "Độ rung gối đỡ phía sau quạt", color: "#FFC400" },
            { key: "C4_VT103_CV", label: "Độ rung gối đỡ phía trước động cơ", color: "#A3485A" },
            { key: "C4_VT104_CV", label: "Độ rung gối đỡ phía sau động cơ", color: "#301CA0" },

        ]
    },
];

export const LOCBUIC5_CONFIG: ChartGroup[] = [
    {
        area: "LỌC BỤI C5",
        tags: [
            { key: "C5_G101_PA_CV", label: "Dòng", color: "#6366f1" },
            { key: "C5_KI101_CV", label: "Góc mở van cửa gió", color: "#22c55e" },
            { key: "C5_PDT_CV", label: "Chênh áp", color: "#f97316" },
            { key: "C5_PT101_CV", label: "Áp suất đầu vào", color: "#1b57fcff" },
            { key: "C5_PT102_CV", label: "Áp suất đầu ra", color: "#85409D" },
            { key: "C5_PT103_CV", label: "Áp suất túi khí", color: "#a306a3ff" },
            { key: "C5_PT104_CV", label: "Áp suất nước tuần hoàn", color: "#000080" },
            { key: "C5_TE101_CV", label: "Nhiệt độ gối đỡ phía trước quạt", color: "#FF0000" },
            { key: "C5_TE102_CV", label: "Nhiệt độ gối đỡ phía sau quạt", color: "#9E2A3A" },
            { key: "C5_TE103_CV", label: "Nhiệt độ gối đỡ phía trước động cơ", color: "#1421dbff" },
            { key: "C5_TE104_CV", label: "Nhiệt độ gối đỡ phía sau động cơ", color: "#842A3B" },
            { key: "C5_TE105_CV", label: "Nhiệt độ cuộn dây pha A", color: "#301CA0" },
            { key: "C5_TE106_CV", label: "Nhiệt độ cuộn dây pha B", color: "#842A3B" },
            { key: "C5_TE107_CV", label: "Nhiệt độ cuộn dây pha C", color: "#FF0000" },
            { key: "C5_VT101_CV", label: "Độ rung gối đỡ phía trước quạt", color: "rgb(55, 56, 63)" },
            { key: "C5_VT102_CV", label: "Độ rung gối đỡ phía sau quạt", color: "#360185" },
            { key: "C5_VT103_CV", label: "Độ rung gối đỡ phía trước động cơ", color: "#2263c5ff" },
            { key: "C5_VT104_CV", label: "Độ rung gối đỡ phía sau động cơ", color: "#f93816ff" },

        ]
    },
];

type RowType = {
    label: string;
};

type SectionType = {
    section: string;
    rows?: RowType[];
};

export const LOCBUIC1_SECTION: SectionType[] = [
    {
        section: "Dòng"
    },
    {
        section: "Góc mở van cửa gió"
    },
    {
        section: "Chêch áp"
    },
    {
        section: "Áp suất",
        rows: [
            { label: "Đầu vào" },
            { label: "Đầu ra" },
            { label: "Túi khí" },
            { label: "Nước tuần hoàn" },
        ],
    },
    {
        section: "ĐỦ THỜI GIAN 60PH"
    },
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
            { label: "Cuộn dây pha A" },
            { label: "Cuộn dây pha B" },
            { label: "cuộn dây pha C" },
        ],
    },
    {
        section: "THỜI GIAN DỪNG CHẠY LẠI ĐỘNG CƠ QUẠT"
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
        ],
    },
    {
        section: "BÁO ĐẦY THÙNG CHỨA BỤI"
    },
]

export const LOCBUIC2_SECTION: SectionType[] = [
    {
        section: "Dòng"
    },
    {
        section: "Góc mở van cửa gió"
    },
    {
        section: "Chêch áp"
    },
    {
        section: "Áp suất",
        rows: [
            { label: "Đầu vào" },
            { label: "Đầu ra" },
            { label: "Túi khí" },
            { label: "Nước tuần hoàn" },
        ],
    },
    {
        section: "ĐỦ THỜI GIAN 60PH"
    },
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
            { label: "Cuộn dây pha A" },
            { label: "Cuộn dây pha B" },
            { label: "cuộn dây pha C" },
        ],
    },
    {
        section: "THỜI GIAN DỪNG CHẠY LẠI ĐỘNG CƠ QUẠT"
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
        ],
    },
    {
        section: "BÁO ĐẦY THÙNG CHỨA BỤI"
    },
]
export const LOCBUIC3_SECTION: SectionType[] = [
    {
        section: "Dòng"
    },
    {
        section: "Góc mở van cửa gió"
    },
    {
        section: "Chêch áp"
    },
    {
        section: "Áp suất",
        rows: [
            { label: "Đầu vào" },
            { label: "Đầu ra" },
            { label: "Túi khí" },
            { label: "Nước tuần hoàn" },
        ],
    },
    {
        section: "ĐỦ THỜI GIAN 60PH"
    },
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
            { label: "Cuộn dây pha A" },
            { label: "Cuộn dây pha B" },
            { label: "cuộn dây pha C" },
        ],
    },
    {
        section: "THỜI GIAN DỪNG CHẠY LẠI ĐỘNG CƠ QUẠT"
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
        ],
    },
    {
        section: "BÁO ĐẦY THÙNG CHỨA BỤI"
    },
]
export const LOCBUIC4_SECTION: SectionType[] = [
    {
        section: "Dòng"
    },
    {
        section: "Góc mở van cửa gió"
    },
    {
        section: "Chêch áp"
    },
    {
        section: "Áp suất",
        rows: [
            { label: "Đầu vào" },
            { label: "Đầu ra" },
            { label: "Túi khí" },
            { label: "Nước tuần hoàn" },
        ],
    },
    {
        section: "ĐỦ THỜI GIAN 60PH"
    },
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
            { label: "Cuộn dây pha A" },
            { label: "Cuộn dây pha B" },
            { label: "cuộn dây pha C" },
        ],
    },
    {
        section: "THỜI GIAN DỪNG CHẠY LẠI ĐỘNG CƠ QUẠT"
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
        ],
    },
    {
        section: "BÁO ĐẦY THÙNG CHỨA BỤI"
    },
]
export const LOCBUIC5_SECTION: SectionType[] = [
    {
        section: "Dòng"
    },
    {
        section: "Góc mở van cửa gió"
    },
    {
        section: "Chêch áp"
    },
    {
        section: "Áp suất",
        rows: [
            { label: "Đầu vào" },
            { label: "Đầu ra" },
            { label: "Túi khí" },
            { label: "Nước tuần hoàn" },
        ],
    },
    {
        section: "ĐỦ THỜI GIAN 60PH"
    },
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
            { label: "Cuộn dây pha A" },
            { label: "Cuộn dây pha B" },
            { label: "cuộn dây pha C" },
        ],
    },
    {
        section: "THỜI GIAN DỪNG CHẠY LẠI ĐỘNG CƠ QUẠT"
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ phía trước quạt" },
            { label: "Gối đỡ phía sau quạt" },
            { label: "Gối đỡ phía trước động cơ" },
            { label: "Gối đỡ phía sau động cơ" },
        ],
    },
    {
        section: "BÁO ĐẦY THÙNG CHỨA BỤI"
    },
]