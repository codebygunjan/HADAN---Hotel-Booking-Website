import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Title({ title, subTitle, showButton = false }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-10 ml-10 w-[95%]">
      <div className="flex justify-between items-center mr-10">
        <h1 className="lg:text-5xl md:text-[40px] text-[35px] font-semibold lg:py-2 text-gray-700 capitalize font-playfair">
          {title}
        </h1>
        {showButton && (
          <button
            onClick={() => {
              navigate("/hotels");
            }}
            className="lg:px-6 px-4 lg:py-3 py-2 lg:text-sm md:text-sm text-[13px] font-medium border border-primary rounded-lg bg-white hover:bg-background transition-all cursor-pointer flex items-center gap-2 ml-3"
          >
            View All <MoveRight size={17} strokeWidth={2} />
          </button>
        )}
      </div>
      <p className="lg:text-lg lg:w-150 w-full pr-10 text-sm text-gray-700 ">
        {subTitle}
      </p>
    </div>
  );
}

export default Title;
