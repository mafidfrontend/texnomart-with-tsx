"use client";
import { Input, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
function SearchInput() {
    const [input, setInput] = useState("");
    const [searchData, setSearchData] = useState<{
        models: { title: string; id: number; slug: string }[];
        categories: { title: string; id: number; slug: string }[];
        products: { name: string; id: number; image: string }[];
    }>({
        models: [],
        categories: [],
        products: [],
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (input.trim().length > 0) {
            setLoading(true);
            axios
                .get(
                    "https://gateway.texnomart.uz/api/common/v1/search/header",
                    {
                        params: { q: input },
                    }
                )
                .then((res) => {
                    setSearchData(res.data.data);
                    console.log(res.data.data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [input]);

    return (
        <div className="relative w-[400px]">
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input border rounded-lg p-2 w-full"
                placeholder="Qidirish"
            />
            {loading && <Spin className="absolute right-3 top-3" />}
            {searchData.categories.length > 0 && (
                <div className="absolute w-full bg-white shadow-lg z-10 rounded-lg mt-2 p-2 max-h-[300px] overflow-y-auto">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {searchData.models.map((item, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 px-3 py-1 rounded-lg text-sm cursor-pointer hover:bg-gray-200"
                            >
                                {item.title}
                            </span>
                        ))}
                    </div>
                    <div>
                        {searchData.categories.map((item, index) => (
                            <div
                                key={index}
                                className="py-1 border-b last:border-none"
                            >
                                <span className="text-gray-600 text-sm">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-2">
                        {searchData.products
                            .filter((item) => item.image)
                            .slice(0, 3)
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-10 h-10 object-contain"
                                    />
                                    <div>
                                        <strong className="block">
                                            {item.name}
                                        </strong>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function GlobalSearch() {
    return <SearchInput />;
}
