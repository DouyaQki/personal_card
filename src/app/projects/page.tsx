import Image from "next/image";
import acs2025 from "@/assets/acs2025.jpg";
import product_landing_page from "@/assets/product_landing_page.jpg";
import tribute_page from "@/assets/tribute_page.jpg";
import survey_form from "@/assets/sf.jpg";
import todo from "@/assets/todo.jpg";
import drum_machine from "@/assets/drum_machine.jpg";
import StreetFighterQuotes from "@/assets/StreetFighterQuotes.jpg";
import javascript_calculator from "@/assets/javascript_calculator.jpg";
import _25_5_clock from "@/assets/25_5_clock.jpg";
import markdown_previewer from "@/assets/markdown_previewer.jpg";
import portfolio_freecodecamp from "@/assets/portfolio_freecodecamp.jpg";

const projects = [
  {
    id: 1,
    src: acs2025,
    href: "https://douyaqki.github.io/anime_chart_summer_2025/",
    title: "Anime Chart Summer 2025",
    description: "A chart with almost all the TV animes being broadcasted.",
  },
  {
    id: 2,
    src: product_landing_page,
    href: "https://douyaqki.github.io/responsive_web_design/product_landing_page/index.html#home",
    title: "Product Landing Page",
    description: "A product landing page based on Roamer watches.",
  },
  {
    id: 3,
    src: tribute_page,
    href: "https://douyaqki.github.io/responsive_web_design/tribute/index.html#sec-2-success",
    title: "Tribute Page",
    description:
      "JoJo's Bizarre Adventure is really fun, so I created a tribute page for Araki.",
  },
  {
    id: 4,
    src: survey_form,
    href: "https://douyaqki.github.io/responsive_web_design/survey_form/index.html",
    title: "Survey Form",
    description: "A contact form.",
  },
  {
    id: 5,
    src: todo,
    href: "https://douyaqki.github.io/todo/",
    title: "TODO",
    description: "For creating, organizing, and managing your pending tasks.",
  },
  {
    id: 6,
    src: drum_machine,
    href: "https://douyaqki.github.io/drum_machine/",
    title: "Drum Machine",
    description: "Play the drum machine by typing the keys or clicking the buttons.",
  },
  {
    id: 7,
    src: StreetFighterQuotes,
    href: "https://douyaqki.github.io/random_quote_machine/",
    title: "Random Quote Machine",
    description: "Street Fighter II was a great game at that time.",
  },
  {
    id: 8,
    src: javascript_calculator,
    href: "https://douyaqki.github.io/javascript_calculator/",
    title: "JavaScript Calculator",
    description: "A simple calculator to do some basic maths.",
  },
  {
    id: 9,
    src: _25_5_clock,
    href: "https://douyaqki.github.io/25_5_clock/",
    title: "25-5 clock",
    description: "A kitchen timer to break work into intervals.",
  },
  {
    id: 10,
    src: markdown_previewer,
    href: "https://douyaqki.github.io/markdown_previewer/",
    title: "Markdown Previewer",
    description: "Write text using Markdown syntax and see the formatted output in real-time",
  },
  {
    id: 11,
    src: portfolio_freecodecamp,
    href: "https://douyaqki.github.io/responsive_web_design/personal_portfolio/",
    title: "Personal Portfolio",
    description: "I made this as part of my final project for Freecodecamp.",
  },
];

export default function Projects() {
  return (
    <div className="px-4">
      <h1 className=" font-bold">PROJECTS</h1>
      <hr className="my-3" />

      <div className="grid grid-cols-1 place-items-center auto-rows-auto m-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, src, href, title, description }) => {
          return (
            <a
              href={href}
              key={id}
              className="p-2 rounded-md w-[18rem] flex flex-col justify-center items-center gap-1 transition duration-200 hover:bg-[#121224]"
            >
              <Image src={src} alt={title} className="select-none rounded-md" />
              <h2 className="font-bold">{title}</h2>
              <hr className="w-full" />
              <p className="text-center">{description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
