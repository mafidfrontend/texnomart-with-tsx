"use client";
import { CatalogModal } from "@/types";
import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { RightOutlined } from "@ant-design/icons";

function Catalog({ isOpen }: { isOpen: boolean }) {
    const [catalog, setCatalog] = useState<CatalogModal[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get("https://gw.texnomart.uz/api/web/v1/header/popup-menu-catalog")
            .then((res) => {
                setCatalog(res.data.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                message.error("Xatolik");
            });
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <div
            style={{
                display: isOpen ? "block" : "none",
            }}
            className="absolute bg-white z-10 w-[1440px] left-[-136px] px-6 py-6"
        >
            {catalog.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="flex max-w-[350px] justify-between">
                            <div className="flex gap-3 py-3">
                                <img src={item.icon} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                            <RightOutlined />
                        </div>
                        <div>
                            <h2>{item.name}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Catalog;
