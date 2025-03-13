"use client";
import { ProdcutsPageType } from "@/types";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Product from "./Product";

function ProductsPage() {
    const [products, setProducts] = useState<ProdcutsPageType[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get(
                "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
            )
            .then((res) => {
                setProducts(res.data.data.data);
                console.log(res.data.data.data);
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
        <div className="container mx-auto relative">
            <div className="absolute right-0 top-3 text-[20px] p-4">
                {products.length > 4 ? (
                    <div>
                        <Button>
                            Barchasini ko&apos;rish <ArrowRightOutlined />
                        </Button>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className="absolute left-0 font-bold top-3 text-2xl p-4">
                Xit Savdo
            </div>
            <div className="grid grid-cols-4 w-full container pt-20">
                {products.slice(0, 4).map((product, i) => (
                    <Product key={i} product={product} index={i} />
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
