import { PostWithUser } from "@/db/dbtypes";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const PostCard = ({ post, user }: PostWithUser) => {
  return (
    <div className={`flex w-full items-end justify-between gap-2 rounded-lg border border-cyan-600 p-4`}>
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{user?.username}</h4>
        <p className="text-sm leading-none">{post.text}</p>
      </div>
      <p className="text-sm leading-none">{dayjs(post.created_at).fromNow()}</p>
    </div>
  );
};

export default PostCard;
