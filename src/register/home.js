import React from 'react';
import { Form, Input, Button,Icon } from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="shadow-lg m-5 p-5 register">
        <h3 className="h3">REGISTER</h3>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            }
          </Form.Item>
          <Form.Item>
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="Confirm password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Login;
