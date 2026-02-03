export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const TRUNGTHE_CONFIG: ChartGroup[] = [
    {
        area: "Băng tải 2#BC(TTC M1)",
        tags: [
            { key: "Wharf_2#BC_MD_TE1101_HP", label: "Nhiệt độ cuộn dây Pha A", color: "#6366f1" },
            { key: "Wharf_2#BC_MD_TE1102_HP", label: "Nhiệt độ cuộn dây Pha B", color: "#22c55e" },
            { key: "Wharf_2#BC_MD_TE1103_HP", label: "Nhiệt độ cuộn dây Pha C", color: "#013314" },
            { key: "Wharf_2#BC_MD_TE1104_HP", label: "Nhiệt độ trục động cơ trước", color: "#f97316" },
            { key: "Wharf_2#BC_MD_TE1105_HP", label: "Nhiệt độ trục động cơ sau", color: "#3823f8ff" },
            { key: "Wharf_2#BC_MD_LCB2_A_HP", label: "Dòng điện", color: "#85409D" },
        ]
    },
    {
        area: "Băng tải 3#BC(TTC M1)",
        tags: [
            { key: "Wharf_3#BC_MD_TE1101_HP", label: "Nhiệt độ cuộn dây Pha A", color: "#fc7323ff" },
            { key: "Wharf_3#BC_MD_TE1102_HP", label: "Nhiệt độ cuộn dây Pha B", color: "#000080" },
            { key: "Wharf_3#BC_MD_TE1103_HP", label: "Nhiệt độ cuộn dây Pha C", color: "#FF0000" },
            { key: "Wharf_3#BC_MD_TE1104_HP", label: "Nhiệt độ trục động cơ trước", color: "#393D7E" },
            { key: "Wharf_3#BC_MD_TE1105_HP", label: "Nhiệt độ trục động cơ sau", color: "#FF6D1F" },
            { key: "Wharf_3#BC_MD_LCB2_A_HP", label: "Dòng điện", color: "#FF3F7F" },
        ]
    },
    {
        area: "Băng tải 5#BC(TTC M1)",
        tags: [
            { key: "Wharf_5#BC_MD_TE5101", label: "Nhiệt độ cuộn dây Pha A", color: "#FFC400" },
            { key: "Wharf_5#BC_MD_TE5102", label: "Nhiệt độ cuộn dây Pha B", color: "#CC561E" },
            { key: "Wharf_5#BC_MD_TE5103", label: "Nhiệt độ cuộn dây Pha C", color: "#0c5a28" },
            { key: "Wharf_5#BC_MD_TE5104", label: "Nhiệt độ trục động cơ trước", color: "#f97316" },
            { key: "Wharf_5#BC_MD_TE5105", label: "Nhiệt độ trục động cơ sau", color: "#0245aaff" },
            { key: "Wharf_5#BC_MD_LCB51_A", label: "Dòng điện làm việc Forward", color: "#005461" },
            { key: "Wharf_5#BC_MD_LCB52_A", label: "Dòng điện làm việc Backward", color: "#CF0F0F" },
        ]
    },
    {
        area: "Băng tải  Q101",
        tags: [
            { key: "Q101BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#360185" },
            { key: "Q101BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#DE1A58" },
            { key: "Q101BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#00c247" },
            { key: "Q101BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#3291B6" },
            { key: "Q101BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#7132CA" },
            { key: "Q101BC.I_HMI_PV_CURRENT", label: "Dòng điện", color: "#301CA0" },
            { key: "Q101BC_W.PV", label: "Lưu lượng", color: "#842A3B" },
        ]
    },
    {
        area: "Băng tải  A205",
        tags: [
            { key: "A205BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#FF0000" },
            { key: "A205BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#A3485A" },
            { key: "A205BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#007029" },
            { key: "A205BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#f97316" },
            { key: "A205BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#0245aaff" },
            { key: "A205BC.I_HMI_PV_CURRENT", label: "Lưu lượng", color: "#D78FEE" },
        ]
    },
    {
        area: "Băng tải  A304",
        tags: [
            { key: "A304HV.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#BF1A1A" },
            { key: "A304HV.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#360185" },
            { key: "A304HV.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#2263c5ff" },
            { key: "A304HV.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#1652f9ff" },
            { key: "A304HV.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#f93816ff" },
            { key: "A304BC.I_HMI_PV_CURRENT", label: "Lưu lượng", color: "#050E3C" },
        ]
    },
    {
        area: "Băng tải  A303",
        tags: [
            { key: "A303HV.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#004f61ff" },
            { key: "A303HV.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#c52d22c5" },
            { key: "A303HV.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#187e3d" },
            { key: "A303HV.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#f97316" },
            { key: "A303HV.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#0245aaff" },
            { key: "A303BC.I_HMI_PV_CURRENT", label: "Lưu lượng", color: "#000080" },
        ]
    },
    {
        area: "Băng tải  A305",
        tags: [
            { key: "A305BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#4016f9c2" },
            { key: "A305BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#4D2B8C" },
            { key: "A305BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#f91616dc" },
            { key: "A305BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#f97316" },
            { key: "A305BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#831814c5" },
            { key: "A305BC.I_HMI_PV_CURRENT", label: "Lưu lượng", color: "#00a6e7ff" },
        ]
    },
    {
        area: "Băng tải  AN402",
        tags: [
            { key: "AN402BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#2263c5ff" },
            { key: "AN402BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#f95e16cc" },
            { key: "AN402BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#000080" },
            { key: "AN402BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#f93816ff" },
            { key: "AN402BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#9E2A3A" },
            { key: "AN402BW_Flow", label: "Lưu lượng", color: "#f91d16d5" },
        ]
    },
    {
        area: "Băng tải  AN404",
        tags: [
            { key: "AN404BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#f116f9dc" },
            { key: "AN404BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#1652f9ff" },
            { key: "AN404BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#0f21bd" },
            { key: "AN404BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#f97316" },
            { key: "AN404BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#9E2A3A" },
            { key: "AN502BW_Flow", label: "Lưu lượng", color: "#7a004bff" },
        ]
    },
     {
        area: "Băng tải  AN406",
        tags: [
            { key: "AN406BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#005c1fff" },
            { key: "AN406BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#009900ff" },
            { key: "AN406BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#9f2debff" },
            { key: "AN406BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#f97316" },
            { key: "AN406BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#4e0101ff" },
        ]
    },
    {
        area: "Băng tải  AN502",
        tags: [
            { key: "AN502BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#85409D" },
            { key: "AN502BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#bd4500ff" },
            { key: "AN502BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#9E2A3A" },
            { key: "AN502BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#ff00c8ff" },
            { key: "AN502BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#7a004bff" },
        ]
    },
    {
        area: "Băng tải  AN504",
        tags: [
            { key: "AN504BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#9f2debff" },
            { key: "AN504BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#420707" },
            { key: "AN504BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#0c5a29" },
            { key: "AN504BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#f97316" },
            { key: "AN504BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#0245aaff" },
        ]
    },
    {
        area: "Băng tải  AN506",
        tags: [
            { key: "AN506BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#f017deff" },
            { key: "AN506BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#85409D" },
            { key: "AN506BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#4c0264" },
            { key: "AN506BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#f97316" },
        ]
    },
    {
        area: "Băng tải  A601",
        tags: [
            { key: "A601BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#1B3C53" },
            { key: "A601BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#6B3F69" },
            { key: "A601BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#000B58" },
            { key: "A601BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#ED3F27" },
            { key: "A601BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#344F1F" },
            { key: "A601BC.I_HMI_PV_CURRENT", label: "Dòng điện", color: "#3B0270" },
        ]
    },
     {
        area: "Băng tải  A602",
        tags: [
            { key: "A602BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#B95E82" },
            { key: "A602BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#59AC77" },
            { key: "A602BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#3E1E68" },
            { key: "A602BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#31326F" },
            { key: "A602BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#EF7722" },
            { key: "A602BC.I_HMI_PV_CURRENT", label: "Dòng điện", color: "#DC143C" },
        ]
    },
     {
        area: "Băng tải  C101",
        tags: [
            { key: "C101BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#556B2F" },
            { key: "C101BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#9A3F3F" },
            { key: "C101BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#9112BC" },
            { key: "C101BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#1E93AB" },
            { key: "C101BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#67C090" },
            { key: "C101BC.I_HMI_PV_CURRENT", label: "Dòng điện", color: "#715A5A" },
        ]
    },
    {
        area: "Băng tải  C201",
        tags: [
            { key: "C201BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#FF9A00" },
            { key: "C201BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#FF0066" },
            { key: "C201BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#6A0066" },
            { key: "C201BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#896C6C" },
            { key: "C201BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#640D5F" },
            { key: "C201BC.I_HMI_PV_CURRENT", label: "Dòng điện", color: "#3338A0" },
        ]
    },
     {
        area: "Băng tải  N402",
        tags: [
            { key: "N402BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#541212" },
            { key: "N402BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#C71E64" },
            { key: "N402BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#4D2D8C" },
            { key: "N402BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#E4004B" },
            { key: "N402BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#154D71" },
            { key: "N402BC_Current", label: "Dòng điện", color: "#3E0703" },
        ]
    },
     {
        area: "Băng tải  N501",
        tags: [
            { key: "N501BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#660B05" },
            { key: "N501BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#8C1007" },
            { key: "N501BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#253900" },
            { key: "N501BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#8f5b5c" },
            { key: "N501BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#FF9B00" },
            { key: "N501BC_Current", label: "Dòng điện", color: "#001BB7" },
        ]
    },
     {
        area: "Băng tải  B301",
        tags: [
            { key: "B301BC.PV_TA", label: "Nhiệt độ cuộn dây Pha A", color: "#F08B51" },
            { key: "B301BC.PV_TB", label: "Nhiệt độ cuộn dây Pha B", color: "#1A2A80" },
            { key: "B301BC.PV_TC", label: "Nhiệt độ cuộn dây Pha C", color: "#B9375D" },
            { key: "B301BC.PV_TD1", label: "Nhiệt độ trục động cơ trước", color: "#386641" },
            { key: "B301BC.PV_TD2", label: "Nhiệt độ trục động cơ sau", color: "#00809D" },
            { key: "B301BC.I_HMI_PV_CURRENT", label: "Dòng điện", color: "#932F67" },
        ]
    },

];
export type Rows = {
    label: string;
    children?: string[];
}
export type Sections = {
    section: string;
    rows?: Rows[];
};

