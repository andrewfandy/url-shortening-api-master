import GettingStarted from "./home/GettingStarted";

export default function Home() {
  return (
    <>
      <section className="relative mt-14 flex h-screen w-full flex-col items-center justify-center">
        <GettingStarted />
      </section>
      <section className="mt-14 flex h-screen w-full flex-col items-center justify-center">
        <GettingStarted />
      </section>
    </>
  );
}
