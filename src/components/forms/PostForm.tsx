"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/Button";
import { postSchema } from "@/types/schemas";
import { PostData } from "@/types/types";
import { InputGroup } from "./InputGroup";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>({
    resolver: zodResolver(postSchema),
  });
  const onSubmit = (data: PostData) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-5">
        <InputGroup
          type="text"
          placeholder="Enter a text"
          {...register("text")}
          errorMessage={errors.text?.message}
          className="w-[300px]"
        />
        <Button
          type="submit"
          variant="default"
          className="bg-cyan-800 hover:bg-cyan-600 focus:ring-1 focus:ring-cyan-600"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
