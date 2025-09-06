import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Loader2 className="animate-spin" size={24} />
    </div>
  );
};

export default Loading;
