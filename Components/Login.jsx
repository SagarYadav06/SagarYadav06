import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
     
          
            <div className="space-y-1">
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>

              <div className="space-y-1">
              <Label>Password</Label>
              <Input type="password" placeholder="Enter your password" />
            </div>

            <Button className="w-full">Login</Button>
            <p className="text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <span className="text-blue-600 cursor-pointer">
                Sign up
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
