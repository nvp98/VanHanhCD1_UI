export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};
export const MANGQUANG12_CONFIG: ChartGroup[] = [
    {
        area: "Máng quặng #1",
        tags: [
            { key: "TI1401AM", label: "Nhiệt độ đầu khói vào", color: "#6366f1" },
            { key: "TI1411AM", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#85409D" },
            { key: "TI1412AM", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#fd6233ff" },
            { key: "ZI1411aAM", label: "Độ rung gối đỡ quạt gió trước X", color: "#000080" },
            { key: "ZI1411bAM", label: "Độ rung gối đỡ quạt gió trước Y", color: "#FF0000" },
            { key: "ZI1412aAM", label: "Độ rung gối đỡ quạt gió sau X", color: "#393D7E" },
            { key: "ZI1412bAM", label: "Độ rung gối đỡ quạt gió sau Y", color: "#FF6D1F" },
        ]
    },
    {
        area: "Máng quặng #2",
        tags: [
            { key: "TI1401BM", label: "Nhiệt độ đầu khói vào", color: "#6366f1" },
            { key: "TI1411BM", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#7132CA" },
            { key: "TI1412BM", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#301CA0" },
            { key: "ZI1411aBM", label: "Độ rung gối đỡ quạt gió trước X", color: "#842A3B" },
            { key: "ZI1411bBM", label: "Độ rung gối đỡ quạt gió trước Y", color: "#842A3B" },
            { key: "ZI1412aBM", label: "Độ rung gối đỡ quạt gió sau X", color: "#800017ff" },
            { key: "ZI1412bBM", label: "Độ rung gối đỡ quạt gió sau Y", color: "#FF0000" },
        ]
    },
];

type RowType = {
    label: string;
    children?: string[];
};

type SectionType = {
    section: string;
    rows?: RowType[];
};

export const MANGQUANG1_SECTION: SectionType[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Đầu khói vào" },
            { label: "Gối đỡ quạt gió", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ quạt gió", children: ["Trước x/y", "Sau x/y"] },
        ],
    },
]

export const MANGQUANG2_SECTION = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây" },
            { label: "Gối đỡ động cơ", children: ["Trước", "Sau"] },
            { label: "Gối đỡ quạt", children: ["Trước", "Sau"] }
        ],
    },
    {
        section: "Độ rung",
        rows: [
            { label: "Gối đỡ quạt gió", children: ["Trước x/y", "Sau x/y"] },
        ],
    },
]

