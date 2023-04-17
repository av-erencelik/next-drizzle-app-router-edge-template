import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const PostInner = ({ username, text, createdAt }: { username: string; text: string; createdAt: Date }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{username}</h4>
        <p className="text-sm leading-none">{text}</p>
      </div>

      <p className="text-sm leading-none">{dayjs(createdAt).fromNow()}</p>
    </>
  );
};

export default PostInner;
