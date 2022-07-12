import { AiFillStar } from "react-icons/ai";

const PostCard = ({ post, username, profilePic, followers }) => {
  const engagementCount =
    (parseInt(post.like) + parseInt(post.comment_count)) /
    (parseInt(followers) * 100);

  return (
    <div className="rounded overflow-hidden border w-full bg-white md:mx-0 lg:mx-0">
      <div className="w-full flex justify-between p-3">
        <div className="flex">
          <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
            <img src={profilePic} alt="profilepic" />
          </div>
          <div className="flex items-center ">
            <span className="pt-1 ml-2 font-bold text-sm">{username}</span>
          </div>
        </div>
        <span className="hover:scale-110 cursor-pointer hover:text-white ease-in-out duration-300 hover:bg-red-500 rounded-lg px-2 box-shadow-2xl pt-1 ml-2 font-bold text-sm flex items-center">
          <AiFillStar />
          {engagementCount}
        </span>
      </div>
      <img
        className="w-full bg-cover"
        src={post.thumbnail_src_proxy}
        loading="lazy"
      />
      <div className="px-3 pb-2">
        <div className="pt-2">
          <i className="far fa-heart cursor-pointer"></i>
          <span className="text-sm text-gray-400 font-medium">
            {post.like} likes
          </span>
        </div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            <span className="font-medium mr-2">{username}</span> {post.caption}
          </div>
        </div>
        <div
          onClick={() => (window.location.href = post.link_to_post)}
          className="text-sm mb-2 text-gray-400 cursor-pointer font-medium"
        >
          View all {post.comment_count} comments
        </div>
      </div>
    </div>
  );
};

export default PostCard;
