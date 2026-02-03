import React from "react";

interface AlertMessageProps {
  type?: "Vui lòng" | "success" | "error";
  message: string;
}

const AlertMessage = ({ type = "Vui lòng", message }: AlertMessageProps) => {
  const getStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-100 border-green-500 text-green-700";
      case "error":
        return "bg-red-100 border-red-500 text-red-700";
      default:
        return "bg-orange-100 border-orange-500 text-orange-700";
    }
  };
   return (
    <div className={`border-l-4 p-4 rounded-md shadow-sm flex items-start gap-3 ${getStyles()}`} role="alert">
      <div>
        <p className="font-bold capitalize">{type}</p>
        <p className="mr-12">{message}</p>
      </div>
    </div>
  );

}

export default AlertMessage;