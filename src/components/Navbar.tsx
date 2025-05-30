import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
// import {
//   LoginLink,
//   RegisterLink,
//   getKindeServerSession,
// } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40">
            <img
              src="/logo.png"
              alt="minutesowl"
              style={{ height: "2.5rem" }}
            />
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              {/* <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Sign in
              </LoginLink> */}
              {/* <RegisterLink
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Join the Wailist! <ArrowRight className="ml-1.5 h-5 w-5" />
              </RegisterLink> */}
              <Link
                className={buttonVariants({
                  size: "sm",
                  className:
                    "mt-1.5 p-2 rounded-lg shadow-md bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-gray-200 hover:shadow-lg",
                })}
                href="https://tally.so/r/waYYvy"
                target="_blank"
              >
                <span>Join the Waitlist!</span>
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
