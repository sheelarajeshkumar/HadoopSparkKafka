import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-8">
        <Avatar />
      </div>
      <div className="mb-6 md:mb-6 sm:mx-0 text-center">
        <CoverImage title={title} src={coverImage} height={640} width={960} />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
