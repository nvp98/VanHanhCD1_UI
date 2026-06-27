export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};
export const LUYENCOC_MAYNGHIEN_CONFIG: ChartGroup[] = [
    {
        area: "Máy nghiền 1A",
        tags: [
            { key: "1A_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#000080" },
            { key: "1A_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#6366f1" },
            { key: "1A_NDCDA", label: "Nhiệt độ cuộn dây A", color: "#050E3C" },
            { key: "1A_NDCDB", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "1A_NDCDC", label: "Nhiệt độ cuộn dây C", color: "#f97316" },
            { key: "1A_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#f91674ff" },
            { key: "1A_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#f93816ff" },
            { key: "1A_DONGDIEN", label: "Dòng điện", color: "#831814c5" },
            { key: "1A_RUNGDOC", label: "Độ rung dọc", color: "#f116f9dc" },
            { key: "1A_RUNGNGANG", label: "Độ rung ngang", color: "#2D3C59" },
        ]
    },
    {
        area: "Máy nghiền 1B",
        tags: [
            { key: "1B_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#6E026F" },
            { key: "1B_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#f93816ff" },
            { key: "1B_NDCDA", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "1B_NDCDB", label: "Nhiệt độ cuộn dây B", color: "#0638c4ff" },
            { key: "1B_NDCDC", label: "Nhiệt độ cuộn dây C", color: "#8d1601" },
            { key: "1B_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#050E3C" },
            { key: "1B_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#004f61ff" },
            { key: "1B_DONGDIEN", label: "Dòng điện", color: "#360185" },
            { key: "1B_RUNGDOC", label: "Độ rung dọc", color: "#9E2A3A" },
            { key: "1B_RUNGNGANG", label: "Độ rung ngang", color: "#fc6b03ff" },
        ]
    },
    {
        area: "Máy nghiền 1C",
        tags: [
            { key: "1C_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#360185" },
            { key: "1C_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#2263c5ff" },
            { key: "1C_NDCDA", label: "Nhiệt độ cuộn dây A", color: "#1652f9ff" },
            { key: "1C_NDCDB", label: "Nhiệt độ cuộn dây B", color: "#c52d22c5" },
            { key: "1C_NDCDC", label: "Nhiệt độ cuộn dây C", color: "#16f9299d" },
            { key: "1C_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#0609c4b4" },
            { key: "1C_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#f116f9b7" },
            { key: "1C_DONGDIEN", label: "Dòng điện", color: "#883e0a" },
            { key: "1C_RUNGDOC", label: "Độ rung dọc", color: "#0585a5" },
            { key: "1C_RUNGNGANG", label: "Độ rung ngang", color: "#4D2B8C" },
        ]
    },
    {
        area: "Máy nghiền 2A",
        tags: [
            { key: "2A_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#00a6e7ff" },
            { key: "2A_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#2263c5ff" },
            { key: "2A_NDCDA", label: "Nhiệt độ cuộn dây A", color: "#f95e16cc" },
            { key: "2A_NDCDB", label: "Nhiệt độ cuộn dây B", color: "#000080" },
            { key: "2A_NDCDC", label: "Nhiệt độ cuộn dây C", color: "#f93816ff" },
            { key: "2A_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#9E2A3A" },
            { key: "2A_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#f91d16d5" },
            { key: "2A_DONGDIEN", label: "Dòng điện", color: "#f116f9dc" },
            { key: "2A_RUNGDOC", label: "Độ rung dọc", color: "#1652f9ff" },
            { key: "2A_RUNGNGANG", label: "Độ rung ngang", color: "#fc6b03ff" },
        ]
    },
    {
        area: "Máy nghiền 2B",
        tags: [
            { key: "2B_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#BF1A1A" },
            { key: "2B_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#360185" },
            { key: "2B_NDCDA", label: "Nhiệt độ cuộn dây A", color: "#050E3C" },
            { key: "2B_NDCDB", label: "Nhiệt độ cuộn dây B", color: "#004f61ff" },
            { key: "2B_NDCDC", label: "Nhiệt độ cuộn dây C", color: "#c52d22c5" },
            { key: "2B_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#f91674ff" },
            { key: "2B_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#f93816ff" },
            { key: "2B_DONGDIEN", label: "Dòng điện", color: "#4D2B8C" },
            { key: "2B_RUNGDOC", label: "Độ rung dọc", color: "#831814c5" },
            { key: "2B_RUNGNGANG", label: "Độ rung ngang", color: "#00a6e7ff" },
        ]
    },
    {
        area: "Máy nghiền 2C",
        tags: [
            { key: "2C_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#2263c5ff" },
            { key: "2C_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#f95e16cc" },
            { key: "2C_NDCDA", label: "Nhiệt độ cuộn dây A", color: "#000080" },
            { key: "2C_NDCDB", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "2C_NDCDC", label: "Nhiệt độ cuộn dây C", color: "#f116f9dc" },
            { key: "2C_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#9E2A3A" },
            { key: "2C_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#7a004bff" },
            { key: "2C_DONGDIEN", label: "Dòng điện", color: "#005c1fff" },
            { key: "2C_RUNGDOC", label: "Độ rung dọc", color: "#4e0101ff" },
            { key: "2C_RUNGNGANG", label: "Độ rung ngang", color: "#9f2debff" },
        ]
    },
    {
        area: "Máy nghiền 3A",
        tags: [
            { key: "3A_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#7a004bff" },
            { key: "3A_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#9f2debff" },
            { key: "3A_NDCDA", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "3A_NDCDB", label: "Nhiệt độ cuộn dây B", color: "#0c5a29" },
            { key: "3A_NDCDC", label: "Nhiệt độ cuộn dây C", color: "#0245aaff" },
            { key: "3A_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#f017deff" },
            { key: "3A_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#4c0264" },
            { key: "3A_DONGDIEN", label: "Dòng điện", color: "#1B3C53" },
            { key: "3A_RUNGDOC", label: "Độ rung dọc", color: "#6B3F69" },
            { key: "3A_RUNGNGANG", label: "Độ rung ngang", color: "#000B58" },
        ]
    },
    {
        area: "Máy nghiền 3B",
        tags: [
            { key: "3B_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#ED3F27" },
            { key: "3B_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#344F1F" },
            { key: "3B_NDCDA", label: "Nhiệt độ cuộn dây A", color: "#3B0270" },
            { key: "3B_NDCDB", label: "Nhiệt độ cuộn dây B", color: "#B95E82" },
            { key: "3B_NDCDC", label: "Nhiệt độ cuộn dây C", color: "#3E1E68" },
            { key: "3B_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#f91674ff" },
            { key: "3B_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#f93816ff" },
            { key: "3B_DONGDIEN", label: "Dòng điện", color: "#DC143C" },
            { key: "3B_RUNGDOC", label: "Độ rung dọc", color: "#556B2F" },
            { key: "3B_RUNGNGANG", label: "Độ rung ngang", color: "#715A5A" },
        ]
    },
    {
        area: "Máy nghiền 3C",
        tags: [
            { key: "3C_NDGOITRC", label: "Nhiệt độ gối đỡ trước", color: "#FF9A00" },
            { key: "3C_NDGOISAU", label: "Nhiệt độ gối đỡ sau", color: "#FF0066" },
            { key: "3C_NDCDA", label: "Nhiệt độ cuộn dây A", color: "#6A0066" },
            { key: "3C_NDCDB", label: "Nhiệt độ cuộn dây B", color: "#896C6C" },
            { key: "3C_NDCDC", label: "Nhiệt độ cuộn dây C", color: "#C71E64" },
            { key: "3C_NDVBTRC", label: "Nhiệt độ vòng bi trước", color: "#4D2D8C" },
            { key: "3C_NDVBSAU", label: "Nhiệt độ vòng bi sau", color: "#E4004B" },
            { key: "3C_DONGDIEN", label: "Dòng điện", color: "#154D71" },
            { key: "3C_RUNGDOC", label: "Độ rung dọc", color: "#3E0703" },
            { key: "3C_RUNGNGANG", label: "Độ rung ngang", color: "#001BB7" },
        ]
    },

]


