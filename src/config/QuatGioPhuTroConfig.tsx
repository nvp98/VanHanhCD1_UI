export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};
export type Rows = {
    label: string;
    children?: string[];
}
export type Sections = {
    section: string;
    rows: Rows[];
};

export const QUATGIO1_CONFIG: ChartGroup[] = [
    {
        area: "Quạt gió 1",
        tags: [
            { key: "Motor_stator_temperature_1_233A", label: "Nhiệt độ stato động cơ TISA233", color: "#6366f1" },
            { key: "Motor_stator_temperature_2_235A", label: "Nhiệt độ stato động cơ TISA235", color: "#22c55e" },
            { key: "Motor_stator_temperature_3_237A", label: "Nhiệt độ stato động cơ TISA237", color: "#f97316" },
            { key: "Motor_bearing_temperature_in_231A", label: "Nhiệt độ bạc động cơ gối số TISA231", color: "#00c3ffff" },
            { key: "Motor_bearing_temperature_out_232A", label: "Nhiệt độ bạc động cơ gối số TISA232", color: "#85409D" },
            { key: "Blower_bearing_temperature_in_226A", label: "Nhiệt độ bạc quạt gió gối số TISA226", color: "#4900f5ff" },
            { key: "Blower_bearing_temperature_out_227A", label: "Nhiệt độ bạc quạt gió gối số TISA227", color: "#000080" },
            { key: "Motor_vibration_in_X", label: "Độ rung động cơ gối 1 ngang TISA207X", color: "#FF0000" },
            { key: "Motor_vibration_in_Y", label: "Độ rung động cơ gối 1 dọc TISA207Y", color: "#5900ffff" },
            { key: "Motor_vibration_OUT_x", label: "Độ rung động cơ gối 2 ngang TISA208X", color: "#ff00c8ff" },
            { key: "Motor_vibration_OUT_Y", label: "Độ rung động cơ gối 2 dọc TISA208Y", color: "#0044ffff" },
            { key: "Blower_vibration_in_X", label: "Độ rung quạt gió gối 1 ngang TISA205X", color: "#9E2A3A" },
            { key: "Blower_vibration_in_Y", label: "Độ rung quạt gió gối 1 dọc TISA205Y", color: "#014f99ff" },
            { key: "Blower_vibration_out_X", label: "Độ rung quạt gió gối 2 ngang TISA206X", color: "#9E2A3A" },
            { key: "Blower_vibration_out_Y", label: "Độ rung quạt gió gối 2 dọc TISA206Y", color: "#6AECE1" },
        ]
    },
];

export const QUATGIO1_SECTION: Sections[] = [
    {
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Nhiệt độ stato động cơ", children: ["TISA233", "TISA235", "TISA237"] },
            { label: "Nhiệt độ bạc động cơ gối số", children: ["TISA231", "TISA232"] },
            { label: "Nhiệt độ bạc quạt gió gối số", children: ["TISA226", "TISA227"] },
        ],

    },
    {
        section: "Độ rung  (mm/s)",
        rows: [
            { label: "Động cơ gối 1", children: ["Ngang TISA207X", "Dọc TISA207Y"] },
            { label: "Động cơ gối 2", children: ["Ngang TISA208X", "Dọc TISA208Y"] },
            { label: "Quạt gió gối 1", children: ["Ngang TISA205X", "Dọc TISA205Y"] },
            { label: "Quạt gió gối 2", children: ["Ngang TISA206X", "Dọc TISA206Y"] },
        ],
    },

]

