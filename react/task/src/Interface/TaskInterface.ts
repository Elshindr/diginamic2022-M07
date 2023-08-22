export interface TaskInterfacePost {
  description: string;
  done: boolean;
  order: number;
}
export default interface TaskInterface extends TaskInterfacePost {
  id: number;
}
export enum Direction {
  Up,
  Down,
}
export interface TaskInterfaceProps extends TaskInterface {
  onClickValidate: (
    event: React.MouseEvent<HTMLButtonElement>,
    task_id: number
  ) => void;
  onClickDelete: (
    event: React.MouseEvent<HTMLButtonElement>,
    task_id: number
  ) => void;
  onClickOrderButton: (
    event: React.MouseEvent<HTMLButtonElement>,
    task_id: number,
    index: number,
    direction: Direction
  ) => void;
  index: number;
  tasks_length: number;
}
