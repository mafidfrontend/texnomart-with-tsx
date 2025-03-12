"use client";

import { Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function SearchInput() {
    const [input, setInput] = useState("");
    useEffect(() => {
        axios
            .get("https://gateway.texnomart.uz/api/common/v1/search/header", {
                params: {
                    q: input
                },
            })
            .then((res) => {
                // setInput(res.data.data);
                console.log(res.data.data)
            });
    }, [input]);
    return (
        <Input
            value={input}
            onChange={(e) => {
                setInput(e.target.value);
                console.log(e.target.value)
            }}
            className="input"
            placeholder="Qidirish"
        />
    );
}

export default function GlobalSearch() {
    return <SearchInput />;
}
