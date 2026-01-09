export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const DONGCOTHIEUKET1_CONFIG: ChartGroup[] = [
    {
        area: "Trộn 1",
        tags: [
            { key: "TI404aAM", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "TI404bAM", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "TI404cAM", label: "Nhiệt độ cuộn dây C", color: "#f97316" },
            { key: "TI402AM", label: "Nhiệt độ gối trước động cơ", color: "#f91674ff" },
            { key: "TI403AM", label: "Nhiệt độ gối sau động cơ", color: "#f93816ff" },
            { key: "DONG_DC_TRON1", label: "Dòng điện", color: "#fc6b03ff" },
        ]
    },
    {
        area: "Trộn 2",
        tags: [
            { key: "TI504aAM", label: "Nhiệt độ cuộn dây A", color: "#63c9f1ff" },
            { key: "TI504bAM", label: "Nhiệt độ cuộn dây B", color: "#FD7979" },
            { key: "TI504cAM", label: "Nhiệt độ cuộn dây C", color: "#301CA0" },
            { key: "TI502AM", label: "Nhiệt độ gối trước động cơ", color: "#050E3C" },
            { key: "TI503AM", label: "Nhiệt độ gối sau động cơ", color: "#6DC3BB" },
            { key: "DONG_DC_TRON2", label: "Dòng điện", color: "#FF5555" },
        ]
    },
    {
        area: "S1",
        tags: [
            { key: "STARTOR_1S1_U_OUT", label: "Nhiệt độ cuộn dây A", color: "#360185" },
            { key: "STARTOR_1S1_V_OUT", label: "Nhiệt độ cuộn dây B", color: "#2263c5ff" },
            { key: "STARTOR_1S1_W_OUT", label: "Nhiệt độ cuộn dây C", color: "#1652f9ff" },
            { key: "STARTOR_1S1_GT_OUT", label: "Nhiệt độ gối trước động cơ", color: "#0638c4ff" },
            { key: "STARTOR_1S1_GS_OUT", label: "Nhiệt độ gối sau động cơ", color: "#055aa0ff" },
            { key: "DONG_BT_1S1", label: "Dòng điện", color: "#16f9a2ff" },
        ]
    },
    {
        area: "Làm mát vòng 1",
        tags: [
            { key: "TI715aAM", label: "Nhiệt độ cuộn dây A", color: "#3F9AAE" },
            { key: "TI715bAM", label: "Nhiệt độ cuộn dây B", color: "#c52d22c5" },
            { key: "TI715cAM", label: "Nhiệt độ cuộn dây C", color: "#16f9299d" },
            { key: "TI713AM", label: "Nhiệt độ gối trước động cơ", color: "#06c416b4" },
            { key: "TI714AM", label: "Nhiệt độ gối sau động cơ", color: "#05a093cc" },
            { key: "TI711AM", label: "Nhiệt độ gối trước quạt", color: "#f116f9b7" },
            { key: "TI712AM", label: "Nhiệt độ gối trước quạt", color: "#4016f9c2" },
            { key: "VI711aAM", label: "Độ rung trước quạt(X)", color: "#f91680b4" },
            { key: "VI711bAM", label: "Độ rung trước quạt(Y)", color: "#4016f9c2" },
            { key: "VI712aAM", label: "Độ rung sau quạt(X)", color: "#4D2B8C" },
            { key: "VI712bAM", label: "Độ rung sau quạt(Y)", color: "#f91616dc" },
            { key: "DONG_DCQ_LMV1", label: "Dòng điện", color: "#831814c5" },
        ]
    },
    {
        area: "Làm mát vòng 2",
        tags: [
            { key: "TI725aAM", label: "Nhiệt độ cuộn dây A", color: "#63c9f1ff" },
            { key: "TI725bAM", label: "Nhiệt độ cuộn dây B", color: "#2263c5ff" },
            { key: "TI725cAM", label: "Nhiệt độ cuộn dây C", color: "#1652f9ff" },
            { key: "TI723AM", label: "Nhiệt độ gối trước động cơ", color: "#0638c4ff" },
            { key: "TI724AM", label: "Nhiệt độ gối sau động cơ", color: "#1283dfff" },
            { key: "TI721AM", label: "Nhiệt độ gối trước quạt", color: "#f95e16cc" },
            { key: "TI722AM", label: "Nhiệt độ gối trước quạt", color: "#000080" },
            { key: "VI721aAM", label: "Độ rung trước quạt(X)", color: "#b5c207ff" },
            { key: "VI721bAM", label: "Độ rung trước quạt(Y)", color: "#9E2A3A" },
            { key: "VI722aAM", label: "Độ rung sau quạt(X)", color: "#f91d16d5" },
            { key: "VI722bAM", label: "Độ rung sau quạt(Y)", color: "#16f9a2cb" },
            { key: "DONG_DCQ_LMV2", label: "Dòng điện", color: "#FDB5CE" },
        ]
    },

    {
        area: "Làm mát vòng 3",
        tags: [
            { key: "TI735aAM", label: "Nhiệt độ cuộn dây A", color: "#28f755ff" },
            { key: "TI735bAM", label: "Nhiệt độ cuộn dây B", color: "#0dce94ff" },
            { key: "TI735cAM", label: "Nhiệt độ cuộn dây C", color: "#7816f9d7" },
            { key: "TI733AM", label: "Nhiệt độ gối trước động cơ", color: "#eb07b2ff" },
            { key: "TI734AM", label: "Nhiệt độ gối sau động cơ", color: "#1305dfff" },
            { key: "TI731AM", label: "Nhiệt độ gối trước quạt", color: "#f116f9dc" },
            { key: "TI732AM", label: "Nhiệt độ gối trước quạt", color: "#E9762B" },
            { key: "VI731aAM", label: "Độ rung trước quạt(X)", color: "#71f916c5" },
            { key: "VI731bAM", label: "Độ rung trước quạt(Y)", color: "#f99716c0" },
            { key: "VI732aAM", label: "Độ rung sau quạt(X)", color: "#f91616e8" },
            { key: "VI732bAM", label: "Độ rung sau quạt(Y)", color: "#f91616cb" },
            { key: "DONG_DCQ_LMV3", label: "Dòng điện", color: "#71f916b2" },
        ]
    }, 
    {
        area: "Làm mát vòng 4",
        tags: [
            { key: "TI745aAM", label: "Nhiệt độ cuộn dây A", color: "#63f17b62" },
            { key: "TI745bAM", label: "Nhiệt độ cuộn dây B", color: "#2263c5ff" },
            { key: "TI745cAM", label: "Nhiệt độ cuộn dây C", color: "#1652f9ff" },
            { key: "TI743AM", label: "Nhiệt độ gối trước động cơ", color: "#017e9494" },
            { key: "TI744AM", label: "Nhiệt độ gối sau động cơ", color: "#008cffff" },
            { key: "TI741AM", label: "Nhiệt độ gối trước quạt", color: "#00f064ff" },
            { key: "TI742AM", label: "Nhiệt độ gối trước quạt", color: "#16f9a2ff" },
            { key: "VI741aAM", label: "Độ rung trước quạt(X)", color: "#AA2B1D" },
            { key: "VI741bAM", label: "Độ rung trước quạt(Y)", color: "#00B7B5" },
            { key: "VI742aAM", label: "Độ rung sau quạt(X)", color: "#0dbb78ff" },
            { key: "VI742bAM", label: "Độ rung sau quạt(Y)", color: "#fd0000ff" },
            { key: "DONG_DCQ_LMV4", label: "Dòng điện", color: "#ff00b3ff" },
        ]
    },
    {
        area: "Làm mát vòng 5",
        tags: [
            { key: "TI755aAM", label: "Nhiệt độ cuộn dây A", color: "#2eb140ff" },
            { key: "TI755bAM", label: "Nhiệt độ cuộn dây B", color: "#c51212ff" },
            { key: "TI755cAM", label: "Nhiệt độ cuộn dây C", color: "#9b0d0dff" },
            { key: "TI753AM", label: "Nhiệt độ gối trước động cơ", color: "#2b59daff" },
            { key: "TI754AM", label: "Nhiệt độ gối sau động cơ", color: "#46a8f8ff" },
            { key: "TI751AM", label: "Nhiệt độ gối trước quạt", color: "#cb1ad1ff" },
            { key: "TI752AM", label: "Nhiệt độ gối trước quạt", color: "#6AECE1" },
            { key: "VI751aAM", label: "Độ rung trước quạt(X)", color: "#12fca2ff" },
            { key: "VI751bAM", label: "Độ rung trước quạt(Y)", color: "#020202ff" },
            { key: "VI752aAM", label: "Độ rung sau quạt(X)", color: "#32ac27ff" },
            { key: "VI752bAM", label: "Độ rung sau quạt(Y)", color: "rgba(16, 114, 76, 1)" },
            { key: "DONG_DCQ_LMV5", label: "Dòng điện", color: "#1411dbff" },
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

export const DONGCOTHIEUKET1_SECTION: Sections[] = [
    {
        section: "Trộn 1",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Trộn 2",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "S1",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Làm mát vòng 1",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung trước quạt(X)" },
            { label: "Độ rung trước quạt(Y)" },
            { label: "Độ rung sau quạt(X)" },
            { label: "Độ rung sau quạt(Y)" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Làm mát vòng 2",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung trước quạt(X)" },
            { label: "Độ rung trước quạt(Y)" },
            { label: "Độ rung sau quạt(X)" },
            { label: "Độ rung sau quạt(Y)" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Làm mát vòng 3",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung trước quạt(X)" },
            { label: "Độ rung trước quạt(Y)" },
            { label: "Độ rung sau quạt(X)" },
            { label: "Độ rung sau quạt(Y)" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Làm mát vòng 4",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung trước quạt(X)" },
            { label: "Độ rung trước quạt(Y)" },
            { label: "Độ rung sau quạt(X)" },
            { label: "Độ rung sau quạt(Y)" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Làm mát vòng 5",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung trước quạt(X)" },
            { label: "Độ rung trước quạt(Y)" },
            { label: "Độ rung sau quạt(X)" },
            { label: "Độ rung sau quạt(Y)" },
            { label: "Dòng điện" },
        ]
    },
]

