import React from 'react';
import Swal from 'sweetalert2';
import { Form, Input, Button, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../css/login.css';

class Register extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form, history } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { registerAcc } = this.props;
        Promise.resolve(registerAcc(values.Username, values.Password)).then(
          () => {
            Swal.fire({
              type : 'success',
              title: 'Register succeed',
              confirmButtonText: 'LOGIN'
            }).then(result => {
              if (result.value) {
                history.push('/login');
              }
            });
          }
        );
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className="shadow-lg m-5 p-5 register">
        <h3 className="h3">REGISTER</h3>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('Username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('Password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input.Password
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          {/* <Form.Item>
            {getFieldDecorator('ConfirmPassword', {
              rules: [
                {
                  required: true,
                  message: 'Please input your confirm password!'
                }
              ]
            })(
              <Input.Password
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="Confirm password"
                placeholder="Confirm Password"
              />
            )}
          </Form.Item> */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create()(withRouter(Register));
