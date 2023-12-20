import React from 'react';
import { Layout, Menu, Carousel, Typography, Row, Col, Card, Button, Divider } from 'antd';
import { LoginOutlined, FileOutlined, TeamOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function HomePage() {
    return (
        <Layout className="layout">
            <Header style={{ backgroundColor: '#001529' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">Accueil</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/login">Connexion</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/inscription">Inscription</Link>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content style={{ padding: '50px' }}>
                <Carousel autoplay>
                    <div>
                        <h3 style={{ height: '200px', color: '#fff', lineHeight: '200px', textAlign: 'center', background: '#5b8c00' }}>
                            Une Gestion des Employés Simplifiée
                        </h3>

                    </div>

                </Carousel>

                <div className="site-layout-content">
                    <Row gutter={16} style={{ marginTop: '20px', textAlign: 'center' }}>
                        <Col span={24}>
                            <Title level={2}>Explorez les Avantages de Notre Système</Title>
                            <Paragraph>
                                Une solution complète pour gérer votre personnel efficacement.
                            </Paragraph>
                        </Col>
                    </Row>

                    <Divider />

                    {/* Fonctionnalités Clés */}
                    <Row gutter={16} style={{ marginTop: '20px' }}>
                        <Col span={8}>
                            <Card title="Facilité d'Usage" bordered={false} icon={<FileOutlined />} >
                                Une interface intuitive pour une gestion des employés sans effort.
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Collaboration d'Équipe" bordered={false} icon={<TeamOutlined />} >
                                Outils de collaboration pour améliorer la productivité.
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Informations Sécurisées" bordered={false} icon={<InfoCircleOutlined />} >
                                Sécurisez les données de votre entreprise et de vos employés.
                            </Card>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '40px', textAlign: 'center' }}>
                        <Col span={24}>
                            <Button type="primary" icon={<LoginOutlined />} size="large"><Link to={"/login"}>Connexion</Link></Button>
                            <Button type="default" size="large" style={{ marginLeft: '20px' }}><Link to={"/inscription"}>inscription</Link></Button>
                        </Col>
                    </Row>
                </div>
            </Content>


            <Footer style={{ textAlign: 'center', backgroundColor: '#f0f2f5' }}>
                Gestion des Employés ©2023 - Tous droits réservés
            </Footer>
        </Layout>
    );
}
