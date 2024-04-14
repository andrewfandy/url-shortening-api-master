import { Link, useRouteError } from "react-router-dom";
import ButtonBox from "../components/ButtonBox";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);
  return (
    <>
      <h1>Error</h1>
      <p>Detailed Error:{error.stack}</p>
      <Link to={"/"}>
        <ButtonBox text={"Back to Home"} variant="rounded-lg" />
      </Link>
    </>
  );
}
