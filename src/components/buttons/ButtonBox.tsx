type ButtonVariant = "rounded-full" | "rounded-lg";

interface ButtonBoxProps {
  text: string;
  variant: ButtonVariant;
  route?: string;
}

export default function ButtonBox(props: ButtonBoxProps) {
  return (
    <button
      className={`w-full bg-primary-cyan p-3 font-bold text-white md:hover:bg-primary-cyan-hover ${props.variant}`}
    >
      {props.text}
    </button>
  );
}