export const QUATGIO2_CONFIG: ChartGroup[] = [
    {
        area: "Quạt gió 2",
        tags: [
            { key: "Motor_stator_temperature_1_233A_1", label: "Nhiệt độ stato động cơ TISA233", color: "#6366f1" },
            { key: "Motor_stator_temperature_2_235A_1", label: "Nhiệt độ stato động cơ TISA235", color: "#22c55e" },
            { key: "Motor_stator_temperature_3_237A_1", label: "Nhiệt độ stato động cơ TISA237", color: "#f97316" },
            { key: "Motor_bearing_temperature_in_231A_1", label: "Nhiệt độ bạc động cơ gối số TISA231", color: "#5b08f5ff" },
            { key: "Motor_bearing_temperature_out_232A_1", label: "Nhiệt độ bạc động cơ gối số TISA232", color: "#85409D" },
            { key: "Blower_bearing_temperature_in_226A_1", label: "Nhiệt độ bạc quạt gió gối số TISA226", color: "#ff5f9cff" },
            { key: "Blower_bearing_temperature_out_227A_1", label: "Nhiệt độ bạc quạt gió gối số TISA227", color: "#000080" },
            { key: "Motor_vibration_in_X_1", label: "Độ rung động cơ gối 1 ngang TISA207X", color: "#FF0000" },
            { key: "Motor_vibration_in_Y_1", label: "Độ rung động cơ gối 1 dọc TISA207Y", color: "#5900ffff" },
            { key: "Motor_vibration_OUT_x_1", label: "Độ rung động cơ gối 2 ngang TISA208X", color: "#ff00c8ff" },
            { key: "Motor_vibration_OUT_Y_1", label: "Độ rung động cơ gối 2 dọc TISA208Y", color: "#0044ffff" },
            { key: "Blower_vibration_in_X_1", label: "Độ rung quạt gió gối 1 ngang TISA205X", color: "#9E2A3A" },
            { key: "Blower_vibration_in_Y_1", label: "Độ rung quạt gió gối 1 dọc TISA205Y", color: "#03635bff" },
            { key: "Blower_vibration_out_X_1", label: "Độ rung quạt gió gối 2 ngang TISA206X", color: "#9E2A3A" },
            { key: "Blower_vibration_out_Y_1", label: "Độ rung quạt gió gối 2 dọc TISA206Y", color: "#6AECE1" },
        ]
    },
];

export const QUATGIO2_SECTION: Sections[] = [
    {
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Nhiệt độ stato động cơ", children: ["TISA233", "TISA235", "TISA237"] },
            { label: "Nhiệt độ bạc động cơ gối số", children: ["TISA231", "TISA232"] },
            { label: "Nhiệt độ bạc quạt gió gối số", children: ["TISA226", "TISA227"] },
        ],

    },
    {
        section: "Độ rung  (mm/s)",
        rows: [
            { label: "Động cơ gối 1", children: ["Ngang TISA207X", "Dọc TISA207Y"] },
            { label: "Động cơ gối 2", children: ["Ngang TISA208X", "Dọc TISA208Y"] },
            { label: "Quạt gió gối 1", children: ["Ngang TISA205X", "Dọc TISA205Y"] },
            { label: "Quạt gió gối 2", children: ["Ngang TISA206X", "Dọc TISA206Y"] },
        ],
    },

]

export const QUATGIO3_CONFIG: ChartGroup[] = [
    {
        area: "Quạt gió 3",
        tags: [
            { key: "Motor_stator_temperature_1_233A", label: "Nhiệt độ stato động cơ TISA233", color: "#6366f1" },
            { key: "Motor_stator_temperature_2_235A", label: "Nhiệt độ stato động cơ TISA235", color: "#22c55e" },
            { key: "Motor_stator_temperature_3_237A", label: "Nhiệt độ stato động cơ TISA237", color: "#f97316" },
            { key: "Motor_bearing_temperature_in_231A", label: "Nhiệt độ bạc động cơ gối số TISA231", color: "#006f91ff" },
            { key: "Motor_bearing_temperature_out_239A", label: "Nhiệt độ bạc động cơ gối số TISA232", color: "#85409D" },
            { key: "Blower_bearing_temperature_in_226A", label: "Nhiệt độ bạc quạt gió gối số TISA226", color: "#aa0000ff" },
            { key: "Blower_bearing_temperature_out_227A", label: "Nhiệt độ bạc quạt gió gối số TISA227", color: "#000080" },
            { key: "Motor_vibration_in_X", label: "Độ rung động cơ gối 1 ngang TISA207X", color: "#FF0000" },
            { key: "Motor_vibration_in_Y", label: "Độ rung động cơ gối 1 dọc TISA207Y", color: "#5900ffff" },
            { key: "Motor_vibration_OUT_x", label: "Độ rung động cơ gối 2 ngang TISA208X", color: "#ff00c8ff" },
            { key: "Motor_vibration_OUT_Y", label: "Độ rung động cơ gối 2 dọc TISA208Y", color: "#0044ffff" },
            { key: "Blower_vibration_in_X", label: "Độ rung quạt gió gối 1 ngang TISA205X", color: "#9E2A3A" },
            { key: "Blower_vibration_in_Y", label: "Độ rung quạt gió gối 1 dọc TISA205Y", color: "#06005eff" },
            { key: "Blower_vibration_out_X", label: "Độ rung quạt gió gối 2 ngang TISA206X", color: "#9e1729ff" },
            { key: "Blower_vibration_out_Y", label: "Độ rung quạt gió gối 2 dọc TISA206Y", color: "#01094eff" },
        ]
    },
];

