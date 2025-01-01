import React, {useState} from "react";
import {Layout, Menu, Button} from "antd";
import {
    AppstoreOutlined,
    TeamOutlined,
    UserOutlined,
    FolderOutlined,
    CustomerServiceOutlined,
    SettingOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import {mainLogo} from "../utils/imageUtils";
import "./css/sidebar.css";
import {useNavigate} from "react-router-dom";

const {Sider} = Layout;

const SideBar = ({visible, onClose, isMobileWidth, tabletVisible}) => {
    const [selectedKey, setSelectedKey] = useState("1");

    const handleMenuClick = ({key}) => {
        setSelectedKey(key);
    };

    const menuItems = [
        {
            key: "main",
            type: "group",
            label: visible ? "MAIN MENU" : null,
            children: [
                {
                    key: "1",
                    icon: <AppstoreOutlined/>,
                    label: "Dashboard",
                },
                {
                    key: "2",
                    icon: <TeamOutlined/>,
                    label: "Members",
                },
                {
                    key: "3",
                    icon: <UserOutlined/>,
                    label: "Psychologist",
                },
                {
                    key: "4",
                    icon: <FolderOutlined/>,
                    label: "Resource Directory",
                },
            ],
        },
        {
            key: "other",
            type: "group",
            label: visible ? "OTHER" : null,
            children: [
                {
                    key: "5",
                    icon: <CustomerServiceOutlined/>,
                    label: "Support",
                },
                {
                    key: "6",
                    icon: <SettingOutlined/>,
                    label: "Settings",
                },
            ],
        },
    ];

    return (
        <Sider
            width={240}
            collapsed={tabletVisible || !visible}
            collapsedWidth={isMobileWidth ? 0 : 80}
            trigger={null}
            style={{
                backgroundColor: "#FAFAFA",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                zIndex: 1001,
            }}
        >
            <div
                style={{
                    padding: "16px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    position: "relative",
                }}
            >
                <img
                    src={mainLogo}
                    alt="Saarthi Logo"
                    style={{
                        height: visible ? "40px" : "32px",
                        transition: "all 0.3s ease",
                    }}
                />
                {isMobileWidth && visible && (
                    <Button
                        type="text"
                        icon={<CloseOutlined/>}
                        onClick={onClose}
                        style={{
                            position: "absolute",
                            right: 16,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    />
                )}
            </div>

            <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                onClick={handleMenuClick}
                style={{
                    backgroundColor: "#FAFAFA",
                    border: "none",
                    padding: "8px",
                }}
                items={menuItems}
            />
        </Sider>
    );
};

export default SideBar;
