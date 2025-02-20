import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center flex-col gap-4">
          <p className="text-center  text-sm">
            © 2025 ResumeDibo. All rights reserved.
          </p>
          {/* Add social media icons or links here if needed */}
          <div className="flex gap-6 mt-4">
            <Link
              href="/"
              className=" hover:text-blue-700 transition duration-300"
            >
              Facebook
            </Link>
            <Link
              href="/"
              className=" hover:text-blue-700 transition duration-300"
            >
              Twitter
            </Link>
            <Link
              href="/"
              className=" hover:text-blue-700 transition duration-300"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
