import ButtonBox from "../buttons/ButtonBox";
import ButtonNoBox from "../buttons/ButtonNoBox";

export default function UserAccount() {
  return (
    <>
      <ButtonNoBox text={"Login"} />
      <ButtonBox text={"Register"} variant="rounded-lg" />
    </>
  );
}