export type Rows = {
    label: string;
}
export type Sections = {
    section: string;
    rows: Rows[];
};

export const LUYENCOC_MAYNGHIEN_SECTION: Sections[] = [
    {
        section: "Máy nghiền 1A",
        rows: [
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Dòng điện" },
            { label: "Độ rung dọc" },
            { label: "Độ rung ngang" },
        ]
    },
    {
        section: "Máy nghiền 1B",
        rows: [
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Dòng điện" },
            { label: "Độ rung dọc" },
            { label: "Độ rung ngang" },
        ]
    },
    {
        section: "Máy nghiền 1C",
        rows: [
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Dòng điện" },
            { label: "Độ rung dọc" },
            { label: "Độ rung ngang" },
        ]
    },
    {
        section: "Máy nghiền 2A",
        rows: [
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Dòng điện" },
            { label: "Độ rung dọc" },
            { label: "Độ rung ngang" },
        ]
    },
    {
        section: "Máy nghiền 2B",
        rows: [
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Dòng điện" },
            { label: "Độ rung dọc" },
            { label: "Độ rung ngang" },
        ]
    },
    {
        section: "Máy nghiền 2C",
        rows: [
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Dòng điện" },
            { label: "Độ rung dọc" },
            { label: "Độ rung ngang" },
        ]
    },
    {
        section: "Máy nghiền 3A",
        rows: [
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Dòng điện" },
            { label: "Độ rung dọc" },
            { label: "Độ rung ngang" },
        ]
    },
    {
        section: "Máy nghiền 3B",
        rows: [
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Dòng điện" },
            { label: "Độ rung dọc" },
            { label: "Độ rung ngang" },
        ]
    },
    {
        section: "Máy nghiền 3C",
        rows: [
            { label: "Nhiệt độ gối đỡ trước" },
            { label: "Nhiệt độ gối đỡ sau" },
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ vòng bi trước" },
            { label: "Nhiệt độ vòng bi sau" },
            { label: "Dòng điện" },
            { label: "Độ rung dọc" },
            { label: "Độ rung ngang" },
        ]
    },
]

