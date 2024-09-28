import { Button as ReactButton } from "reactstrap";
export default function Button({ title, onClick, disabled = false }) {
  return (
    <ReactButton disabled={disabled} color="success" onClick={onClick}>
      {title}
    </ReactButton>
  );
}
