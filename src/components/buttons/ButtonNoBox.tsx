interface ButtonNoBoxProps {
  text: string;
}
export default function ButtonNoBox(props: ButtonNoBoxProps) {
  return (
    <div className="flex cursor-pointer items-center justify-center p-3">
      <span className="text-center font-bold text-white md:text-neutral-gray-violet md:hover:text-primary-dark-violet">
        {props.text}
      </span>
    </div>
  );
}
