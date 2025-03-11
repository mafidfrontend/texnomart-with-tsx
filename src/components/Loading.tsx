import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Loading() {
    return (
        <div className="flex justify-center h-full items-center w-full">
            <Spin indicator={<LoadingOutlined spin />} size="large" />
        </div>
    );
}
