import AuthLayout from "@/components/Layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordIcon } from "@/lib/Icon";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <AuthLayout title="Welcome to Stylish">
      <form autoComplete="off" className="py-10 ">
        <div className="space-y-8">
          <div className="bg-[#f3f3f3] flex items-center px-3 rounded-md h-[55px]">
            <UserIcon />
            <Input
              name="username"
              autoComplete="off"
              placeholder="Username or Email"
              className={
                "h-full focus:outline-none border-0 placeholder:text-[16px]"
              }
            />
          </div>
          <div className="bg-[#f3f3f3] flex items-center px-3 rounded-md h-[55px]">
            <PasswordIcon />
            <Input
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Password"
              className={
                "h-full focus:outline-none border-0 placeholder:text-[16px]"
              }
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Link href={"#!"} className="mt-4 text-sm text-[#f83758]">
            Forgot Password?
          </Link>
        </div>
        <Button className={'mt-5 w-full h-[55px] text-xl'}>Login</Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