export const QUATGIO3_SECTION: Sections[] = [
    {
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Nhiệt độ stato động cơ", children: ["TISA233", "TISA235", "TISA237"] },
            { label: "Nhiệt độ bạc động cơ gối số", children: ["TISA231", "TISA232"] },
            { label: "Nhiệt độ bạc quạt gió gối số", children: ["TISA226", "TISA227"] },
        ],

    },
    {
        section: "Độ rung  (mm/s)",
        rows: [
            { label: "Động cơ gối 1", children: ["Ngang TISA207X", "Dọc TISA207Y"] },
            { label: "Động cơ gối 2", children: ["Ngang TISA208X", "Dọc TISA208Y"] },
            { label: "Quạt gió gối 1", children: ["Ngang TISA205X", "Dọc TISA205Y"] },
            { label: "Quạt gió gối 2", children: ["Ngang TISA206X", "Dọc TISA206Y"] },
        ],
    },

]


export const QUATGIO4_CONFIG: ChartGroup[] = [
    {
        area: "Quạt gió 4",
        tags: [
            { key: "Motor_stator_temperature_1_233A_1", label: "Nhiệt độ stato động cơ TISA233", color: "#6366f1" },
            { key: "Motor_stator_temperature_2_235A_1", label: "Nhiệt độ stato động cơ TISA235", color: "#22c55e" },
            { key: "Motor_stator_temperature_3_237A_1", label: "Nhiệt độ stato động cơ TISA237", color: "#f97316" },
            { key: "Motor_bearing_temperature_in_231A_1", label: "Nhiệt độ bạc động cơ gối số TISA231", color: "#160092ff" },
            { key: "Motor_bearing_temperature_out_239A_1", label: "Nhiệt độ bạc động cơ gối số TISA232", color: "#85409D" },
            { key: "Blower_bearing_temperature_in_226A_1", label: "Nhiệt độ bạc quạt gió gối số TISA226", color: "#ee3f3fff" },
            { key: "Blower_bearing_temperature_out_227A_1", label: "Nhiệt độ bạc quạt gió gối số TISA227", color: "#000080" },
            { key: "Motor_vibration_in_X_1", label: "Độ rung động cơ gối 1 ngang TISA207X", color: "#FF0000" },
            { key: "Motor_vibration_in_Y_1", label: "Độ rung động cơ gối 1 dọc TISA207Y", color: "#5900ffff" },
            { key: "Motor_vibration_OUT_x_1", label: "Độ rung động cơ gối 2 ngang TISA208X", color: "#ff00c8ff" },
            { key: "Motor_vibration_OUT_Y_1", label: "Độ rung động cơ gối 2 dọc TISA208Y", color: "#0044ffff" },
            { key: "Blower_vibration_in_X_1", label: "Độ rung quạt gió gối 1 ngang TISA205X", color: "#9E2A3A" },
            { key: "Blower_vibration_in_Y_1", label: "Độ rung quạt gió gối 1 dọc TISA205Y", color: "#0015d1ff" },
            { key: "Blower_vibration_out_X_1", label: "Độ rung quạt gió gối 2 ngang TISA206X", color: "#9E2A3A" },
            { key: "Blower_vibration_out_Y_1", label: "Độ rung quạt gió gối 2 dọc TISA206Y", color: "#2a09e9ff" },
        ]
    },
];

export const QUATGIO4_SECTION: Sections[] = [
    {
        section: "Nhiệt độ (°C)",
        rows: [
            { label: "Nhiệt độ stato động cơ", children: ["TISA233", "TISA235", "TISA237"] },
            { label: "Nhiệt độ bạc động cơ gối số", children: ["TISA231", "TISA232"] },
            { label: "Nhiệt độ bạc quạt gió gối số", children: ["TISA226", "TISA227"] },
        ],

    },
    {
        section: "Độ rung  (mm/s)",
        rows: [
            { label: "Động cơ gối 1", children: ["Ngang TISA207X", "Dọc TISA207Y"] },
            { label: "Động cơ gối 2", children: ["Ngang TISA208X", "Dọc TISA208Y"] },
            { label: "Quạt gió gối 1", children: ["Ngang TISA205X", "Dọc TISA205Y"] },
            { label: "Quạt gió gối 2", children: ["Ngang TISA206X", "Dọc TISA206Y"] },
        ],
    },

]
