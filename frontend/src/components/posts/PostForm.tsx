import { Button } from 'react-daisyui'
import { IPost, PostFormProps } from '../../interfaces'

const PostForm = ({ onSubmit, formType, post }: PostFormProps) => {
  
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const postData = Object.fromEntries(formData.entries()) as unknown as IPost
    onSubmit({ ...postData, created: Date.now() })
  }

  return (
    <form method="POST" onSubmit={onSubmitHandler} className="w-full">
      <h2 className="font-bold text-2xl mb-2">
        {formType === 'new' ? 'Создать пост' : 'Редактировать пост'}
      </h2>
      <div className="w-full">
        <textarea
          className="textarea textarea-bordered textarea-lg w-full min-h-40"
          name="content"
          id="content"
          defaultValue={post?.content}
          required
        ></textarea>
        {formType === 'edit' && (
          <input type="hidden" name="id" defaultValue={post?.id} />
        )}
        <div className="flex justify-end mt-2">
          <Button type="submit" className="btn-accent btn-block">
            {formType === 'new' ? 'Создать' : 'Редактировать'}
          </Button>
        </div>
      </div>
    </form>
  )
}

export default PostForm
