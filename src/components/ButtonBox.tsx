type ButtonVariant = "rounded-full" | "rounded-lg";

interface ButtonBoxProps {
  text: string;
  variant: ButtonVariant;
  route?: string;
}

export default function ButtonBox(props: ButtonBoxProps) {
  return (
    <button
      className={`p-2 bg-primary-cyan text-white hover:bg-primary-cyan-hover rounded-md font-bold ${props.variant}`}
    >
      {props.text}
    </button>
  );
}
