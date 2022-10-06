import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/icon.png'
import '../App.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            {/* <Avatar src={icon} className='logo-img' size='small' /> */}
            <img src={icon} className='logo-img' alt="logo" />
            <Typography.Title level={2} className='logo'>
                <Link to='/' style={{fontSize: '1.7rem'}}>Cryptocosm</Link>
            </Typography.Title>
        </div>
        <Menu theme='dark'>
              <Menu.Item className='menus' icon={<HomeOutlined className='menus-icon'/> } >
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item className='menus' icon={<FundOutlined className='menus-icon'/>} >
                <Link to='/cryptocurrencies' >Cryptocurrencies</Link>
              </Menu.Item>
              <Menu.Item className='menus' icon={<MoneyCollectOutlined className='menus-icon'/>} >
                <Link to='/exchanges'>Exchanges</Link>
              </Menu.Item>
              <Menu.Item className='menus' icon={<BulbOutlined className='menus-icon'/>} >
                <Link to='/news'>News</Link>
              </Menu.Item>
        </Menu>


            {/* <Button className='menu-control-container'>

            </Button> */}

    </div>
  )
}

export default Navbar
