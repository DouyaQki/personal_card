import Image from "next/image";
import acs2025 from "@/assets/acs2025.jpg";
import product_landing_page from "@/assets/product_landing_page.jpg";
import tribute_page from "@/assets/tribute_page.jpg";
import survey_form from "@/assets/sf.jpg";

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
    description:
      "A contact form.",
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
