export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const LOVOI3_CONFIG: ChartGroup[] = [
    {
        area: "Quạt trợ đốt",
        tags: [
            { key: "3#_Kiln_Combustion_blower_Stator_temperature_A", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "3#_Kiln_Combustion_blower_Stator_temperature_B", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "3#_Kiln_Combustion_blower_Stator_temperature_C", label: "Nhiệt độ cuộn dây C", color: "#f97316" },
            { key: "3#_Kiln_Front_bearing_temperature_of_the_combustion_blower_motor", label: "Nhiệt độ bi trước động cơ", color: "#f91674ff" },
            { key: "3#_Kiln_Behind_bearing_temperature_of_the_combustion_blower_motor", label: "Nhiệt độ bi sau động cơ", color: "#f93816ff" },
            { key: "3#_Kiln_Front_bearing_temperature_of_the_combustion_blower", label: "Nhiệt độ gối trước quạt", color: "#f91674ff" },
            { key: "3#_Kiln_behind_bearing_temperature_of_the_combustion_blower", label: "Nhiệt độ gối sau quạt", color: "#f93816ff" },
            { key: "3#_Kiln_combustion_blower_1#_vibration", label: "Độ rung 1", color: "#fc6b03ff" },
        ]
    },
     {
        area: "Quạt làm mát",
        tags: [
            { key: "3#_Kiln_Cooling_blower_Stator_temperature_A", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "3#_Kiln_Cooling_blower_Stator_temperature_B", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "3#_Kiln_Cooling_blower_Stator_temperature_C", label: "Nhiệt độ cuộn dây C", color: "#f97316" },
            { key: "3#_Kiln_Front_bearing_temperature_of_the_cooling_blower_motor", label: "Nhiệt độ bi trước động cơ", color: "#f91674ff" },
            { key: "3#_Kiln_Behind_bearing_temperature_of_the_cooling_blower_motor", label: "Nhiệt độ bi sau động cơ", color: "#f93816ff" },
            { key: "3#_Kiln_Front_bearing_temperature_of_the_cooling_blower", label: "Nhiệt độ gối trước quạt", color: "#f91674ff" },
            { key: "3#_Kiln_behind_bearing_temperature_of_the_cooling_blower", label: "Nhiệt độ gối sau quạt", color: "#f93816ff" },
            { key: "3#_Kiln_cooling_blower_1#_vibration", label: "Độ rung 1", color: "#fc6b03ff" },
        ]
    },
     {
        area: "Quạt tăng áp",
        tags: [
            { key: "3#_Kiln_gas_Pressurizing_machine_stator_temperature_A", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "3#_Kiln_gas_Pressurizing_machine_stator_temperature_B", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "3#_Kiln_gas_Pressurizing_machine_stator_temperature_C", label: "Nhiệt độ cuộn dây C", color: "#f97316" },
            { key: "3#_Kiln_Front_bearing_temperature_of_the_gas_Pressurizing_machine_motor", label: "Nhiệt độ bi trước động cơ", color: "#f91674ff" },
            { key: "3#_Kiln_Behind_bearing_temperature_of_the_gas_Pressurizing_machine_motor", label: "Nhiệt độ bi sau động cơ", color: "#f93816ff" },
            { key: "3#_Kiln_Front_bearing_temperature_of_the_gas_Pressurizing_machine", label: "Nhiệt độ gối trước quạt", color: "#f91674ff" },
            { key: "3#_Kiln_Behind_bearing_temperature_of_the_gas_Pressurizing_machine", label: "Nhiệt độ gối sau quạt", color: "#f93816ff" },
            { key: "3#_Kiln_gas_Pressurizing_machine_1#_vibration", label: "Độ rung 1", color: "#fc6b03ff" },
            { key: "3#_Kiln_gas_Pressurizing_machine_2#_vibration", label: "Độ rung 2", color: "#fc6b03ff" },
        ]
    },
     {
        area: "Quạt hút bụi",
        tags: [
            { key: "3#_Kiln_Furnace_dust_extraction_fan_Stator_temperature_A", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "3#_Kiln_Furnace_dust_extraction_fan_Stator_temperature_B", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "3#_Kiln_Furnace_dust_extraction_fan_Stator_temperature_C", label: "Nhiệt độ cuộn dây C", color: "#f97316" },
            { key: "3#_Kiln_Front_bearing_temperature_of_Furnace_dust_extraction_fan_motor", label: "Nhiệt độ bi trước động cơ", color: "#f91674ff" },
            { key: "3#_Kiln_Behind_bearing_temperature_of_Furnace_dust_extraction_fan_motor", label: "Nhiệt độ bi sau động cơ", color: "#f93816ff" },
            { key: "3#_Kiln_Front_bearing_temperature_of_Furnace_dust_extraction_fan", label: "Nhiệt độ gối trước quạt", color: "#f91674ff" },
            { key: "3#_Kiln_Behind_bearing_temperature_of_Furnace_dust_extraction_fan", label: "Nhiệt độ gối sau quạt", color: "#f93816ff" },
            { key: "3#_Kiln_Furnace_dust_extraction_fan_1#_vibration", label: "Độ rung 1", color: "#fc6b03ff" },
            { key: "3#_Kiln_Furnace_dust_extraction_fan_2#_vibration", label: "Độ rung 2", color: "#fc6b03ff" },
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

export const LOVOI3_SECTION: Sections[] = [
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

