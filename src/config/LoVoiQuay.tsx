export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const LOVOIQUAY_CONFIG: ChartGroup[] = [
    {
        area: "Động cơ chính lò quay",
        tags: [
            { key: "AI_Rotary_kiln_main_motor_1#_winding_temperature_display", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "AI_Rotary_kiln_main_motor_2#_winding_temperature_display", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "AI_Rotary_kiln_main_motor_3#_winding_temperature_display", label: "Nhiệt độ cuộn dây C", color: "#f97316" },
            { key: "AI_Rotary_kiln_main_motor_1#_bearing_temperature_display", label: "Nhiệt độ bi trước động cơ", color: "#f91674ff" },
            { key: "AI_Rotary_kiln_main_motor_2#_bearing_temperature_display", label: "Nhiệt độ bi sau động cơ", color: "#f93816ff" },

        ]
    },
    {
        area: "Gối đỡ đầu lò",
        tags: [
            { key: "AI_1#_big_kiln_bearing_bush_temperature_display", label: "Nhiệt độ bạc ổ trục 1", color: "#BF1A1A" },
            { key: "AI_2#_big_kiln_bearing_bush_temperature_display", label: "Nhiệt độ bạc ổ trục 2", color: "#360185" },
            { key: "AI_3#_big_kiln_bearing_bush_temperature_display", label: "Nhiệt độ bạc ổ trục 3", color: "#2263c5ff" },
            { key: "AI_4#_big_kiln_bearing_bush_temperature_display", label: "Nhiệt độ bạc ổ trục 4", color: "#1652f9ff" },
            { key: "AI_1#_big_kiln_pier_lubricant_temperature_display", label: "Nhiệt độ dầu bôi trơn gối đỡ 1", color: "#f93816ff" },
            { key: "AI_2#_big_kiln_pier_lubricant_temperature_display", label: "Nhiệt độ dầu bôi trơn gối đỡ 2", color: "#0638c4ff" },
            { key: "AI_3#_big_kiln_pier_lubricant_temperature_display", label: "Nhiệt độ dầu bôi trơn gối đỡ 3", color: "#f93816ff" },
            { key: "AI_4#_big_kiln_pier_lubricant_temperature_display", label: "Nhiệt độ dầu bôi trơn gối đỡ 4", color: "#16f9a2ff" },
        ]
    },
    {
        area: "Gối đỡ đuôi lò",
        tags: [
            { key: "AI_1#_small_kiln_bearing_bush_temperature_display", label: "Nhiệt độ bạc ổ trục 1", color: "#BF1A1A" },
            { key: "AI_2#_small_kiln_bearing_bush_temperature_display", label: "Nhiệt độ bạc ổ trục 2", color: "#360185" },
            { key: "AI_3#_small_kiln_bearing_bush_temperature_display", label: "Nhiệt độ bạc ổ trục 3", color: "#2263c5ff" },
            { key: "AI_4#_small_kiln_bearing_bush_temperature_display", label: "Nhiệt độ bạc ổ trục 4", color: "#1652f9ff" },
            { key: "AI_1#_small_kiln_pier_lubricant_temperature_display", label: "Nhiệt độ dầu bôi trơn gối đỡ 1", color: "#f93816ff" },
            { key: "AI_2#_small_kiln_pier_lubricant_temperature_display", label: "Nhiệt độ dầu bôi trơn gối đỡ 2", color: "#0638c4ff" },
            { key: "AI_3#_small_kiln_pier_lubricant_temperature_displa", label: "Nhiệt độ dầu bôi trơn gối đỡ 3", color: "#f93816ff" },
            { key: "AI_4#_small_kiln_pier_lubricant_temperature_display", label: "Nhiệt độ dầu bôi trơn gối đỡ 4", color: "#16f9a2ff" },
        ]
    },
    {
        area: "Quạt lọc bụi chính lò quay",
        tags: [
            { key: "AI_Kiln_tail_fan_motor_1#_winding_temperature_display", label: "Nhiệt độ cuộn dây A", color: "#00a6e7ff" },
            { key: "AI_Kiln_tail_fan_motor_2#_winding_temperature_display", label: "Nhiệt độ cuộn dây B", color: "#2263c5ff" },
            { key: "AI_Kiln_tail_fan_motor_3#_winding_temperature_display", label: "Nhiệt độ cuộn dây C", color: "#f95e16cc" },
            { key: "AI_Kiln_tail_fan_motor_1#_bearing_temperature_display", label: "Nhiệt độ bi trước động cơ", color: "#000080" },
            { key: "AI_Kiln_tail_fan_motor_2#_bearing_temperature_display", label: "Nhiệt độ bi sau động cơ", color: "#f93816ff" },
            { key: "AI_Kiln_tail_fan_1#_bearing_temperature_display", label: "Nhiệt độ gối trước quạt", color: "#9E2A3A" },
            { key: "AI_Kiln_tail_fan_2#_bearing_temperature_display", label: "Nhiệt độ gối sau quạt", color: "#f91d16d5" },
            { key: "AI_Kiln_tail_fan_1#_vibration_feedback_display", label: "Độ rung 1", color: "#f116f9dc" },
            { key: "AI_Kiln_tail_fan_2#_vibration_feedback_display", label: "Độ rung 2", color: "#1652f9ff" },
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

export const LOVOIQUAY_SECTION: Sections[] = [
    {
        section: "Động cơ chính lò quay",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ bi trước động cơ" },
            { label: "Nhiệt độ bi sau động cơ" },
        ]
    },
    {
        section: "Gối đỡ đầu lò",
        rows: [
            { label: "Nhiệt độ bạc ổ trục 1" },
            { label: "Nhiệt độ bạc ổ trục 2" },
            { label: "Nhiệt độ bạc ổ trục 3" },
            { label: "Nhiệt độ bạc ổ trục 4" },
            { label: "Nhiệt độ dầu bôi trơn gối đỡ 1" },
            { label: "Nhiệt độ dầu bôi trơn gối đỡ 2" },
            { label: "Nhiệt độ dầu bôi trơn gối đỡ 3" },
            { label: "Nhiệt độ dầu bôi trơn gối đỡ 4" },
        ]
    },
    {
        section: "Gối đỡ đuôi lò",
        rows: [
            { label: "Nhiệt độ bạc ổ trục 1" },
            { label: "Nhiệt độ bạc ổ trục 2" },
            { label: "Nhiệt độ bạc ổ trục 3" },
            { label: "Nhiệt độ bạc ổ trục 4" },
            { label: "Nhiệt độ dầu bôi trơn gối đỡ 1" },
            { label: "Nhiệt độ dầu bôi trơn gối đỡ 2" },
            { label: "Nhiệt độ dầu bôi trơn gối đỡ 3" },
            { label: "Nhiệt độ dầu bôi trơn gối đỡ 4" },
        ]
    },
    {
        section: "Quạt lọc bụi chính lò quay",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ bi trước động cơ" },
            { label: "Nhiệt độ bi sau động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung 1" },
            { label: "Độ rung 2" },
        ]
    }
]

