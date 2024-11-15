import { PostCardProps } from '../../interfaces'
import { Card } from 'react-daisyui'
import { Link } from 'react-router-dom'
import { routeList } from '../../constants'
import { formatDate } from '../../services/DateService'
import PostCardControl from './PostCardControl'

const PostCard = ({
  post,
  onDelete,
  setOpenEdit,
  showControl = false,
}: PostCardProps) => {
  return (
    <Card
      className={`card-compact bg-base-200 relative z-10 ${
        !showControl ? 'hover:shadow-md' : ''
      }`}
    >
      {!showControl && (
        <Link
          to={`${routeList.post}`.replace(':id', post.id.toString())}
          className="absolute top-0 left-0 w-full h-full"
        ></Link>
      )}
      <Card.Body className="">
        <Card.Actions className="flex items-center justify-between">
          {post.created && (
            <p className="w-fit flex-grow-0">{formatDate(post.created)}</p>
          )}
          {showControl && setOpenEdit && onDelete && (
            <PostCardControl
              onUpdate={setOpenEdit}
              postId={post.id}
              onDelete={onDelete}
            />
          )}
        </Card.Actions>
        <h2 className="text-2xl font-bold">{post.content}</h2>
      </Card.Body>
    </Card>
  )
}

export default PostCard