export const BANGTAI_2BC_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    }
]

export const BANGTAI_3BC_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    }
]

export const BANGTAI_5BC_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện làm việc Forward"
    },
    {
        section: "Dòng điện làm việc Backward"
    }
]

export const BANGTAI_Q101_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
    {
        section: "Lưu lượng"
    }
]

export const BANGT_AIQ205_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]

export const BANGTAI_A303_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]
export const BANGTAI_A304_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]

export const BANGTAI_A305_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]

export const BANGTAI_AN402_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Lưu lượng"
    },
]

export const BANGTAI_AN404_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Lưu lượng"
    },
]

export const BANGTAI_AN406_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
]

export const BANGTAI_AN502_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
]
export const BANGTAI_AN504_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
]

export const BANGTAI_AN506_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
]

export const BANGTAI_A601_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]

export const BANGTAI_A602_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]

export const BANGTAI_C101_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]

export const BANGTAI_C201_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]

export const BANGTAI_N402_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]

export const BANGTAI_N501_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]

export const BANGTAI_B301_SECTION: Sections[] = [
    {
        section: "Nhiệt độ",
        rows: [
            { label: "Cuộn dây", children: ["Pha A", "Pha B", "Pha C"] },
            { label: "Trục động cơ", children: ["Trước", "Sau"] },
        ],
    },
    {
        section: "Dòng điện"
    },
]