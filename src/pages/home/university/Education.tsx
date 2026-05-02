import ScrambleText from "@/components/ui/ScrambleText";
import { X } from "lucide-react";
import { useState } from "react";

interface EducationProps {
  setFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Education = ({ setFullscreen }: EducationProps) => {
  const items = [
    {
      name: "Academic Summary",
      description: [
        "University of New South Wales (2021 - 2025)",
        "Bachelor of Science (Statistics) / Science (Computer Science)",
        "",
        "Weighted Average Mark (WAM): 89.607",
        "",
        "Awards",
        "- Harry Manson Award (2024)",
        "- The Faculty of Science Dean's List for Academic Excellence (2021)",
        "- The Faculty of Engineering Dean's Award for the Best Performance in Year 1, 2 or 3 (2021)",
        "",
        "Academic Transcript",
      ],
    },
    {
      name: "Casual Academic",
      description: [
        "COMP2521: Data Structures and Algorithms",
        "Tutor and Lab Assistant",
        "2021 Term 3 - 2025 Term 1 (10 terms)",
        "",
        "Taught classes of 24 students the fundamentals of data structures and algorithms, covering topics such as algorithm analysis, recursion, trees, graphs and sorting algorithms",
        "",
        "See more in the work section",
      ],
    },
    {
      name: "Extracurricular: CSESoc",
      description: [
        "Computer Science and Engineering Society",
        "",
        "Socials Director (2022), Vice President (2023)",
        "",
        "- Worked with co-directors over 3 months to plan a camp for 150 attendees. Responsibilities include liasing with campsite, organising transport, planning activities and recruiting and training camp leaders.",
        "- Led a team of 8 subcommittee members to help plan social events such as 20 weekly BBQs, game nights, pub crawls and parties",
      ],
    },
    {
      name: "Extracurricular: CompClub",
      description: [
        "CompClub Mentor (2021 - 2022)",
        "",
        "- Mentored groups of high school students in learning introductory programming topics such as game design, web dev and python",
        "- Organised and presented a workshop teaching basic cybersecurity along with designing and running a CTF for the students",
      ],
    },
    {
      name: "Student Exchange",
      description: [
        "University of Toronto, Canada (Sep. - Dec. 2024)",
        "",
        "Courses",
        "- CSC311 (Introduction to Machine Learning)",
        "- CSC317 (Computer Graphics)",
        "- AST101 (The Sun and Its Neighbours)",
        "- PSY100 (Introductory Psychology)",
      ],
    },
  ];

  const [active, setActive] = useState(0);

  const Description = () => {
    return items[active].description.map((line, i) => {
      return (
        <div key={i}>
          {line == "" ? (
            <br />
          ) : line == "Academic Transcript" ? (
            <div
              className="flex flex-col hover:cursor-pointer hover:underline pointer-events-auto"
              onClick={() => window.open("/documents/transcript.pdf")}
            >
              {">"} {line}
            </div>
          ) : (
            <div className="flex flex-col pointer-events-auto">{line}</div>
          )}
        </div>
      );
    });
  };

  return (
    <div
      className={`px-8 sm:px-16 py-12 pointer-events-none`}
      style={{
        color: "var(--lighter)",
        zIndex: "21",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <div className="flex flex-col neue-montreal-mono justify-between h-full">
        <div className="flex justify-between">
          <div className="">
            <div className="mb-4 text-sm">ITEMS</div>
            {items.map((item, i) => (
              <div
                className={`hover:cursor-pointer mb-1 hover:underline text-xs pointer-events-auto ${i == active && "underline"}`}
                onClick={() => setActive(i)}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="flex">
            <div className="max-w-[24rem] min-w-[24rem] text-xs mr-4 tracking-tight hidden sm:inline">
              <Description />
            </div>
            <div className="inline text-sm sm:hidden max-w-34">
              UNIVERSITY OF NEW SOUTH WALES, SYDNEY
            </div>
            <div>
              <X
                onClick={() => setFullscreen(false)}
                className="hover:cursor-pointer pointer-events-auto "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm flex flex-col-reverse pointer-events-auto">
            <div className="max-w-[24rem] text-xs mr-4 tracking-tight inline sm:hidden">
              <Description />
            </div>
            <ScrambleText
              chars="upperCase"
              duration={3}
              className="text-sm hidden sm:inline"
            >
              UNIVERSITY OF NEW SOUTH WALES, SYDNEY
            </ScrambleText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
