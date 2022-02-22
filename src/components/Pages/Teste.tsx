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
         
        <HStack width='100%' border={4} height='10%' borderRadius={4} padding='0.8%' bgColor='white'>
        <Text background='transparent'  fontSize={20}><b>Dashboard Financeiro</b></Text>
        <HStack minW='60%' maxW='90%' justifyContent='right'>
        <Input borderRadius={5} minW='160px' maxW='270px'  textAlign={'center'}  placeholder="Todas as contas"></Input>
        </HStack>
          
        
          </HStack>
           
          <Content style={{ margin: '0 16px' }}>
        
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Box  padding={5} backgroundColor='white'>
                  <HStack>
                    <Text textColor={'dodgerblue'} fontSize={20} paddingBottom='2%'>R$</Text>

                    <VStack><br/><br/><br/>
                    <Text textColor={'dodgerblue'} fontSize={'40'}>2.619.904,37</Text>
                    <Text textAlign={'center'} textColor={'dodgerblue'} >Saldo Atual</Text>
                    </VStack>
                    
                  <HStack paddingLeft={5}>
                    <Text textColor={'dodgerblue'} fontSize={20} paddingBottom='10%'>R$</Text>

                    <VStack><br/><br/><br/>
                    <Text textColor={'dodgerblue'} fontSize={'40'}>583,34</Text>
                    <Text textAlign={'center'} textColor={'dodgerblue'} >A receber</Text>

                    </VStack>
                  </HStack>

                  </HStack>
                </Box>
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