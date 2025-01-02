import { Button, Checkbox, Form, Input, Flex, Space } from 'antd';
import { withRouter } from '../utils/WithRouterContainer';

const loginFormStyle = { display: 'flex', margin: 50, minWidth: "800px" };

const LoginPage = ({
	navigate
}) => {

	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const onReturnHomeButtonClicked = () => {
		navigate('/');
	};
	
	return (
		<Flex justify="center" align="center" vertical>
			<h1>User Login</h1>
			<Space direction="vertical" size="middle" style={loginFormStyle}>
				
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Email"
						name="Email"
						rules={[{ required: true, message: 'Please input your email!' }]}
					>
					<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
					<Input.Password />
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked" label={null}>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item label={null}>
						<Space>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
							<Button color="default" variant="dashed" onClick={onReturnHomeButtonClicked}>
								Home
							</Button>
						</Space>
					</Form.Item>
				</Form>
			</Space>
		</Flex>
	)
}

export default withRouter(LoginPage);