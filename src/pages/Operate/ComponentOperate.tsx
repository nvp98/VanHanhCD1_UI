import React, { type JSX } from "react";
import { images } from '../../assets/images';
import { NavLink } from "react-router-dom";
const { iconDocument, iconDocumentPrimary } = images;

interface OperateProps {
  primary?: boolean,
  title: string;
  to: string;
}

function ComponentOperate({ primary, title, to }: OperateProps): React.JSX.Element {
  return (<>
   <NavLink
      to={to}
      className="block" // giúp NavLink bao toàn bộ thẻ con
    >
    <div
      className="flex items-center gap-3 rounded-xl  bg-[#F8FAFC] p-4 shadow-lg hover:shadow-lg transition"
    >

      <img
        src={`${primary ? iconDocument : iconDocumentPrimary}`}
        alt="logo"
        className="object-contain w-[32px] h-[32px]"
      />

      <span className="text-sm font-medium text-gray-800">{title}</span>
    </div>
    </NavLink>
  </>)
}

export default ComponentOperate;