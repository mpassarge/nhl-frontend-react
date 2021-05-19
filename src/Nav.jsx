import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    let path = useLocation().pathname;
    return (
        <Menu selectedKeys={[path]} theme="light" mode="horizontal">
            <Menu.Item key="/">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/standing">
                <Link to="/standing">Standing</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Nav;
