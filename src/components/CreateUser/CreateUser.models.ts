export interface UserValues {
  username: string;
  name: string;
  password: string;
  role: string;
  rate: string;
}

export interface CreateUserProps {
  onSuccess: () => void;
}
export interface CreateUserRefs {
  handleClose: () => void;
  handleOpen: () => void;
}
