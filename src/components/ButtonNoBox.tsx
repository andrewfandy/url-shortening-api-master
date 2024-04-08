type ButtonNoBoxProps = {
    text: string[]
}
export default function ButtonNoBox(props: ButtonNoBoxProps) {
    return (
        <ul className="">
            {
                props.text.map((item) => {

                    return (
                        <li>
                            <a className="text-center font-bold hover:text-primary-dark-violet text-neutral-gray" href="#">{item}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}