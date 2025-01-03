import Link from "next/link";
import Image from "next/image";
import myLogo from "public/logo.png";

export function Footer() {
  return (
    <footer className="w-full bg-gray-200 text-gray-800">
      <div className="flex flex-col items-center justify-center gap-4 p-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Image src={myLogo} alt="My Logo" width={80} height={40} />
          <span className="hidden md:inline">
            © 2023 My Company. All rights reserved.
          </span>
        </div>
        <span className="block md:hidden">
          © 2023 My Company. All rights reserved.
        </span>
      </div>
    </footer>
  );
}