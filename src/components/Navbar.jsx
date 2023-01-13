import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/icon.png'
import '../App.css'

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])


  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <img src={icon} className='logo-img' alt="logo" />
        <Typography.Title level={2} className='logo'>
          <Link to='/' style={{ fontSize: '1.7rem' }}>Cryptocosm</Link>
        </Typography.Title>
        <Button className='menu-control-container p-3'style={{margin:'5px 10px', padding:'0px 10px'}} onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {
        activeMenu && (
          <Menu theme='dark'>
            <Menu.Item className='menus' icon={<HomeOutlined className='menus-icon' />} >
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item className='menus' icon={<FundOutlined className='menus-icon' />} >
              <Link to='/cryptocurrencies' >Cryptocurrencies</Link>
            </Menu.Item>
            {/* <Menu.Item className='menus' icon={<MoneyCollectOutlined className='menus-icon' />} >
              <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item> */}
            <Menu.Item className='menus' icon={<BulbOutlined className='menus-icon' />} >
              <Link to='/news'>News</Link>
            </Menu.Item>
          </Menu>
        )
      }
    </div>
  )
}

export default Navbar
