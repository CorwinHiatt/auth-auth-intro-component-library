import { Button, Form, Input, Layout} from "antd"


export default function Profile(){
    return(
    <Layout.Content style={{padding: '50px'}}>
        <h1>Login</h1>
        <Form labelCol={{span: 8}} wrapperCol={{span:16}}>
        <Form.Item label='Email' name='email'>
            <Input/>
        </Form.Item>
        <Form.Item label='Password' name='password'>
            <Input.Password/>
        </Form.Item>
        <Form.Item wrapperCol={{span: 16, offset: 8}}>
            <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
        </Form>
    </Layout.Content>
    
    )
}