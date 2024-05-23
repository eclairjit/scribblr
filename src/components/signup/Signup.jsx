import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/authSlice.js";
import { Button, Input, Logo, Select } from "../index.js";
import { useDispatch } from "react-redux";
import { authService } from "../../appwrite/auth.js";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlesignup = async (data) => {
    try {
      const session = await authService.createAccount(data);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      console.log("Could not create account. Error: ", error.message);
      toast.error("Could not create account.", {
        duration: 3000,
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Toaster richColors position="bottom-right" />
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(handlesignup)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <p className="text-red-700 mt-1 text-sm">
                Full mame is required.
              </p>
            )}
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-700 mt-1 text-sm">Email is required.</p>
            )}
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <p className="text-red-700 mt-1 text-sm">Password is required.</p>
            )}
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
