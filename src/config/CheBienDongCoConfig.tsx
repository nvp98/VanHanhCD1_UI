export type Chart = {
    key: string;
    label: string;
    color: string;
};

export type ChartGroup = {
    area: string;
    tags: Chart[];
};

export const DONGCOCHEBIEN_CONFIG: ChartGroup[] = [
    {
        area: "Động cơ chính máy nghiền",
        tags: [
            { key: "S7Program/MillDP_AI22.PV_OUT", label: "Nhiệt độ cuộn dây A", color: "#6366f1" },
            { key: "S7Program/MillDP_AI23.PV_OUT", label: "Nhiệt độ cuộn dây B", color: "#22c55e" },
            { key: "S7Program/MillDP_AI24.PV_OUT", label: "Nhiệt độ cuộn dây C", color: "#013314" },
            { key: "S7Program/MillDP_AI25.PV_OUT", label: "Nhiệt độ gối trước động cơ", color: "#f97316" },
            { key: "S7Program/MillDP_AI26.PV_OUT", label: "Nhiệt độ gối sau động cơ", color: "#3823f8ff" },
            { key: "S7Program/MillDP_AI27.PV_OUT", label: "Dòng điện", color: "#85409D" },
        ]
    },
    {
        area: "Phân ly",
        tags: [
            { key: "S7Program/MillDP_AI14.PV_OUT", label: "Nhiệt độ cuộn dây A", color: "#fc7323ff" },
            { key: "S7Program/MillDP_AI15.PV_OUT", label: "Nhiệt độ cuộn dây B", color: "#000080" },
            { key: "S7Program/MillDP_AI16.PV_OUT", label: "Nhiệt độ cuộn dây C", color: "#FF0000" },
            { key: "S7Program/MillDP_AI17.PV_OUT", label: "Nhiệt độ trục trước động cơ", color: "#393D7E" },
            { key: "S7Program/MillDP_AI18.PV_OUT", label: "Nhiệt độ trục sau động cơ", color: "#FF6D1F" },
            { key: "S7Program/MillDP_AI19.PV_OUT", label: "Nhiệt độ gối trước phân ly", color: "#FF3F7F" },
            { key: "S7Program/MillDP_AI20.PV_OUT", label: "Nhiệt độ gối sau phân ly", color: "#FFC400" },
            { key: "S7Program/121_SR01_Current.PV_OUT", label: "Dòng điện", color: "#CC561E" },
        ]
    },
    {
        area: "Động cơ lọc bụi chính",
        tags: [
            { key: "S7Program/121_FN02M_ST1.PV_OUT", label: "Nhiệt độ cuộn dây A", color: "#f97316" },
            { key: "S7Program/121_FN02M_ST2.PV_OUT", label: "Nhiệt độ cuộn dây B", color: "#005461" },
            { key: "S7Program/121_FN02M_ST3.PV_OUT", label: "Nhiệt độ cuộn dây C", color: "#CF0F0F" },
            { key: "S7Program/121_FN02M_Dr_T.PV_OUT", label: "Nhiệt độ trục trước động cơ", color: "#6366f1" },
            { key: "S7Program/121_FN02M_NDr_T.PV_OUT", label: "Nhiệt độ trục sau động cơ", color: "#22c55e" },
            { key: "S7Program/121_FN02_Dr_T.PV_OUT", label: "Nhiệt độ gối  trước quạt", color: "#f97316" },
            { key: "S7Program/121_FN02_NDr_T.PV_OUT", label: "Nhiệt độ gối sau quạt", color: "#1b57fcff" },
            { key: "S7Program/121_FN02_Dr_HV.PV_OUT", label: "Độ rung trục động cơ trước X", color: "#85409D" },
            { key: "S7Program/121_FN02_Dr_VV.PV_OUT", label: "Độ rung trục động cơ trước Y", color: "#a306a3ff" },
            { key: "S7Program/121_FN02_NDr_HV.PV_OUT", label: "Độ rung trục động cơ sau X", color: "#000080" },
            { key: "S7Program/121_FN02_NDr_VV.PV_OUT", label: "Độ rung trục động cơ sau Y", color: "#FF0000" },
            { key: "S7Program/121_FN02_Current.PV_OUT", label: "Dòng điện", color: "#9E2A3A" },
        ]
    },
    {
        area: "Độ rung máy nghiền",
        tags: [
            { key: "S7Program/MillDP_AI28.PV_OUT", label: "Độ rung thân máy nghiền phương X", color: "#1421dbff" },
        ]
    },
    {
        area: "Độ rung trục ngoài HGT chính",
        tags: [
            { key: "S7Program/MillDP_AI29.PV_OUT", label: "Độ rung thân HGT phương X", color: "#22c55e" },
        ]
    },
    {
        area: "Độ rung trục bánh răng bên trong HGT chính",
        tags: [
            { key: "Do_rung_HGT", label: "Độ rung trục bánh răng phương X", color: "#f97316" },
        ]
    },
    {
        area: "Vít tải",
        tags: [
            { key: "S7Program/MillDP_AI56.PV_OUT", label: "Trục vít tải trong", color: "#1b57fcff" },
            { key: "S7Program/MillDP_AI57.PV_OUT", label: "Trục vít tải ngoài", color: "#85409D" },
            { key: "dongdienvittai", label: "Trục vít dòng điện", color: "#a306a3ff" },
        ]
    },
    {
        area: "Băng tải 111BC-01",
        tags: [
            { key: "S7Program/111_BC01_Current.PV_OUT", label: "Dòng điện", color: "#000080" },
            { key: "luu_luong_can_BC01", label: "Lưu lượng", color: "#FF0000" },
        ]
    },
    {
        area: "Quả lô",
        tags: [
            { key: "S7Program/MillDP_AI6.PV_OUT", label: "Ví trí quả lô số 1", color: "#9E2A3A" },
            { key: "S7Program/MillDP_AI7.PV_OUT", label: "Ví trí quả lô số 2", color: "#842A3B" },
            { key: "S7Program/MillDP_AI8.PV_OUT", label: "Ví trí quả lô số 3", color: "#700303" },
            { key: "S7Program/MillDP_AI9.PV_OUT", label: "Tốc độ quả lô số 1", color: "#301CA0" },
            { key: "S7Program/MillDP_AI10.PV_OUT", label: "Tốc độ quả lô số 2", color: "#DE1A58" },
            { key: "S7Program/MillDP_AI11.PV_OUT", label: "Tốc độ quả lô số 3", color: "#1421dbff" },

        ]
    },
    {
        area: "Trạm dầu HGT",
        tags: [
            { key: "S7Program/MillDP_AI30.PV_OUT", label: "Áp suất số 1", color: "#005461" },
            { key: "S7Program/MillDP_AI31.PV_OUT", label: "Áp suất số 2", color: "#FFC400" },
            { key: "S7Program/MillDP_AI32.PV_OUT", label: "Áp suất số 3", color: "#A3485A" },
            { key: "S7Program/MillDP_AI33.PV_OUT", label: "Áp suất số 4", color: "#301CA0" },
            { key: "S7Program/MillDP_AI34.PV_OUT", label: "Áp suất số 5", color: "#22c55e" },
            { key: "S7Program/MillDP_AI35.PV_OUT", label: "Áp suất số 6", color: "#6366f1" },
            { key: "S7Program/MillDP_AI36.PV_OUT", label: "Áp suất số 7", color: "#85409D" },
            { key: "S7Program/MillDP_AI37.PV_OUT", label: "Áp suất số 8", color: "#a306a3ff" },
            { key: "S7Program/MillDP_AI38.PV_OUT", label: "Áp suất số 9", color: "#000080" },
            { key: "S7Program/MillDP_AI39.PV_OUT", label: "Áp suất số 10", color: "#FF0000" },
            { key: "S7Program/MillDP_AI40.PV_OUT", label: "Áp suất số 11", color: "#9E2A3A" },
            { key: "S7Program/MillDP_AI41.PV_OUT", label: "Áp suất số 12", color: "#1421dbff" },
            { key: "S7Program/MillDP_AI42.PV_OUT", label: "Áp suất số 13", color: "#842A3B" },
            { key: "S7Program/MillDP_AI43.PV_OUT", label: "Áp suất số 14", color: "#301CA0" },
            { key: "S7Program/MillDP_AI44.PV_OUT", label: "Áp suất số 15", color: "#842A3B" },
            { key: "S7Program/MillDP_AI45.PV_OUT", label: "Áp suất số 16", color: "#FF0000" },
            { key: "S7Program/MillDP_AI46.PV_OUT", label: "Nhiêt độ bạc trượt 1", color: "#360185" },
            { key: "S7Program/MillDP_AI47.PV_OUT", label: "Nhiêt độ bạc trượt 2", color: "#2263c5ff" },
            { key: "S7Program/MillDP_AI48.PV_OUT", label: "Nhiêt độ bạc trượt 3", color: "#f93816ff" },
            { key: "S7Program/MillDP_AI49.PV_OUT", label: "Nhiêt độ bạc trượt 4", color: "#f97316" },
            { key: "S7Program/MillDP_AI50.PV_OUT", label: "Nhiệt độ phía trên bồn", color: "#3823f8ff" },
            { key: "S7Program/MillDP_AI51.PV_OUT", label: "Nhiệt độ trục vào ô bi ngoài", color: "#260331" },
            { key: "S7Program/MillDP_AI52.PV_OUT", label: "Nhiệt độ trục vào ô bi trong", color: "#842A3B" },
            { key: "S7Program/MillDP_AI53.PV_OUT", label: "Nhiệt đọ ống dẫn đầu vào", color: "#2263c5ff" },
            { key: "S7Program/MillDP_AI54.PV_OUT", label: "Nhiệt độ đáy HGT", color: "#004f61ff" },
        ]
    },
    {
        area: "Trạm thủy lực nâng hạ quả lô",
        tags: [
            { key: "S7Program/MillDP_AI2.PV_OUT", label: "Nhiệt độ dầu", color: "#4016f9c2" },
            { key: "S7Program/MillDP_AI12.PV_OUT", label: "Áp suất làm việc", color: "#4D2B8C" },
            { key: "S7Program/MillDP_AI13.PV_OUT", label: "Áp suất hồi về", color: "#f91616dc" },
        ]
    },
    {
        area: "Trạm dầu bôi trơn quả lô",
        tags: [
            { key: "S7Program/MillDP_AI1.PV_OUT", label: "Nhiệt độ dầu bồn dầu", color: "#f97316" },
            { key: "S7Program/MillDP_AI3.PV_OUT", label: "Nhiệt độ dầu đầu ra 1", color: "#831814c5" },
            { key: "S7Program/MillDP_AI4.PV_OUT", label: "Nhiệt độ dầu đầu ra 2", color: "#00a6e7ff" },
            { key: "S7Program/MillDP_AI5.PV_OUT", label: "Nhiệt độ dầu đầu ra 3", color: "#2263c5ff" },
        ]
    },
    {
        area: "Máy nghiền",
        tags: [
            { key: "DP_Pressure_PV_OUT", label: "Chênh áp máy nghiền", color: "#f95e16cc" },
            { key: "S7Program/TE121_2T.PV_OUT", label: "Nhiệt độ vào nghiền", color: "#000080" },
            { key: "S7Program/TE121_4T.PV_OUT", label: "Nhiệt độ ra nghiền", color: "#f93816ff" },
            { key: "S7Program/PIT121_4P.PV_OUT", label: "Áp âm đầu ra máy nghiền", color: "#9E2A3A" },
        ]
    },
    {
        area: "Lọc bụi chính",
        tags: [
            { key: "S7Program/TE121_5T.PV_OUT", label: "Nhiệt độ vào lọc bụi", color: "#f91d16d5" },
            { key: "S7Program/TE121_6T.PV_OUT", label: "Nhiệt độ ra lọc bụi", color: "#f116f9dc" },
            { key: "differ_pressure_BF_PV_OUT", label: "Chênh áp buồng lọc bụi", color: "#1652f9ff" },
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

export const DONGCOCHEBIEN_SECTION: Sections[] = [
    {
        section: "Động cơ chính máy nghiền",
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
        section: "Phân ly",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ trục trước động cơ" },
            { label: "Nhiệt độ trục sau động cơ" },
            { label: "Nhiệt độ gối trước phân ly" },
            { label: "Nhiệt độ gối sau phân ly" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Động cơ lọc bụi chính",
        rows: [
            { label: "Nhiệt độ cuộn dây A" },
            { label: "Nhiệt độ cuộn dây B" },
            { label: "Nhiệt độ cuộn dây C" },
            { label: "Nhiệt độ trục trước động cơ" },
            { label: "Nhiệt độ trục sau động cơ" },
            { label: "Nhiệt độ gối  trước quạt" },
            { label: "Nhiệt độ gối sau quạt" },
            { label: "Độ rung trục động cơ trước X" },
            { label: "Độ rung trục động cơ trước Y" },
            { label: "Độ rung trục động cơ sau X" },
            { label: "Độ rung trục động cơ sau Y" },
            { label: "Dòng điện" },
        ]
    },
    {
        section: "Độ rung máy nghiền",
        rows: [
            { label: "Độ rung thân máy nghiền phương X" },
        ]
    },
    {
        section: "Độ rung trục ngoài HGT chính",
        rows: [
            { label: "Độ rung thân HGT phương X" },
        ]
    },
    {
        section: "Độ rung trục bánh răng bên trong HGT chính",
        rows: [
            { label: "Độ rung trục bánh răng phương X" },
        ]
    },
    {
        section: "Vít tải",
        rows: [
            { label: "Trục vít tải trong" },
            { label: "Trục vít tải ngoài" },
            { label: "Trục vít dòng điện" },
        ]
    },
    {
        section: "Băng tải 111BC-01",
        rows: [
            { label: "Dòng điện" },
            { label: "Lưu lượng" },
        ]
    },
    {
        section: "Quả lô",
        rows: [
            { label: "Ví trí quả lô số 1" },
            { label: "Ví trí quả lô số 2" },
            { label: "Ví trí quả lô số 3" },
            { label: "Tốc độ quả lô số 1" },
            { label: "Tốc độ quả lô số 2" },
            { label: "Tốc độ quả lô số 3" },

        ]
    },
    {
        section: "Trạm dầu HGT",
        rows: [
            { label: "Áp suất số 1" },
            { label: "Áp suất số 2" },
            { label: "Áp suất số 3" },
            { label: "Áp suất số 4" },
            { label: "Áp suất số 5" },
            { label: "Áp suất số 6" },
            { label: "Áp suất số 7" },
            { label: "Áp suất số 8" },
            { label: "Áp suất số 9" },
            { label: "Áp suất số 10" },
            { label: "Áp suất số 11" },
            { label: "Áp suất số 12" },
            { label: "Áp suất số 13" },
            { label: "Áp suất số 14" },
            { label: "Áp suất số 15" },
            { label: "Áp suất số 16" },
            { label: "Nhiêt độ bạc trượt 1" },
            { label: "Nhiêt độ bạc trượt 2" },
            { label: "Nhiêt độ bạc trượt 3" },
            { label: "Nhiêt độ bạc trượt 4" },
            { label: "Nhiệt độ phía trên bồn" },
            { label: "Nhiệt độ trục vào ô bi ngoài" },
            { label: "Nhiệt độ trục vào ô bi trong" },
            { label: "Nhiệt đọ ống dẫn đầu vào" },
            { label: "Nhiệt độ đáy HGT" },
        ]
    },
    {
        section: "Trạm thủy lực nâng hạ quả lô",
        rows: [
            { label: "Nhiệt độ dầu" },
            { label: "Áp suất làm việc" },
            { label: "Áp suất hồi về" },
        ]
    },
    {
        section: "Trạm dầu bôi trơn quả lô",
        rows: [
            { label: "Nhiệt độ dầu bồn dầu" },
            { label: "Nhiệt độ dầu đầu ra 1" },
            { label: "Nhiệt độ dầu đầu ra 2" },
            { label: "Nhiệt độ dầu đầu ra 3" },
        ]
    },
    {
        section: "Máy nghiền",
        rows: [
            { label: "Chênh áp máy nghiền" },
            { label: "Nhiệt độ vào nghiền" },
            { label: "Nhiệt độ ra nghiền" },
            { label: "Áp âm đầu ra máy nghiền" },
        ]
    },
    {
        section: "Lọc bụi chính",
        rows: [
            { label: "Nhiệt độ vào lọc bụi" },
            { label: "Nhiệt độ ra lọc bụi" },
            { label: "Chênh áp buồng lọc bụi" },
        ]
    },

]

