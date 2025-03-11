import { Button, Input } from "antd";
import {
    MenuOutlined,
    HeartOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="container py-5">
                    <div className="flex items-center">
                        <Link href={"/"}>
                            <Image width={230} height={38} src="/heroLogo.svg" alt="" />
                        </Link>
                        <Button className="button" icon={<MenuOutlined />}>
                            Katalog
                        </Button>
                        <Input className="input" placeholder="Qidirish" />
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
