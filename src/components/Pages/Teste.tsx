import React from "react";
import { Box, ChakraProvider, HStack, Image, Input, Text, VStack } from '@chakra-ui/react'
import logosimbolo from '../../../public/logosimbolo.png'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
DesktopOutlined,
PieChartOutlined,
FileOutlined,
TeamOutlined,
UserOutlined,
} from '@ant-design/icons';
import { Main } from "./Main";
import { useNavigate } from "react-router-dom";



export const Teste = () => {
    
const navigate = useNavigate()  
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <ChakraProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible={false} style={{backgroundColor: 'white'}} collapsed={true} width= '18%' >
        <Image marginLeft={2} marginTop={2} src="logosimbolo.png" paddingLeft={2.5} width='60%' height='4%'   ></Image>
          <Menu style={{marginTop: '5px'}} theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item  key="2" onClick={() => { navigate('/') }} icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item   key="1"   icon={<DesktopOutlined />}>
             Cliente
            </Menu.Item>
           
       
          </Menu>
        </Sider>
        <Layout className="site-layout">
         
        <HStack width='100%' border={4} borderRadius={4} padding='0.8%' bgColor='white'>
        <Text background='transparent' fontSize={20}>Dashboard Financeiro</Text>
        <HStack minW='60%' maxW='90%' justifyContent='right'>
        <Input borderRadius={5} minW='160px' maxW='270px'  textAlign={'center'}  placeholder="Todas as contas"></Input>
        </HStack>
          
        
          </HStack>
           
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px  10' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <h1>Segunda página</h1>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Success Sistemas LTDA.</Footer>
        </Layout>
      </Layout>
      </ChakraProvider>
    );
  }
}
    return (
      <SiderDemo/>
    )

}