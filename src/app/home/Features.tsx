import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Professionally Graded",
    text: "Our AI-driven system provides an accurate, data-backed score for your resume based on key criteria like formatting, keyword relevance, industry standards, and overall impact. The score helps you quickly assess your resume's effectiveness and identify areas for improvement.",
  },
  {
    src: featureUSSrc,
    title: "Personalized Feedback",
    text: "Receive tailored, actionable feedback on your resume. The AI analyzes your document in detail, offering specific suggestions to enhance content, optimize phrasing, and highlight your most relevant skills—making sure you stand out to potential employers.",
  },
  {
    src: featurePrivacySrc,
    title: "ATS Compatibility Analysis",
    text: "Ensure your resume passes through Applicant Tracking Systems (ATS) without a hitch. The service checks your resume against common ATS algorithms, identifying and fixing issues that could prevent your resume from being properly read or ranked by these systems.",
  },
  {
    src: featureOpenSourceSrc,
    title: "Open-Source",
    text: (
      <>
        OpenResume is an open-source project, and its source code can be viewed
        by anyone on its{" "}
        <Link href="https://github.com/xitanggg/open-resume">
          GitHub repository
        </Link>
      </>
    ),
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36">
      <div className="mx-auto lg:max-w-4xl">
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
          {FEATURES.map(({ src, title, text }) => (
            <div className="px-2" key={title}>
              <div className="relative w-96 self-center pl-16">
                <dt className="text-2xl font-bold">
                  <Image
                    src={src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt="Feature icon"
                  />
                  {title}
                </dt>
                <dd className="mt-2">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
