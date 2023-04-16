import { Button } from "../ui/Button";
import { Loader2 } from "lucide-react";
import { useGetFeed } from "@/lib/posts";
import PostCard from "./PostCard";

const Feed = () => {
  const { data, size, setSize, error, isLoading, mutate, isValidating } = useGetFeed();
  // concatted arrays in data because every page returns as individual array and we need to concat them to actually use
  const posts = data ? data.flat(1) : [];
  return (
    <div className="flex w-full flex-col items-center gap-3 md:w-[750px]">
      {posts?.map(({ post, user }, index) => {
        return <PostCard key={post.slug} post={post} user={user} />;
      })}
      <Button
        onClick={() => setSize(size + 1)}
        disabled={isValidating}
        className="bg-cyan-800 hover:bg-cyan-600 focus:ring-1 focus:ring-cyan-600"
      >
        {isValidating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
          </>
        ) : (
          "Load More"
        )}
      </Button>
    </div>
  );
};

export default Feed;
