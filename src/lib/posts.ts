import { PostData } from "@/types/types";
import { toast } from "react-toastify";
import useSWRMutation from "swr/mutation";

export const usePost = () => {
  const mutate = async (url: string, { arg }: { arg: PostData }) => {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          toast.success("Post created", {
            className: "bg-cyan-200",
          });
        }
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  };
  return useSWRMutation("/api/post", mutate);
};
