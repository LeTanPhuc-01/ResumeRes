"use client";
import { useEffect, useState, useRef } from "react";
import { ResumePDF } from "components/Resume/ResumePDF";
import { initialResumeState } from "lib/redux/resumeSlice";
import { initialSettings } from "lib/redux/settingsSlice";
import { ResumeIframeCSR } from "components/Resume/ResumeIFrame";
import { START_HOME_RESUME, END_HOME_RESUME } from "home/constants";
import { makeObjectCharIterator } from "lib/make-object-char-iterator";
import { useTailwindBreakpoints } from "lib/hooks/useTailwindBreakpoints";
import { deepClone } from "lib/deep-clone";

// countObjectChar(END_HOME_RESUME) -> ~1800 chars
const INTERVAL_MS = 50; // 20 Intervals Per Second
const CHARS_PER_INTERVAL = 10;
// Auto Typing Time:
//  10 CHARS_PER_INTERVAL -> ~1800 / (20*10) = 9s (let's go with 9s so it feels fast)
//  9 CHARS_PER_INTERVAL -> ~1800 / (20*9) = 10s
//  8 CHARS_PER_INTERVAL -> ~1800 / (20*8) = 11s

const RESET_INTERVAL_MS = null; // 60s

export const AutoTypingResume = () => {
  const [resume, setResume] = useState(deepClone(initialResumeState));
  const [showScore, setShowScore] = useState(false);
  const resumeCharIterator = useRef(
    makeObjectCharIterator(START_HOME_RESUME, END_HOME_RESUME)
  );
  const hasSetEndResume = useRef(false);
  const { isLg } = useTailwindBreakpoints();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.7/odometer.min.js'; 
    script.async = true;
    script.onload = () => {
      // Odometer is now available
      const odometerElement = document.getElementById('odometer');
      if (odometerElement) {
        const odometer = new (window as any).Odometer({
          el: odometerElement,
          value: 0,
        });
        odometer.update(89); // Update with your score
      }
    };
    document.body.appendChild(script);
    const intervalId = setInterval(() => {
      let next = resumeCharIterator.current.next();
      for (let i = 0; i < CHARS_PER_INTERVAL - 1; i++) {
        next = resumeCharIterator.current.next();
      }
      if (!next.done) {
        setResume(next.value);
      } else {
        // Sometimes the iterator doesn't end on the last char,
        // so we manually set its end state here
        if (!hasSetEndResume.current) {
          setResume(END_HOME_RESUME);
          hasSetEndResume.current = true;
          setShowScore(true);
        }
      }
    }, INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    if (RESET_INTERVAL_MS) {
      const resetInterval = setInterval(() => {
        setResume(START_HOME_RESUME);
              }, RESET_INTERVAL_MS);

      return () => clearInterval(resetInterval);
    }
  }, []);

  return (
    <>
    {showScore && (
        <div className="text-2xl font-bold text-green-600 transition-opacity duration-700">
          This resume scored:<span id="odometer">89</span>/100
        </div>
      )}
      <ResumeIframeCSR documentSize="Letter" scale={isLg ? 0.7 : 0.5}>
        <ResumePDF
          resume={resume}
          settings={{
            ...initialSettings,
            fontSize: "12",
            formToHeading: {
              workExperiences: resume.workExperiences[0].company
                ? "WORK EXPERIENCE"
                : "",
              educations: resume.educations[0].school ? "EDUCATION" : "",
              projects: resume.projects[0].project ? "PROJECT" : "",
              skills: resume.skills.featuredSkills[0].skill ? "SKILLS" : "",
              custom: "CUSTOM SECTION",
            },
          }}
        />
      </ResumeIframeCSR>
      
    </>
  );
  
};
