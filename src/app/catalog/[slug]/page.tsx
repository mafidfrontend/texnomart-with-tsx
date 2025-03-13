"use client";
import Product from "@/components/Product";
import { Pagination } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type CategorySlugType = {
    name: string;
    sale_price: number;
    image: string;
    axiom_monthly_price: string;
    id: number;
};

type Nimadr = CategorySlugType[];

type aa = {
    total: number;
    products: Nimadr;
};

function CatalogMenu() {
    const { slug } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState<aa>();

    useEffect(() => {
        axios
            .get(
                `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${currentPage}`
            )
            .then((res) => {
                console.log(res.data.data);
                setCategory(res.data.data);
            });
    }, [currentPage]);
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between flex-wrap">
                {category?.products?.map((item) => {
                    return (
                        <div key={item.id}>
                            <Product product={item} index={item.id} />
                        </div>
                    );
                })}
            </div>
            <Pagination
                pageSize={20}
                onChange={(page) => {
                    setCurrentPage(page);
                }}
                defaultCurrent={currentPage}
                total={category?.total}
            />
        </div>
    );
}

export default CatalogMenu;