type ButtonNoBoxProps = {
    text: string
}
export default function ButtonNoBox(props:ButtonNoBoxProps){
    return (
            <a className="text-center" href="#">{props.text}</a>
    )
}