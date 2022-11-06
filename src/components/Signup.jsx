import { Button, Form, Input, Layout} from "antd"


export default function Signup({ setUser }){
    const handleFormSubmit = (values) => {
        console.log('success', values)
        fetch ('http://localhost:3030/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then(setUser)
        .catch(alert)
    }
    return(
    <Layout.Content style={{padding: '50px' } }>
        <h1>Login</h1>
        <Form onFinish={handleFormSubmit} labelCol={{span: 8}} wrapperCol={{span:16}}>
        <Form.Item label='Email' name='email' rules={[{
            required: true,
            message:'Please Enter Valid Email'
        }]}>
            <Input/>
        </Form.Item>
        <Form.Item label='Password' name='password'rules={[{
            required: true,
            message:'Not Correct password'
        }]}>
            <Input.Password/>
        </Form.Item>
        <Form.Item wrapperCol={{span: 16, offset: 8}}>
            <Button type="primary" htmlType="submit">Sign up</Button>
        <Button type="primary" danger htmlType="forgot">forgot password</Button>
        </Form.Item>
        </Form>
    </Layout.Content>
    
    )
}