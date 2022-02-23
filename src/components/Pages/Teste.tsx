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
import '../Styles/ContentStyles.css'



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
        <Layout  className="site-layout">
         
        <HStack width='100%' border={4} height='10%' borderRadius={4} padding='0.8%' bgColor='white'>
        <Text paddingLeft='1%' background='transparent' whiteSpace={'nowrap'}  fontSize={20}><b>Dashboard Financeiro</b></Text>
        <HStack minW='60%' id="hstack--input"  maxW='90%' paddingLeft='50%'>
        <Input borderRadius={5}  textAlign={'left'}  placeholder="Todas as contas"></Input>
        </HStack>
          
        
          </HStack>
           
          <Content style={{ margin: '0 1%', backgroundColor: 'whitesmoke', display: '-ms-inline-flexbox' }}>
            <div className="site-layout-background" style={{ padding: 20, minHeight: 360, width: '100%' }}>
                <Box width='100%'  padding='1%' alignContent={'center'} backgroundColor='white'>
                <HStack  width='100%'   id="hstack--global">

                  <HStack paddingLeft='1%' minWidth='25%' display={'flex'} maxWidth='25%'>
                    <VStack paddingBottom='13%'>
                    <Text textAlign={'left'} fontSize={20} textColor={'blue'}>R$</Text>
                    </VStack>
                  <VStack>
                    <Text  textColor={'blue'} fontSize={34}>2.619.904,37</Text>
                    <Text><b>SALDO ATUAL</b></Text>
                  </VStack>
                  </HStack>

                    

                  <HStack paddingLeft='5%' minWidth='25%' display={'flex'}  maxWidth='25%'>
                    <VStack paddingBottom='13%'>
                    <Text textAlign={'left'} fontSize={20} textColor={'blue'}>R$</Text>
                    </VStack>
                  <VStack>
                    <Text  textColor={'blue'} fontSize={34}>583,34</Text>
                    <Text><b>A RECEBER</b></Text>
                  </VStack>
                  </HStack>



                 <HStack paddingLeft='5%' minWidth='25%' display={'flex'}  maxWidth='25%'>
                    <VStack paddingBottom='13%'>
                    <Text textAlign={'left'} fontSize={20} textColor={'blue'}>R$</Text>
                    </VStack>
                  <VStack>
                    <Text  textColor={'blue'} fontSize={34}>19.125,00</Text>
                    <Text><b>A PAGAR</b></Text>
                  </VStack>
                  </HStack>


                   <HStack paddingLeft='10%' minWidth='25%' display={'flex'}  maxWidth='25%'>
                    <VStack paddingBottom='13%'>
                    <Text textAlign={'left'} fontSize={20} textColor={'blue'}>R$</Text>
                    </VStack>
                  <VStack>
                    <Text whiteSpace={'nowrap'}  textColor={'blue'} fontSize={34}>2.601.362,71</Text>
                    <Text><b>SALDO PROJETADO</b></Text>
                  </VStack>
                  </HStack>

                </HStack>
                </Box>
            </div>
          </Content>
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