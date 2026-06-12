export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const LAMMATVONG_VEVIEN_CONFIG: ChartGroup[] = [
    {
        area: "Làm mát vòng 1",
        tags: [
            { key: "TI815aM", label: "Nhiệt độ stato động cơ A", color: "#6366f1" },
            { key: "TI815bM", label: "Nhiệt độ stato động cơ B", color: "#22c55e" },
            { key: "TI815cM", label: "Nhiệt độ stato động cơ C", color: "#f97316" },
            { key: "TI814M", label: "Nhiệt độ gối sau động cơ", color: "#f91674ff" },
            { key: "TI813M", label: "Nhiệt độ gối trước động cơ", color: "#f93816ff" },
            { key: "TI811M", label: "Nhiệt độ gối trước quạt", color: "#fc6b03ff" },
            { key: "TI812M", label: "Nhiệt độ gối sau quạt", color: "#63c9f1ff" },
            { key: "VI813aM", label: "Độ rung gối trước động cơ ", color: "#FD7979" },
            { key: "VI813bM", label: "Độ rung gối sau động cơ", color: "#301CA0" },
            { key: "VI811aM", label: "Độ rung gối trước quạt (X)", color: "#050E3C" },
            { key: "VI811bM", label: "Độ rung gối trước quạt (Y)", color: "#6DC3BB" },
            { key: "VI812aM", label: "Độ rung gối sau quạt (X)", color: "#FF5555" },
            { key: "VI812bM", label: "Độ rung gối sau quạt (Y)", color: "#360185" },
            { key: "CT-HF1", label: "Dòng điện", color: "#fc6b03ff" },
        ]
    },
    {
        area: "Làm mát vòng 2",
        tags: [
            { key: "TI825aM", label: "Nhiệt độ stato động cơ A", color: "#2263c5ff" },
            { key: "TI825bM", label: "Nhiệt độ stato động cơ B", color: "#1652f9ff" },
            { key: "TI825cM", label: "Nhiệt độ stato động cơ C", color: "#0638c4ff" },
            { key: "TI824M", label: "Nhiệt độ gối sau động cơ", color: "#055aa0ff" },
            { key: "TI823M", label: "Nhiệt độ gối trước động cơ", color: "#16f9a2ff" },
            { key: "TI822M", label: "Nhiệt độ gối trước quạt", color: "#3F9AAE" },
            { key: "TI821M", label: "Nhiệt độ gối sau quạt", color: "#c52d22c5" },
            { key: "VI823aM", label: "Độ rung gối trước động cơ ", color: "#16f9299d" },
            { key: "VI823bM", label: "Độ rung gối sau động cơ", color: "#4016f9c2" },
            { key: "VI821aM", label: "Độ rung gối trước quạt (X)", color: "#05a093cc" },
            { key: "VI821bM", label: "Độ rung gối trước quạt  (Y)", color: "#F96E5B" },
            { key: "VI822aM", label: "Độ rung gối sau quạt  (X)", color: "#4D2B8C" },
            { key: "VI822bM", label: "Độ rung gối sau  quạt  (Y)", color: "#f91616dc" },
            { key: "CT-HF2", label: "Dòng điện", color: "#831814c5" },
        ]
    },
    {
        area: "Làm mát vòng 3",
        tags: [
            { key: "TI835aM", label: "Nhiệt độ stato động cơ A", color: "#63c9f1ff" },
            { key: "TI835bM", label: "Nhiệt độ stato động cơ B", color: "#2263c5ff" },
            { key: "TI835cM", label: "Nhiệt độ stato động cơ C", color: "#1652f9ff" },
            { key: "TI833M", label: "Nhiệt độ gối sau động cơ", color: "#0638c4ff" },
            { key: "TI834M", label: "Nhiệt độ gối trước động cơ", color: "#1283dfff" },
            { key: "TI832M", label: "Nhiệt độ gối trước quạt", color: "#f95e16cc" },
            { key: "TI831M", label: "Nhiệt độ gối sau quạt", color: "#000080" },
            { key: "VI833aM", label: "Độ rung gối trước động cơ", color: "#b5c207ff" },
            { key: "VI833bM", label: "Độ rung gối sau động cơ", color: "#9E2A3A" },
            { key: "VI831aM", label: "Độ rung gối trước quạt (X)", color: "#f91d16d5" },
            { key: "VI831bM", label: "Độ rung gối trước quạt (Y)", color: "#16f9a2cb" },
            { key: "VI832aM", label: "Độ rung gối sau quạt (X)", color: "#FDB5CE" },
            { key: "VI832bM", label: "Độ rung gối sau quạt (Y)", color: "#28f755ff" },
            { key: "CT-HF3", label: "Dòng điện", color: "#0dce94ff" },
        ]
    },
    {
        area: "Làm mát vòng 4",
        tags: [
            { key: "TI845aM", label: "Nhiệt độ stato động cơ A", color: "#7816f9d7" },
            { key: "TI845bM", label: "Nhiệt độ stato động cơ B", color: "#eb07b2ff" },
            { key: "TI845cM", label: "Nhiệt độ stato động cơ C", color: "#1305dfff" },
            { key: "TI843M", label: "Nhiệt độ gối trước động cơ", color: "#f116f9dc" },
            { key: "TI844M", label: "Nhiệt độ gối sau động cơ", color: "#E9762B" },
            { key: "TI842M", label: "Nhiệt độ gối trước quạt", color: "#71f916c5" },
            { key: "TI841M", label: "Nhiệt độ gối sau quạt", color: "#f99716c0" },
            { key: "VI843aM", label: "Độ rung gối sau động cơ", color: "#f91616e8" },
            { key: "VI843bM", label: "Độ rung gối trước động cơ", color: "#f91616cb" },
            { key: "VI841aM", label: "Độ rung gối trước quạt (X)", color: "#71f916b2" },
            { key: "VI841bM", label: "Độ rung gối trước quạt (Y)", color: "#63f17b62" },
            { key: "VI842aM", label: "Độ rung gối sau quạt (X)", color: "#2263c5ff" },
            { key: "VI842aM", label: "Độ rung gối sau  quạt (Y)", color: "#1652f9ff" },
            { key: "CT-HF4", label: "Dòng điện", color: "#008cffff" },
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

export const LAMMATVONG_VEVIEN_SECTION: Sections[] = [
    {
        section: "Làm mát vòng 1",
        rows: [
            { label: "Nhiệt độ stato động cơ A" },
            { label: "Nhiệt độ stato động cơ B" },
            { label: "Nhiệt độ stato động cơ C" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung gối trước động cơ" },
            { label: "Độ rung gối sau động cơ" },
            { label: "Độ rung gối trước quạt (X)" },
            { label: "Độ rung gối trước quạt  (Y)" },
            { label: "Độ rung gối sau quạt  (X)" },
            { label: "Độ rung gối sau  quạt  (Y)" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Làm mát vòng 2",
        rows: [
            { label: "Nhiệt độ stato động cơ A" },
            { label: "Nhiệt độ stato động cơ B" },
            { label: "Nhiệt độ stato động cơ C" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung gối trước động cơ" },
            { label: "Độ rung gối sau động cơ" },
            { label: "Độ rung gối trước quạt (X)" },
            { label: "Độ rung gối trước quạt  (Y)" },
            { label: "Độ rung gối sau quạt  (X)" },
            { label: "Độ rung gối sau  quạt  (Y)" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Làm mát vòng 3",
        rows: [
            { label: "Nhiệt độ stato động cơ A" },
            { label: "Nhiệt độ stato động cơ B" },
            { label: "Nhiệt độ stato động cơ C" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung gối trước động cơ" },
            { label: "Độ rung gối sau động cơ" },
            { label: "Độ rung gối trước quạt (X)" },
            { label: "Độ rung gối trước quạt  (Y)" },
            { label: "Độ rung gối sau quạt  (X)" },
            { label: "Độ rung gối sau  quạt  (Y)" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Làm mát vòng 4",
        rows: [
            { label: "Nhiệt độ stato động cơ A" },
            { label: "Nhiệt độ stato động cơ B" },
            { label: "Nhiệt độ stato động cơ C" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung gối trước động cơ" },
            { label: "Độ rung gối sau động cơ" },
            { label: "Độ rung gối trước quạt (X)" },
            { label: "Độ rung gối trước quạt  (Y)" },
            { label: "Độ rung gối sau quạt  (X)" },
            { label: "Độ rung gối sau  quạt  (Y)" },
            { label: "Dòng điện" },
        ]
    },
]

