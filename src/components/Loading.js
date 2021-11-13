import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;

  return (
    <div className="spinContainer">
      <Spin indicator={antIcon} tip="Carregando..." size="large" />
    </div>
  );
}
