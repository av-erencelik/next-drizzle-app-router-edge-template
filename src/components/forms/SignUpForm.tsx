"use client";

import { Input } from "../ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/Button";
import { useAuth } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSignUpClerk } from "@/lib/auth";
import { signUpSchema } from "@/types/schemas";
import { FormData } from "@/types/types";

const SignUpForm = () => {
  const router = useRouter();

  const { isSignedIn } = useAuth();

  const { trigger, isMutating, error } = useSignUpClerk();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit = (data: FormData) => trigger(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-80 flex-col gap-2">
      <div>
        <Input
          placeholder="Username"
          type="text"
          {...register("username")}
          className="border-cyan-600 focus:ring-1 focus:ring-cyan-600"
        />
        <p className="mt-1 px-1 text-xs text-red-600">{errors.username?.message}</p>
      </div>
      <div>
        <Input
          placeholder="Email"
          type="email"
          {...register("email")}
          className="border-cyan-600 focus:ring-1 focus:ring-cyan-600"
        />
        <p className="mt-1 px-1 text-xs text-red-600">{errors.email?.message}</p>
      </div>
      <div>
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
          className="border-cyan-600 focus:ring-1 focus:ring-cyan-600"
        />
        <p className="mt-1 px-1 text-xs text-red-600">{errors.password?.message}</p>
      </div>
      <Button
        type="submit"
        variant="default"
        disabled={isMutating}
        className="bg-cyan-800 hover:bg-cyan-600 focus:ring-1 focus:ring-cyan-600"
      >
        {isMutating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
          </>
        ) : (
          "Register"
        )}
      </Button>

      <p className="mt-1 px-1 text-center text-xs text-red-600">
        {error !== undefined ? (error instanceof Error ? error.message : "An error occurred") : ""}
      </p>
    </form>
  );
};

export default SignUpForm;
