export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const QUATTUANHOANNOIHOI1_CONFIG: ChartGroup[] = [
    {
        area: "Quạt tuần hoàn nồi hơi làm mát vòng",
        tags: [
            { key: "TK_1SWH_AI021", label: "Dòng điện", color: "#6366f1" },
            { key: "TK_1SWH_AI112", label: "Nhiệt độ gối trước  động cơ", color: "#22c55e" },
            { key: "TK_1SWH_AI113", label: "Nhiệt độ gối sau động cơ", color: "#f97316" },
            { key: "TK_1SWH_AI114", label: "Nhiệt độ cuộn dây pha A", color: "#014b61ff" },
            { key: "TK_1SWH_AI115", label: "Nhiệt độ cuộn dây pha B", color: "#85409D" },
            { key: "TK_1SWH_AI116", label: "Nhiệt độ cuộn dây pha C", color: "#bd4500ff" },
            { key: "TK_1SWH_AI117", label: "Độ rung gối trước động cơ", color: "#000080" },
            { key: "TK_1SWH_AI118", label: "Độ rung gối sau động cơ", color: "#FF0000" },
            { key: "TK_1SWH_AI119", label: "Nhiệt độ tủ biến tần", color: "#ff00c8ff" },
            { key: "TK_1SWH_AI120", label: "Nhiệt độ gối trước quạt", color: "#9E2A3A" },
            { key: "TK_1SWH_AI121", label: "Nhiệt độ gối sau quạt", color: "#7a004bff" },
            { key: "TK_1SWH_AI122", label: "Độ rung gối trước bầu quạt (trục X)", color: "#005c1fff" },
            { key: "TK_1SWH_AI123", label: "Độ rung gối trước bầu quạt (trục Y)", color: "#009900ff" },
            { key: "TK_1SWH_AI124", label: "Độ rung gối sau bầu quạt (trục X)", color: "#9f2debff" },
            { key: "TK_1SWH_AI125", label: "Độ rung gối sau bầu quạt (trục Y)", color: "#4e0101ff" },
        ]
    },
];
export type Rows = {
    label: string;
    children?: string[];
}
export type Sections = {
    section: string;
    rows: Rows[];
};

export const QUATTUANHOANNOIHOI1_SECTION: Sections[] = [
       {
        section: "Quạt tuần hoàn nồi hơi làm mát vòng",
        rows: [
            { label: "Dòng điện (A)" },
            { label: "Nhiệt độ gối trước  động cơ (°C)"},
            { label: "Nhiệt độ gối sau động cơ (°C)"},
            { label: "Nhiệt độ cuộn dây pha A (°C)" },
            { label: "Nhiệt độ cuộn dây pha B (°C)" },
            { label: "Nhiệt độ cuộn dây pha C (°C)" },
            { label: "Độ rung gối trước động cơ (mm/s)" },
            { label: "Độ rung gối sau động cơ (mm/s)" },
            { label: "Nhiệt độ tủ biến tần (°C)" },
            { label: "Nhiệt độ gối trước quạt (°C)" },
            { label: "Nhiệt độ gối sau quạt (°C)" },
            { label: "Độ rung gối trước bầu quạt (trục X) (mm/s)" },
            { label: "Độ rung gối trước bầu quạt (trục Y) (mm/s)" },
            { label: "Độ rung gối sau bầu quạt (trục X) (mm/s)" },
            { label: "Độ rung gối sau bầu quạt (trục Y) (mm/s)" },
        ]
    },
]

