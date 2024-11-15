import { Button } from 'react-daisyui'
import { MdClose, MdEdit } from 'react-icons/md'
import { PostCardControlProps } from '../../interfaces'

const PostCardControl = ({
  postId,
  onDelete,
  onUpdate,
}: PostCardControlProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        className="w-fit h-10 min-h-0 bg-zinc-200"
        onClick={() => onUpdate((prevState) => !prevState)}
      >
        <MdEdit className="text-sm" />
      </Button>
      <Button
        className="w-fit h-10 min-h-0 bg-zinc-200"
        onClick={() => onDelete(postId)}
      >
        <MdClose className="text-sm" />
      </Button>
    </div>
  )
}

export default PostCardControl
