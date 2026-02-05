import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="h-[500px] flex items-center justify-center animate-spin">
      <LoaderCircle />
    </div>
  );
};

export default Spinner;
