import { useMemo, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import dayjs from "dayjs";

type Tag = {
  key: string;
  label: string;
  color: string;
};

type TagGroup = {
  area: string;
  tags: Tag[];
};

type Props = {
  rawData: any[];
  TAG_CONFIG: TagGroup[];
};

export default function FlowDashboardChart({ rawData, TAG_CONFIG }: Props) {

  // Flatten tags
  const allTags = useMemo(
    () => TAG_CONFIG.flatMap(g => g.tags),
    [TAG_CONFIG]
  );

  // Build chart data
  const chartData = useMemo(() => {
    return rawData.map(row => ({
      time: row.ThoiGian,
      ...allTags.reduce((acc, t) => {
        acc[t.key] = row[t.key];
        return acc;
      }, {} as any)
    }));
  }, [rawData, allTags]);

  // Visible lines
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  // Open / close areas
  const [openAreas, setOpenAreas] = useState<string[]>(
    () => TAG_CONFIG.map(g => g.area) // mặc định mở hết
  );

  const toggleArea = (area: string) => {
    setOpenAreas(a =>
      a.includes(area) ? a.filter(x => x !== area) : [...a, area]
    );
  };

  const toggleTag = (key: string) => {
    setVisible(v => ({ ...v, [key]: !v[key] }));
  };
  const CustomTimeTick = ({ x, y, payload }: any) => {
    const time = dayjs(payload.value).format("HH:mm");
    const date = dayjs(payload.value).format("DD/MM");

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={14}
          textAnchor="middle"
          fill="#555"
          fontSize={13}
        >
          <tspan x={0}>{time}</tspan>
          <tspan x={0} dy="14">{date}</tspan>
        </text>
      </g>
    );
  };


  return (
    <div className="flex w-full gap-4">

      {/* ===== CHART ===== */}
      <div className="basis-5/6 h-[600px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="time"
             
              tick={<CustomTimeTick />}
              height={45}
            />

            <YAxis />
            <Tooltip
              labelFormatter={v => dayjs(v).format("HH:mm DD/MM")}
            />


            {allTags.map(tag =>
              visible[tag.key] && (
                <Line
                  key={tag.key}
                  dataKey={tag.key}
                  name={tag.label}
                  stroke={tag.color}
                  dot={true}
                  type="monotone"
                />
              )
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ===== CHECKBOX GROUP ===== */}
      <div className="basis-1/6 h-[600px] overflow-y-auto pr-2 space-y-3 border-l">

        {TAG_CONFIG.map(group => (
          <div key={group.area}>

            {/* Area header */}
            <div
              onClick={() => toggleArea(group.area)}
              className="flex justify-between items-center cursor-pointer bg-gray-100 p-2 rounded font-semibold"
            >
              <span>{group.area}</span>
              <span>{openAreas.includes(group.area) ? "−" : "+"}</span>
            </div>

            {/* Tags */}
            {openAreas.includes(group.area) && (
              <div className="pl-3 pt-2 space-y-1">
                {group.tags.map(tag => (
                  <label
                    key={tag.key}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
                  >
                    <input
                      type="checkbox"
                      checked={visible[tag.key]}
                      onChange={() => toggleTag(tag.key)}
                    />
                    <span style={{ color: tag.color }}>
                      {tag.label}
                    </span>
                  </label>
                ))}
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}
