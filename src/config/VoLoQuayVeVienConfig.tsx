export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const VOLOQUAYVEVIEN_CONFIG: ChartGroup[] = [
    {
        area: "Lò Quay",
        tags: [
            { key: "TI704M", label: "Nhiệt độ Đầu lò", color: "#6366f1" },
            { key: "TI703M", label: "Nhiệt độ Vùng nung", color: "#22c55e" },
            { key: "TI705M", label: "Nhiệt độ Đuôi lò", color: "#f97316" },
            { key: "YY_SETPOINT1", label: "Tốc độ", color: "#f91674ff" },
            { key: "SI801aM", label: "Tốc độ", color: "#f93816ff" },
            { key: "TI701aM", label: "Nhiệt độ vỏ lò điểm nhiệt 1", color: "#1411dbff" },
            { key: "TI701bM", label: "Nhiệt độ vỏ lò điểm nhiệt 2", color: "#075300" },
            { key: "TI701cM", label: "Nhiệt độ vỏ lò điểm nhiệt 3", color: "#32ac27ff" },
            { key: "TI701dM", label: "Nhiệt độ vỏ lò điểm nhiệt 4", color: "#020202ff" },
            { key: "TI701eM", label: "Nhiệt độ vỏ lò điểm nhiệt 5", color: "#cb1ad1ff" },
            { key: "TI701fM", label: "Nhiệt độ vỏ lò điểm nhiệt 6", color: "#9b0d0dff" },
            { key: "TI701gM", label: "Nhiệt độ vỏ lò điểm nhiệt 7", color: "#008cffff" },
            { key: "TI701hM", label: "Nhiệt độ vỏ lò điểm nhiệt 8", color: "#017e9494" },
            
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

export const VOLOQUAYVEVIEN_SECTION: Sections[] = [
    {
        section: "Lò Quay",
        rows: [
            { label: "Nhiệt độ Đầu lò" },
            { label: "Nhiệt độ Vùng nung" },
            { label: "Nhiệt độ Đuôi lò" },
            { label: "Tốc độ" },
            { label: "Tốc độ" },
            { label: "Nhiệt độ vỏ lò điểm nhiệt 1" },
            { label: "Nhiệt độ vỏ lò điểm nhiệt 2" },
            { label: "Nhiệt độ vỏ lò điểm nhiệt 3" },
            { label: "Nhiệt độ vỏ lò điểm nhiệt 4" },
            { label: "Nhiệt độ vỏ lò điểm nhiệt 5" },
            { label: "Nhiệt độ vỏ lò điểm nhiệt 6" },
            { label: "Nhiệt độ vỏ lò điểm nhiệt 7" },
            { label: "Nhiệt độ vỏ lò điểm nhiệt 8" },
        ]
    },

]

