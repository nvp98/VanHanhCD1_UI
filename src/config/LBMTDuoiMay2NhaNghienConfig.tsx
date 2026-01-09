export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const DUOIMAYNHANGHIEN_CONFIG: ChartGroup[] = [
    {
        area: "Đuôi máy 2",
        tags: [
            { key: "TI1301BM", label: "Nhiệt độ đầu khói vào", color: "#6366f1" },
            { key: "TI1315aBM", label: "Nhiệt độ cuộn dây pha A", color: "#22c55e" },
            { key: "TI1315bBM", label: "Nhiệt độ cuộn dây pha B", color: "#f97316" },
            { key: "TI1315cBM", label: "Nhiệt độ cuộn dây pha C", color: "#3823f8ff" },
            { key: "TI1314BM", label: "Nhiệt độ gối đỡ động cơ trước", color: "#85409D" },
            { key: "TI1313BM", label: "Nhiệt độ gối đỡ động cơ sau", color: "#fc7323ff" },
            { key: "TI1311BM", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#000080" },
            { key: "TI1312BM", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#FF0000" },
            { key: "ZI1311aBM", label: "Độ rung gối đỡ quạt gió trước X", color: "#393D7E" },
            { key: "ZI1311bBM", label: "Độ rung gối đỡ quạt gió trước Y", color: "#FF6D1F" },
            { key: "ZI1312aBM", label: "Độ rung gối đỡ quạt gió sau X", color: "#FF3F7F" },
            { key: "ZI1312bBM", label: "Độ rung gối đỡ quạt gió sau Y", color: "#FFC400" },
        ]
    },
    {
        area: "Nhà nghiền",
        tags: [
            { key: "TI1101AM", label: "Nhiệt độ đầu khói vào", color: "#CC561E" },
            { key: "TI1115aAM", label: "Nhiệt độ cuộn dây pha A", color: "#005461" },
            { key: "TI1115bAM", label: "Nhiệt độ cuộn dây pha B", color: "#CF0F0F" },
            { key: "TI1115cAM", label: "Nhiệt độ cuộn dây pha C", color: "#360185" },
            { key: "TI1113AM", label: "Nhiệt độ gối đỡ động cơ trước", color: "#DE1A58" },
            { key: "TI1114AM", label: "Nhiệt độ gối đỡ động cơ sau", color: "#3291B6" },
            { key: "TI1111AM", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#7132CA" },
            { key: "TI1112AM", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#301CA0" },
            { key: "ZI1111aAM", label: "Độ rung gối đỡ quạt gió trước X", color: "#842A3B" },
            { key: "ZI1111bAM", label: "Độ rung gối đỡ quạt gió trước Y", color: "#FF0000" },
            { key: "ZI1112aAM", label: "Độ rung gối đỡ quạt gió sau X", color: "#A3485A" },
            { key: "ZI1112bAM", label: "Độ rung gối đỡ quạt gió sau Y", color: "#D78FEE" },
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

export const DUOIMAY2_SECTION: SectionType[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Đầu khói vào" },
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

export const NHANGHIEN_SECTION = [
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

