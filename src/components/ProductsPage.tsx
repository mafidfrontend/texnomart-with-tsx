"use client";
import { ProdcutsPageType } from "@/types";
import { ArrowRightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Link from "next/link";
import Image from "next/image";

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
                    <Link href={"/product/" + product.id} key={i}>
                        <div className="rounded-[20px] w-[284px] h-[456px] box flex flex-col justify-between">
                            <div
                                key={i}
                                className="rounded-[20px]  w-[284px] h-[456px] flex flex-col justify-between"
                            >
                                <div>
                                    <Image
                                        className="object-center p-5 h-[278px] bg-gray-200 rounded-lg"
                                        src={product.image}
                                        alt={product.name}
                                    />
                                    <h3 className="text-[16px] mt-4 mb-4">
                                        {product.name}
                                    </h3>
                                </div>
                                <div>
                                    <span className="bg-[#f4f4f4] p-1 rounded-2xl text-[13px]">
                                        {product.axiom_monthly_price}
                                    </span>
                                    <div className="flex justify-between items-center mt-1">
                                        <p>
                                            {product.sale_price}{" "}
                                            <span>so&apos;m</span>
                                        </p>
                                        <Button
                                            icon={<ShoppingCartOutlined />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
