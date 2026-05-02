import { ExternalLink } from "lucide-react";
import Square from "../ui/Square";
import { useEffect, useState } from "react";
import Anchor from "../typography/Anchor";
import { useNavigate } from "react-router";

interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

const themes: Theme[] = [
  {
    name: "paper",
    background: "#f8f3df",
    accent: "#fdfbf4",
    primary: "#282924",
    secondary: "#0d0e0b",
  },
  {
    name: "reuniclus",
    background: "#8db87a",
    accent: "#4a7245",
    primary: "#8b1a1a",
    secondary: "#e8e0c8",
  },
];

const themesMap: Record<string, Theme> = themes.reduce(
  (acc, theme) => {
    acc[theme.name] = theme;
    return acc;
  },
  {} as Record<string, Theme>,
);

type ThemeName = keyof typeof themesMap;

const Footer = () => {
  const [time, setTime] = useState<Date>(new Date(0, 0, 0));
  const [theme, setTheme] = useState<ThemeName>("paper");

  // TODO(felix): add new theme and fix namingg convention
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--dark",
      themesMap[theme].primary,
    );
    document.documentElement.style.setProperty(
      "--darker",
      themesMap[theme].secondary,
    );
    document.documentElement.style.setProperty(
      "--lighter",
      themesMap[theme].accent,
    );
    document.documentElement.style.setProperty(
      "--light",
      themesMap[theme].background,
    );
  }, [theme]);

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(intervalId);
  }, []);

  function isDarkColor(hex) {
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);

    // standard luminance formula
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance < 128;
  }

  const navigate = useNavigate();

  return (
    <footer className="bg-darker pt-16 px-8 sm:px-16 pb-8 text-[var(--light)] border-t-1 border-t-light font-mono font-[400] text-[10px] sm:text-sm">
      <div className="flex mb-16">
        <div
          style={{ lineHeight: "3rem" }}
          className="text-4xl sm:text-6xl w-1/2 font-accent mr-8"
        >
          Get in Touch
        </div>
        <div className="w-1/2 justify-between flex gap-4">
          <div className="flex flex-col gap-2">
            <Anchor onClick={() => navigate("/")}>HOME</Anchor>
            <Anchor onClick={() => navigate("/about")}>ABOUT</Anchor>
            <Anchor onClick={() => navigate("/contact")}>CONTACT</Anchor>
          </div>
          <div className="flex flex-col gap-2">
            <Anchor onClick={() => window.open("/documents/resume.pdf")}>
              RESUME
            </Anchor>
            <Anchor onClick={() => window.open("mailto:felixcao37@gmail.com")}>
              EMAIL
            </Anchor>
            <Anchor
              onClick={() =>
                window.open("https://www.linkedin.com/in/felix-cao/", "_blank")
              }
            >
              <div className="flex">
                <div className="mr-1">LINKEDIN</div>
                <div>
                  <ExternalLink size={12} />
                </div>
              </div>
            </Anchor>
            <Anchor
              onClick={() =>
                window.open("https://github.com/felixc90", "_blank")
              }
            >
              <div className="flex">
                <div className="mr-1">GITHUB</div>
                <div>
                  <ExternalLink size={12} />
                </div>
              </div>
            </Anchor>
          </div>
          <div>
            <div
              className="hover:underline hover:cursor-pointer"
              onClick={() => {
                setTheme("reuniclus");
              }}
            >
              PICK THEME
            </div>
            <div className="flex gap-1 mt-1 flex-row-reverse">
              <Square color={themesMap[theme].background} />
              <Square color={themesMap[theme].accent} />
              <Square color={themesMap[theme].primary} />
              {/* <Square color={themesMap[theme].secondary} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full mb-4">
        <div>©2025 FELIX CAO</div>
        <div className="hidden sm:block">
          {time.toLocaleTimeString().substring(0, 2)}
          <span className="animate-blink">:</span>
          {time.toLocaleTimeString().substring(3, 5)} SYD
        </div>
        <div>DEVELOPING APPS</div>
      </div>
      <div className="flex justify-between w-full font-mono text-[10px] sm:text-xs font-[450]">
        <Square color="var(--light)" />
        <div>BRUTALISM</div>
        <div className="flex gap-4">
          <Square color="var(--light)" className="hidden sm:block" />
          <Square color="var(--light)" />
          <Square color="var(--light)" className="hidden sm:block" />
        </div>
        <div>WITH REACT</div>
        <Square color="var(--light)" />
      </div>
    </footer>
  );
};

export default Footer;
