import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";
import Image from "next/image";
import downarr from "public/down-arrow-svgrepo-com.svg";
function DownArrowIcon() {
  return (
    <svg
      viewBox="0 0 330 330"
      className=" block w-10 h-10 animate-bounce"
    >
      <defs>
        <linearGradient id="downArrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--theme-purple)" />
          <stop offset="100%" stopColor="var(--theme-blue)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#downArrowGradient)"
        stroke="url(#downArrowGradient)"
        strokeWidth="8"
        strokeLinejoin="round"
        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001L165,218.787L25.607,79.394
        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150
        c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
        C331.465,94.749,331.465,85.251,325.607,79.393z"
      />
    </svg>
  );
}
export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Get your Resume graded today
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl">
          With this free, open-source, and powerful AI-driven platform.
        </p>
        <Link href="/resume-import" className="btn-primary mt-6 lg:mt-14">
          Upload resume <span aria-hidden="true">→</span>
        </Link>
        <p className="ml-6 mt-3 text-sm text-gray-600">No sign up required</p>
        <p className="mt-3 text-sm text-gray-600 lg:mt-24">
          Already have a resume? Test its ATS readability with the{" "}
          <Link href="/resume-parser" className="underline underline-offset-2">
            resume parser
          </Link>
        </p>
        <p className="flex justify-center mt-6 lg:mt-14 text-primary font-semibold">Learn more</p>
        <Link href="#features-section" className="flex justify-center mt-3 lg:mt-5">
            <DownArrowIcon />
        </Link>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
      <div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
        <AutoTypingResume />
      </div>
    </section>
  );
};
