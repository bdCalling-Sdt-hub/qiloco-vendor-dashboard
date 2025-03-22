import { Button, Form, Typography } from "antd";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate, useParams } from "react-router-dom";
const { Text } = Typography;

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState();
  const email = new URLSearchParams(location.search).get("email");

  const onFinish = async (values) => {
    navigate(`/auth/reset-password?email=${email}`);
  };

  const handleResendEmail = async () => {};

  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-[25px] text-white font-semibold mb-2">
          Verify OTP
        </h1>
        <p className="w-[80%] mx-auto text-[#A3A3A3]">
          We'll send a verification code to your email. Check your inbox and
          enter the code here.
        </p>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <div className="flex items-center justify-center mb-6">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={{
              height: 50,
              width: 50,
              background: "black",
              borderRadius: "8px",
              margin: "16px",
              fontSize: "20px",
              border: "1px solid #a11d26 ",
              color: "white",
              outline: "none",
              marginBottom: 10,
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        <div className="flex items-center justify-between mb-6 ">
          <Text className="text-[#A3A3A3]">Don't received code?</Text>

          <p
            onClick={handleResendEmail}
            className="login-form-forgot  font-medium cursor-pointer"
            // style={{ color: "#ffffff ", cursor: "pointer" }}
          >
            Resend
          </p>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            htmlType="submit"
            style={{
              width: "100%",
              height: 45,
              border: "1px solid #a11d26 ",
              outline: "none",
              boxShadow: "none",
              background: "#a11d26 ",
              color: "white",
            }}
          >
            Verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VerifyOtp;
