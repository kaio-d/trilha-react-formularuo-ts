import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export default function Button({ title, onClick }: IButtonProps) {
  return (
    <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
  )
}




