import { ProdcutsPageType } from "@/types";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Product({ product, index }: {product: ProdcutsPageType, index: number}) {
    return (
        <Link href={"/product/" + product.id} key={index}>
            <div className="rounded-[20px] w-[284px] h-[456px] box flex flex-col justify-between">
                <div className="rounded-[20px]  w-[284px] h-[456px] flex flex-col justify-between">
                    <div>
                        <Image
                            className="object-center p-5 h-[278px] w-full bg-gray-200 rounded-lg"
                            src={product.image}
                            alt=""
                            height={278}
                            width={"100"}
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
                                {product.sale_price} <span>so&apos;m</span>
                            </p>
                            <Button icon={<ShoppingCartOutlined />} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Product;
