import { useState } from "react";
import type { WarningHistoryConfig } from "../config/WarningHistoryConfig";




export default function usePosts() {
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState<unknown>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const createWarning = async (payload: WarningHistoryConfig) => {
        try {
            setIsLoading(true);
            setError(null);
            setSuccess(false);

            const resp = await fetch(`${baseURL}/api/WarningHistory`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    thoiGian: payload.thoiGian,
                    tagName: payload.tagName,
                    khuVuc: payload.khuVuc,
                    tenThongSo: payload.tenThongSo,
                    giaTri: payload.giaTri,
                    trangThai: payload.trangThai,
                    donVi: payload.donVi,
                    xuong: payload.xuong
                })
            });

            const data = await resp.json();
            if (!resp.ok) {
                console.log(data.message);// hoặc data.message tùy backend trả về
               
                return null;
            }
            setSuccess(true);
            return data;
        } catch (err) {
            console.log("Lỗi kết nối:", err);
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        success,
        createWarning
    }
}