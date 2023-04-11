import { FormData } from "@/types/types";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
export const useSignUpClerk = () => {
  const router = useRouter();
  const { signUp, setActive } = useSignUp();
  const mutate = async (url: string, { arg }: { arg: FormData }) => {
    return await signUp!
      .create({
        emailAddress: arg.email,
        password: arg.password,
        username: arg.username,
        redirectUrl: "/",
      })
      .then((response) => {
        if (response.status === "complete") {
          console.log(response);
          setActive?.({ session: response.createdSessionId });
          router.refresh();
        }
      })
      .catch((error) => {
        throw new Error(error.errors[0].message);
      });
  };
  return useSWRMutation("signup", mutate);
};
