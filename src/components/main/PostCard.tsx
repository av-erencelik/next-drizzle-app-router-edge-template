import { PostWithUser } from "@/db/dbtypes";
import { AnimatePresence, motion } from "framer-motion";
import PostInner from "./PostInner";
const PostCard = ({ post, user }: PostWithUser) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        className={`flex w-[300px] items-end justify-between gap-2 rounded-lg border border-cyan-600 p-4 sm:w-full`}
        initial="pre"
        animate="visible"
        variants={{ pre: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.5 }}
      >
        <PostInner username={user!.username} createdAt={post.created_at} text={post.text} />
      </motion.div>
    </AnimatePresence>
  );
};

export default PostCard;
