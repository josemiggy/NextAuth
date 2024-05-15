import { Header, Footer, Body } from "./components";

const Web = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
      <div className="border-gray-200 flex flex-col rounded-lg border bg-white shadow-sm max-w-3xl w-full">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Web;
