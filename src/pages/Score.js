import { Link, useParams } from "react-router-dom";

const Score = () => {
  const { sum } = useParams();

  return (
    <div>
      <div className="bg-purple-900 h-screen mt-20">
        <div>
          <h1 className="text-yellow-300 text-4xl text-center relative top-28 font-poppins">
            Performance :
          </h1>
        </div>

        <div>
          <h1 className="text-yellow-300 text-5xl text-center relative top-32 font-poppins">
            {sum * 10}%
          </h1>
        </div>

        <Link to={"/"}>
          <div className="cursor-pointer">
            <h1 className="bg-yellow-400 text-3xl rounded-md p-3 flex items-center justify-center w-auto m-28 transform translate-y-48 hover:bg-yellow-200">
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </span>

              <span>Home</span>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Score;
