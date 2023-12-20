import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const onFinish = () => {
        console.log('Login Details:', { username, password, remember });
    };

    return (
        <>
            <Header style={{ backgroundColor: '#001529' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
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
            <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
                <Card style={{ width: 300 }}>
                    <Title level={2} style={{ textAlign: 'center' }}>Connexion</Title>
                    <Form name="normal_login" onFinish={onFinish}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Veuillez saisir votre nom d’utilisateur!' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Nom d'utilisateur"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Veuillez saisir votre mot de passe!' }]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox
                                checked={remember}
                                onChange={e => setRemember(e.target.checked)}
                            >
                                Se souvenir de moi
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                Connexion
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Content>
        </>
    );
}
