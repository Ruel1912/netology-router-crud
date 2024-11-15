import { FormType } from '../constants';

export interface IPost {
  id: number;
  content: string;
  created?: number;
}

export interface PostCardProps {
  post: IPost
  onDelete?: (id: number) => void
  setOpenEdit?: React.Dispatch<React.SetStateAction<boolean>>
  showControl?: boolean
}

export interface PostCardControlProps {
  postId: number
  onUpdate: React.Dispatch<React.SetStateAction<boolean>>
  onDelete: (id: number) => void
}

export interface PostFormProps {
  onSubmit: (post: IPost) => void
  formType: FormType
  post?: IPost
}