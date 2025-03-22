import { Button, Form, Input, ConfigProvider } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const email = new URLSearchParams(location.search).get("email");
  const navigate = useNavigate();

  const onFinish = async (values) => {
    navigate(`/auth/login`);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-[25px] text-white font-semibold mb-2">
          Set a new password
        </h1>
        <p className="text-[#C0C7CA] ">
          Create a new password. Ensure it differs from previous ones for
          security.
        </p>
      </div>
      <ConfigProvider
        theme={{
          components: {
            Form: {
              labelColor: "white",
            },
          },
        }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="newPassword"
            label={
              <p
                style={{
                  display: "block",
                }}
                htmlFor="email"
                className="text-base font-normal text-white"
              >
                New Password
              </p>
            }
            rules={[
              {
                required: true,
                message: "Please input your new Password!",
              },
            ]}
            style={{ marginBottom: 0 }}
          >
            <Input.Password
              type="password"
              placeholder="Enter New password"
              style={{
                // border: "1px solid #E0E4EC",
                border: "none",
                height: "52px",
                background: "#18191b",
                borderRadius: "8px",
                color: "white",
                outline: "none",
              }}
              className="mb-6"
            />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: 0 }}
            label={
              <p
                style={{
                  display: "block",
                }}
                htmlFor="email"
                className="text-base text-white font-normal"
              >
                Confirm Password
              </p>
            }
            name="confirmPassword"
            dependencies={["newPassword"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter Confirm password"
              style={{
                // border: "1px solid #E0E4EC",
                color: "white",
                border: "none",
                height: "52px",
                background: "#18191b",
                borderRadius: "8px",
                outline: "none",
              }}
              className="mb-6"
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                height: 45,
                color: "white",
                fontWeight: "400px",
                fontSize: "18px",
                border: "1px solid #a11d26",
                background: "#a11d26 ",
                marginTop: 20,
              }}
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default ResetPassword;
