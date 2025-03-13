"use client";
import Loading from "@/components/Loading";
import { CategoryPageType } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Categorys() {
    const [loading, setLoading] = useState(false);
    const [productTitle, setProductTitle] = useState<CategoryPageType[]>([]);
    useEffect(() => {
        setLoading(true);
        axios
            .get("https://gw.texnomart.uz/api/web/v1/header/top-categories")
            .then((res) => {
                setProductTitle(res.data.data.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="flex items-center p-4 justify-between container mx-auto">
            {productTitle.map((item, index) => (
                <ul key={index} className="">
                    <Link href={"/catalog/" + item.slug}>
                        <li className="text-xl">{item.title}</li>
                    </Link>
                </ul>
            ))}
        </div>
    );
}
