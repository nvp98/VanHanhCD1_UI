export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};


export const MANGQUANGVEVIEN_CONFIG: ChartGroup[] = [
    {
        area: "Máng quặng thành phẩm",
        tags: [
            { key: "TI1701M", label: "Nhiệt độ đầu khói vào", color: "#6366f1" },
            { key: "TI1715cM", label: "Nhiệt độ cuộn dây", color: "#22c55e" },
            { key: "TI1713M", label: "Nhiệt độ gối đỡ động cơ trước", color: "#85409D" },
            { key: "TI1714M", label: "Nhiệt độ gối đỡ động cơ sau", color: "#1101ebff" },
            { key: "TI1711M", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#000080" },
            { key: "TI1712M", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#FF0000" },
            { key: "ZI1711aM", label: "Độ rung gối đỡ quạt gió trước X/Y", color: "#393D7E" },
            { key: "ZI1712aM", label: "Độ rung gối đỡ quạt gió sau X/Y", color: "#FF6D1F" },
        ]
    },
    {
        area: "Trạm trung chuyển 2 3",
        tags: [
            { key: "NHIETPHA_C", label: "Nhiệt độ cuộn dây", color: "#CC561E" },
            { key: "NHIET_TRUOC_DONGCO", label: "Nhiệt độ gối đỡ động cơ trước", color: "#DE1A58" },
            { key: "NHIET_SAU_DONGCO", label: "Nhiệt độ gối đỡ động cơ sau", color: "#3291B6" },
            { key: "NHIET_GOITRUOC_QUAT", label: "Nhiệt độ gối đỡ quạt gió trước", color: "#7132CA" },
            { key: "NHIET_GOISAU_QUAT", label: "Nhiệt độ gối đỡ quạt gió sau", color: "#301CA0" },
            { key: "RUNG_GOITRUOC_QUAT", label: "Độ rung gối đỡ quạt gió trước X/Y", color: "#842A3B" },
            { key: "RUNG_GOISAU_QUAT", label: "Độ rung gối đỡ quạt gió sau X/Y", color: "#FF0000" },
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

export const MANGQUANGTP_SECTION: SectionType[] = [
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

export const TRAMTRUNGCHUYEN23_SECTION = [
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

