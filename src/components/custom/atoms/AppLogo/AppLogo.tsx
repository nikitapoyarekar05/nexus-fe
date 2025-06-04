import Link from "next/link";
import { Icon } from "@iconify/react";

const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-violet-600 text-2xl">
        <Icon
          icon="material-symbols:in-home-mode-outline-rounded"
          className="text-violet-600 w-6 h-6"
        />
      </span>
      <Link href="/" passHref>
        <span className="text-md font-semibold">Neighbourly</span>
      </Link>
    </div>
  );
};

export default AppLogo;
