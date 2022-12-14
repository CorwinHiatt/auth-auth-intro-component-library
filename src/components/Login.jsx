import { Button, Form, Input, Layout} from "antd"


export default function Login({setUser, setToken}){
    const handleFormSubmit = (values) => {
        console.log('success', values)
        fetch ('http://localhost:3030/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then( data => {
          setToken(data.token) 
          setUser(data.user)
        })
        .catch(alert)
    }
    return(
    <Layout.Content style={{padding: '100px' } }>
        <h1>Login</h1>
        <Form onFinish={handleFormSubmit} labelCol={{span:16}} wrapperCol={{span:3}}>
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
            <Button type="primary" htmlType="submit">Login</Button>
        <Button type="primary" danger htmlType="forgot">forgot password</Button>
        </Form.Item>
        </Form>
    </Layout.Content>
    
    )
}