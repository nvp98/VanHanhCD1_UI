import React from "react";

interface PowerProps{
    name: string,
    value: string,

}

function ComponentPowerCard({name, value}:PowerProps): React.JSX.Element{
  return (
    <div className="w-[300px] h-[120px] border-2 border-green-400 rounded-2xl px-5 py-4 flex justify-between items-center bg-white">
      
      {/* Left Content */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-green-400 text-xl font-bold">{name}</h3>

          <div className="flex items-start gap-1 mt-1">
            <span className="text-3xl font-bold text-green-400 leading-none">
              {value}
            </span>
            <span className="text-xl font-semibold text-green-400 mt-1">
              Kv
            </span>
          </div>
        </div>

        <div className="text-gray-400 text-sm">
          Giới hạn: 0 → 400
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="w-5 h-5 rounded-full bg-green-400"></div>
      </div>
    </div>
  );
};

export default ComponentPowerCard;