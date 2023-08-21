export interface TaskInterfacePost {
  description: string;
  done: boolean;
  order?: number;
}
export default interface TaskInterface extends TaskInterfacePost {
  id: number;
}
export interface TaskInterfaceProps extends TaskInterface {
  onClickValidate: (event: React.MouseEvent<HTMLButtonElement>, task_id: number) => void;
  onClickDelete: (event: React.MouseEvent<HTMLButtonElement>, task_id: number) => void;
}
