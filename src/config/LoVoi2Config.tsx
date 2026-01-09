export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const LOVOI2_CONFIG: ChartGroup[] = [
    {
        area: "Quạt trợ đốt",
        tags: [
            { key: "2#_Kiln_Combustion_blower_Stator_temperature_A", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "2#_Kiln_Combustion_blower_Stator_temperature_B", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "2#_Kiln_Combustion_blower_Stator_temperature_C", label: "Nhiệt độ cuộn dây C", color: "#f97316" },
            { key: "2#_Kiln_Front_bearing_temperature_of_the_combustion_blower_motor", label: "Nhiệt độ bi trước động cơ", color: "#f91674ff" },
            { key: "2#_Kiln_Behind_bearing_temperature_of_the_combustion_blower_motor", label: "Nhiệt độ bi sau động cơ", color: "#f93816ff" },
            { key: "2#_Kiln_Front_bearing_temperature_of_the_combustion_blower", label: "Nhiệt độ gối trước quạt", color: "#6E026F" },
            { key: "2#_Kiln_behind_bearing_temperature_of_the_combustion_blower", label: "Nhiệt độ gối sau quạt", color: "#FA891A" },
            { key: "2#_Kiln_combustion_blower_1#_vibration", label: "Độ rung 1", color: "#D25353" },
        ]
    },
     {
        area: "Quạt làm mát",
        tags: [
            { key: "2#_Kiln_Cooling_blower_Stator_temperature_A", label: "Nhiệt độ cuộn dây A", color: "#BF1A1A" },
            { key: "2#_Kiln_Cooling_blower_Stator_temperature_B", label: "Nhiệt độ cuộn dây B", color: "#360185" },
            { key: "2#_Kiln_Cooling_blower_Stator_temperature_C", label: "Nhiệt độ cuộn dây C", color: "#2263c5ff" },
            { key: "2#_Kiln_Front_bearing_temperature_of_the_cooling_blower_motor", label: "Nhiệt độ bi trước động cơ", color: "#1652f9ff" },
            { key: "2#_Kiln_Behind_bearing_temperature_of_the_cooling_blower_motor", label: "Nhiệt độ bi sau động cơ", color: "#f93816ff" },
            { key: "2#_Kiln_Front_bearing_temperature_of_the_cooling_blower", label: "Nhiệt độ gối trước quạt", color: "#0638c4ff" },
            { key: "2#_Kiln_behind_bearing_temperature_of_the_cooling_blower", label: "Nhiệt độ gối sau quạt", color: "#f93816ff" },
            { key: "2#_Kiln_cooling_blower_1#_vibration", label: "Độ rung 1", color: "#16f9a2ff" },
        ]
    },
     {
        area: "Quạt tăng áp",
        tags: [
            { key: "2#_Kiln_gas_Pressurizing_machine_stator_temperature_A", label: "Nhiệt độ cuộn dây A", color: "#004f61ff" },
            { key: "2#_Kiln_gas_Pressurizing_machine_stator_temperature_B", label: "Nhiệt độ cuộn dây B", color: "#c52d22c5" },
            { key: "2#_Kiln_gas_Pressurizing_machine_stator_temperature_C", label: "Nhiệt độ cuộn dây C", color: "#16f9299d" },
            { key: "2#_Kiln_Front_bearing_temperature_of_the_gas_Pressurizing_machine_motor", label: "Nhiệt độ bi trước động cơ", color: "#06c416b4" },
            { key: "2#_Kiln_Behind_bearing_temperature_of_the_gas_Pressurizing_machine_motor", label: "Nhiệt độ bi sau động cơ", color: "#f116f9b7" },
            { key: "2#_Kiln_Front_bearing_temperature_of_the_gas_Pressurizing_machine", label: "Nhiệt độ gối trước quạt", color: "#4016f9c2" },
            { key: "2#_Kiln_Behind_bearing_temperature_of_the_gas_Pressurizing_machine", label: "Nhiệt độ gối sau quạt", color: "#4D2B8C" },
            { key: "2#_Kiln_gas_Pressurizing_machine_1#_vibration", label: "Độ rung 1", color: "#f91616dc" },
            { key: "2#_Kiln_gas_Pressurizing_machine_2#_vibration", label: "Độ rung 2", color: "#831814c5" },
        ]
    },
     {
        area: "Quạt hút bụi",
        tags: [
            { key: "2#_Kiln_Furnace_dust_extraction_fan_Stator_temperature_A", label: "Nhiệt độ cuộn dây A", color: "#00a6e7ff" },
            { key: "2#_Kiln_Furnace_dust_extraction_fan_Stator_temperature_B", label: "Nhiệt độ cuộn dây B", color: "#2263c5ff" },
            { key: "2#_Kiln_Furnace_dust_extraction_fan_Stator_temperature_C", label: "Nhiệt độ cuộn dây C", color: "#f95e16cc" },
            { key: "2#_Kiln_Front_bearing_temperature_of_Furnace_dust_extraction_fan_motor", label: "Nhiệt độ bi trước động cơ", color: "#000080" },
            { key: "2#_Kiln_Behind_bearing_temperature_of_Furnace_dust_extraction_fan_motor", label: "Nhiệt độ bi sau động cơ", color: "#9E2A3A" },
            { key: "2#_Kiln_Front_bearing_temperature_of_Furnace_dust_extraction_fan", label: "Nhiệt độ gối trước quạt", color: "#f91d16d5" },
            { key: "2#_Kiln_Behind_bearing_temperature_of_Furnace_dust_extraction_fan", label: "Nhiệt độ gối sau quạt", color: "#f93816ff" },
            { key: "2#_Kiln_Furnace_dust_extraction_fan_1#_vibration", label: "Độ rung 1", color: "#f116f9dc" },
            { key: "2#_Kiln_Furnace_dust_extraction_fan_2#_vibration", label: "Độ rung 2", color: "#1652f9ff" },
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

export const LOVOI2_SECTION: Sections[] = [
    {
        section: "Quạt trợ đốt",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ bi trước động cơ" },
            { label: "Nhiệt độ bi sau động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung 1" },
        ]
    },
    {
        section: "Quạt làm mát",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ bi trước động cơ" },
            { label: "Nhiệt độ bi sau động cơ" },
            { label: "Nhiệt độ gối trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung 1" },
        ]
    },
    {
        section: "Quạt tăng áp",
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
    },
    {
        section: "Quạt hút bụi",
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

