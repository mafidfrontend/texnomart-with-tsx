"use client";
import { Button } from "antd";
import {
    MenuOutlined,
    HeartOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import GlobalSearch from "./GlobalSearch";
import { useState } from "react";
import Catalog from "./Catalog";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav>
                <div className="container py-5">
                    <div className="flex items-center">
                        <Link href={"/"}>
                            <Image
                                width={230}
                                height={38}
                                src="/heroLogo.svg"
                                alt=""
                            />
                        </Link>
                        <div className="relative">
                            <Button
                                onClick={() => {
                                    setIsOpen(isOpen ? false : true);
                                }}
                                className="button"
                                icon={<MenuOutlined />}
                            >
                                Katalog
                            </Button>
                            <Catalog isOpen={isOpen} />
                        </div>
                        <GlobalSearch />
                        <div className="flex ml-12 gap-10">
                            <div className="flex flex-col items-center cursor-pointer">
                                <UserOutlined />
                                <p>Kirish</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <HeartOutlined />
                                <p>Sevimlilar</p>
                            </div>
                            <div className="flex flex-col items-center cursor-pointer">
                                <ShoppingCartOutlined />
                                <p>Savatcha</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
