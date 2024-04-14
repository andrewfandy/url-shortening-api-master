interface ButtonNoBoxProps {
  text: string;
}
export default function ButtonNoBox(props: ButtonNoBoxProps) {
  return (
    <div className="flex items-center justify-center">
      <span className="text-center font-bold text-neutral-gray-violet hover:text-primary-dark-violet">
        {props.text}
      </span>
    </div>
  );
}
