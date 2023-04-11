"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/Button";
const schema = z
  .object({
    text: z.string().min(1, "Text is required").nonempty("Text is required"),
  })
  .required();

type FormData = z.infer<typeof schema>;
const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" placeholder="Enter a text" {...register("text")} />
      <p>{errors.text?.message}</p>
      <Button type="submit" variant="default">
        Submit
      </Button>
    </form>
  );
};

export default PostForm;
