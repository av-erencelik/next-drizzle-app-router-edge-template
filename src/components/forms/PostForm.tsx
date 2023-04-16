"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/Button";
import { postSchema } from "@/types/schemas";
import { PostData } from "@/types/types";
import { InputGroup } from "./InputGroup";
import { usePost } from "@/lib/posts";
import { Loader2 } from "lucide-react";
import { Textarea } from "../ui/Textarea";

const PostForm = () => {
  const { error, trigger, isMutating } = usePost();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>({
    resolver: zodResolver(postSchema),
  });
  const onSubmit = (data: PostData) => trigger(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-[300px] flex-col gap-1">
        <Textarea
          placeholder="Share a post"
          {...register("text")}
          errorMessage={errors.text?.message}
          className=" h-[100px] resize-none border-cyan-600 focus:ring-1 focus:ring-cyan-600"
        />
        <Button
          type="submit"
          variant="default"
          className="bg-cyan-800 hover:bg-cyan-600 focus:ring-1 focus:ring-cyan-600"
        >
          {isMutating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
            </>
          ) : (
            "Share"
          )}
        </Button>
      </div>
      <p className="mt-1 px-1 pb-2 text-center text-sm text-red-600">
        {error !== undefined ? (error instanceof Error ? error.message : "An error occurred") : ""}
      </p>
    </form>
  );
};

export default PostForm;
