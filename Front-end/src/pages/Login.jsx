import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login:', { email, senha });
    };

    return (
        <Container fluid className="p-0 vh-100">
            <Row className="g-0 vh-100">
                {/* Lado Esquerdo: Imagem/Banner (Visível apenas em telas grandes) */}
                <Col lg={7} className="d-none d-lg-flex flex-column align-items-center justify-content-center text-white" 
                     style={{ 
                         background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80")',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}>
                    <div className="p-5 text-center">
                        <h1 className="display-3 fw-bold mb-3">CRONA</h1>
                        <p className="lead">Organize o descanso da sua equipe com simplicidade e eficiência.</p>
                    </div>
                </Col>

                {/* Lado Direito: Formulário */}
                <Col lg={5} className="d-flex align-items-center justify-content-center bg-white">
                    <div className="w-100" style={{ maxWidth: '450px' }}>
                        {/* O Padding p-5 aqui faz o conteúdo respirar dentro da área do formulário */}
                        <div className="p-5"> 
                            <div className="mb-5">
                                <h2 className="fw-bold text-primary">Login</h2>
                                <p className="text-muted">Insira suas credenciais para acessar o painel.</p>
                            </div>

                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-4">
                                    <Form.Label className="small fw-bold text-uppercase text-muted">Endereço de Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="nome@empresa.com"
                                        className="py-3 shadow-sm border-0 bg-light"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="small fw-bold text-uppercase text-muted">Senha</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="••••••••"
                                        className="py-3 shadow-sm border-0 bg-light"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-between mb-4">
                                    <Form.Check type="checkbox" label="Lembrar-me" className="small text-muted" />
                                    <a href="#" className="small text-decoration-none fw-semibold">Esqueceu a senha?</a>
                                </div>

                                <Button variant="primary" type="submit" className="w-100 py-3 fw-bold shadow" 
                                        style={{ borderRadius: '10px', transition: '0.3s' }}>
                                    Entrar no Sistema
                                </Button>

                                <p className="text-center mt-5 text-muted small">
                                    Ainda não tem conta? <a href="#" className="fw-bold text-decoration-none">Solicite acesso ao RH</a>
                                </p>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;