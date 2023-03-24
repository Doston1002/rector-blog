import { Footer, Navbar } from "..";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* <Navbar /> */}
      <div className="flex-auto flex items-center">
        <div className="text-white text-center bg-black mx-auto w-[500px] rounded-xl p-10">
          <p className="text-[red]">Something went wrong!</p>
          <br />
          <p className="w-[450px]">{error.message}</p>
          <br />
          <button className="bg-white text-black font-bold p-1 rounded" onClick={() => window.location.reload()}>Try again</button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default ErrorFallback;
