import illustration from "../../assets/illustration-working.svg";
import ButtonBox from "../../components/buttons/ButtonBox";
export default function GettingStarted() {
  return (
    <>
      <div className="flex h-screen w-3/4 flex-col md:flex-row-reverse">
        <aside className="relative flex h-1/2 w-full items-center  justify-center md:h-full">
          <img
            src={illustration}
            className="absolute -right-24 w-full"
            alt="hero mobile"
          />
        </aside>
        <aside className="flex h-1/2  flex-col items-center justify-center text-center md:h-full md:items-start md:text-left">
          <h1 className="mb-2 text-5xl font-semibold">
            More than just shorter links
          </h1>
          <p className="text-neutral-gray-violet">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="mt-2">
            <ButtonBox text="Get Started" variant="rounded-full" />
          </button>
        </aside>
      </div>
      <div className="bottom-0 p-5 ">testsaaaaaaaaaaaaaaaaa</div>
    </>
  );
}
