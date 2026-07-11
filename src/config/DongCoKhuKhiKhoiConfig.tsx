export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const DONGCOKHUKHIKHOI_CONFIG: ChartGroup[] = [
    {
        area: "Quạt dẫn scr1",
        tags: [
            { key: "TE1159_AIM", label: "Nhiệt độ cuộn dây A", color: "#3F9AAE" },
            { key: "TE1161_AIM", label: "Nhiệt độ cuộn dây B", color: "#c52d22c5" },
            { key: "TE1163_AIM", label: "Nhiệt độ cuộn dây C", color: "#16f9299d" },
            { key: "TE1157_AIM", label: "Nhiệt độ gối trước động cơ", color: "#06c416b4" },
            { key: "TE1158_AIM", label: "Nhiệt độ gối sau động cơ", color: "#05a093cc" },
            { key: "XE1152X_AIM", label: "Độ rung gối trước động cơ trục (X)", color: "#f116f9b7" },
            { key: "XE1152Y_AIM", label: "Độ rung gối trước động cơ  trục (Y)", color: "#4016f9c2" },
            { key: "XE1153X_AIM", label: "Độ rung gối sau động cơ trục (X)", color: "#f91680b4" },
            { key: "XE1153Y_AIM", label: "Độ rung gối sau động cơ trục (Y)", color: "#4016f9c2" },
            { key: "TE1151_AIM", label: "Nhiệt độ vòng bi trước quạt", color: "#4D2B8C" },
            { key: "TE1153_AIM", label: "Nhiệt độ vòng bi sau quạt", color: "#f91616dc" },
            { key: "TE1155_AIM", label: "Nhiệt độ vòng bi giữa quạt", color: "#230b50" },
            { key: "XE1151X_AIM", label: "Độ rung gối quạt trục (X)", color: "#831814c5" },
            { key: "XE1151Y_AIM", label: "Độ rung gối quạt trục (Y)", color: "#2263c5ff" },
            { key: "AH108_DL_AIM", label: "Dòng điện", color: "#f95e16cc" },
        ]
    },
    {
        area: "Quạt dẫn scr2",
        tags: [
            { key: "TE2159_AIM", label: "Nhiệt độ cuộn dây A", color: "#000080" },
            { key: "TE2161_AIM", label: "Nhiệt độ cuộn dây B", color: "#b5c207ff" },
            { key: "TE2163_AIM", label: "Nhiệt độ cuộn dây C", color: "#9E2A3A" },
            { key: "TE2157_AIM", label: "Nhiệt độ gối trước động cơ", color: "#f91d16d5" },
            { key: "TE2158_AIM", label: "Nhiệt độ gối sau động cơ", color: "#16f9a2cb" },
            { key: "XE2152X_AIM", label: "Độ rung gối trước động cơ trục (X)", color: "#FDB5CE" },
            { key: "XE2152Y_AIM", label: "Độ rung gối trước động cơ  trục (Y)", color: "#28f755ff" },
            { key: "XE2153X_AIM", label: "Độ rung gối sau động cơ trục (X)", color: "#0dce94ff" },
            { key: "XE2153Y_AIM", label: "Độ rung gối sau động cơ trục (Y)", color: "#7816f9d7" },
            { key: "TE2151_AIM", label: "Nhiệt độ vòng bi trước quạt", color: "#eb07b2ff" },
            { key: "TE2153_AIM", label: "Nhiệt độ vòng bi sau quạt", color: "#1305dfff" },
            { key: "TE2155_AIM", label: "Nhiệt độ vòng bi giữa quạt", color: "#f116f9dc" },
            { key: "XE2151X_AIM", label: "Độ rung gối quạt trục (X)", color: "#E9762B" },
            { key: "XE2151Y_AIM", label: "Độ rung gối quạt trục (Y)", color: "#71f916c5" },
            { key: "AH208_DL_AIM", label: "Dòng điện", color: "#f99716c0" },
        ]
    },
    {
        area: "Bơi nước tuần hoàn A",
        tags: [
            { key: "TE1505_AIM", label: "Nhiệt độ cuộn dây U", color: "#63f17b62" },
            { key: "TE1506_AIM", label: "Nhiệt độ cuộn dây V", color: "#2263c5ff" },
            { key: "TE1507_AIM", label: "Nhiệt độ cuộn dây W", color: "#1652f9ff" },
            { key: "TE1508_AIM", label: "Nhiệt độ vào bi dẫn động", color: "#017e9494" },
            { key: "TE1509_AIM", label: "Nhiệt độ vào bi không dẫn động", color: "#008cffff" },
            { key: "AH107_DL_AIM", label: "Dòng điện", color: "#00f064ff" },
        ]
    },
    {
        area: "Bơi nước tuần hoàn B",
        tags: [
            { key: "TE1510_AIM", label: "Nhiệt độ cuộn dây U", color: "#16f9a2ff" },
            { key: "TE1511_AIM", label: "Nhiệt độ cuộn dây V", color: "#AA2B1D" },
            { key: "TE1512_AIM", label: "Nhiệt độ cuộn dây W", color: "#00B7B5" },
            { key: "TE1513_AIM", label: "Nhiệt độ vào bi dẫn động", color: "#0dbb78ff" },
            { key: "TE1514_AIM", label: "Nhiệt độ vào bi không dẫn động", color: "#fd0000ff" },
            { key: "AH206_DL_AIM", label: "Dòng điện", color: "#ff00b3ff" },
        ]
    },
    {
        area: "Bơi nước tuần hoàn C",
        tags: [
            { key: "TE1515_AIM", label: "Nhiệt độ cuộn dây U", color: "#2eb140ff" },
            { key: "TE1516_AIM", label: "Nhiệt độ cuộn dây V", color: "#c51212ff" },
            { key: "TE1517_AIM", label: "Nhiệt độ cuộn dây W", color: "#9b0d0dff" },
            { key: "TE1518_AIM", label: "Nhiệt độ vào bi dẫn động", color: "#2b59daff" },
            { key: "TE1519_AIM", label: "Nhiệt độ vào bi không dẫn động", color: "#46a8f8ff" },
            { key: "AH106_DL_AIM", label: "Dòng điện", color: "#cb1ad1ff" },
        ]
    },
    {
        area: "Bơi nước tuần hoàn D",
        tags: [
            { key: "TE1520_AIM", label: "Nhiệt độ cuộn dây U", color: "#6AECE1" },
            { key: "TE1521_AIM", label: "Nhiệt độ cuộn dây V", color: "#12fca2ff" },
            { key: "TE1522_AIM", label: "Nhiệt độ cuộn dây W", color: "#020202ff" },
            { key: "TE1523_AIM", label: "Nhiệt độ vào bi dẫn động", color: "#32ac27ff" },
            { key: "TE1524_AIM", label: "Nhiệt độ vào bi không dẫn động", color: "#1411dbff" },
            { key: "AH207_DL_AIM", label: "Dòng điện", color: "rgb(5, 3, 122)" },
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

export const DONGCOKHUKHIKHOI_SECTION: Sections[] = [
    {
        section: "Quạt dẫn src1",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Độ rung gối trước động cơ trục (X)" },
            { label: "Độ rung gối trước động cơ  trục (Y)" },
            { label: "Độ rung gối sau động cơ trục (X)" },
            { label: "Độ rung gối sau động cơ trục (Y)" },
            { label: "Nhiệt độ vòng bi trước quạt" },
            { label: "Nhiệt độ vòng bi sau quạt" },
            { label: "Nhiệt độ vòng bi giữa quạt" },
            { label: "Độ rung gối quạt trục (X)" },
            { label: "Độ rung gối quạt trục (Y)" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Quạt dẫn src2",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ gối trước động cơ" },
            { label: "Nhiệt độ gối sau động cơ" },
            { label: "Độ rung gối trước động cơ trục (X)" },
            { label: "Độ rung gối trước động cơ  trục (Y)" },
            { label: "Độ rung gối sau động cơ trục (X)" },
            { label: "Độ rung gối sau động cơ trục (Y)" },
            { label: "Nhiệt độ vòng bi trước quạt" },
            { label: "Nhiệt độ vòng bi sau quạt" },
            { label: "Nhiệt độ vòng bi giữa quạt" },
            { label: "Độ rung gối quạt trục (X)" },
            { label: "Độ rung gối quạt trục (Y)" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơi nước tuần hoàn A",
        rows: [
            { label: "Nhiệt độ cuộn dây U" },
            { label: "Nhiệt độ cuộn dây V" },
            { label: "Nhiệt độ cuộn dây W" },
            { label: "Nhiệt độ vào bi dẫn động " },
            { label: "Nhiệt độ vào bi không dẫn động " },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơi nước tuần hoàn B",
        rows: [
            { label: "Nhiệt độ cuộn dây U" },
            { label: "Nhiệt độ cuộn dây V" },
            { label: "Nhiệt độ cuộn dây W" },
            { label: "Nhiệt độ vào bi dẫn động " },
            { label: "Nhiệt độ vào bi không dẫn động " },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơi nước tuần hoàn C",
        rows: [
            { label: "Nhiệt độ cuộn dây U" },
            { label: "Nhiệt độ cuộn dây V" },
            { label: "Nhiệt độ cuộn dây W" },
            { label: "Nhiệt độ vào bi dẫn động " },
            { label: "Nhiệt độ vào bi không dẫn động " },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Bơi nước tuần hoàn D",
        rows: [
            { label: "Nhiệt độ cuộn dây U" },
            { label: "Nhiệt độ cuộn dây V" },
            { label: "Nhiệt độ cuộn dây W" },
            { label: "Nhiệt độ vào bi dẫn động " },
            { label: "Nhiệt độ vào bi không dẫn động " },
            { label: "Dòng điện" },
        ]
    },
]

