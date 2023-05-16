import {Menu} from "antd"
import Link from "next/link"
import {
  AppstoreOutlined,
  LoginOutlined, 
  UserAddOutlined,
} from '@ant-design/icons'


const {Item}=Menu;

const TopNav = () => {
  return (
    <Menu mode="horizontal">
      <Item icon={<AppstoreOutlined/>}>
        <Link href="/" passHref={true} legacyBehavior>
          <a style={{ textDecoration: 'none' }}>App</a>
        </Link>
      </Item>

      <Item icon={<LoginOutlined/>}>
        <Link href="/login" passHref={true} legacyBehavior>
          <a style={{ textDecoration: 'none' }}>Login</a>
        </Link>
      </Item>

      <Item icon={< UserAddOutlined/>}>
        <Link href="/register" passHref={true} legacyBehavior>
          <a style={{ textDecoration: 'none' }}>Register</a>
        </Link>
      </Item>
    </Menu>
  )
}

export default TopNav
