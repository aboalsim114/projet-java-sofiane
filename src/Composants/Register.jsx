import React from 'react';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Card, Form, Input, Button, Checkbox, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
export default function Register() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>

                <Card style={{ width: 300 }}>
                    <Title level={2} style={{ textAlign: 'center' }}>Inscription</Title>
                    <Form
                        name="register"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Veuillez saisir votre e-mail!' }]}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
                        </Form.Item>

                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Veuillez choisir un nom d’utilisateur!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nom d'utilisateur" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Veuillez saisir un mot de passe!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Mot de passe"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                { required: true, message: 'Veuillez confirmer votre mot de passe!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Les deux mots de passe que vous avez entrés ne correspondent pas!'));
                                    },
                                }),
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Confirmez le mot de passe"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="register-form-button" style={{ width: '100%' }}>
                                S'inscrire
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </>
    );
}
