const STYLE_PROFILE_SECTION =
  "text-[#b8bcc3] flex flex-col justify-center items-center gap-1";

export function Profile() {
  return (
    <section className={STYLE_PROFILE_SECTION}>
      <h2>Qki (クキ)</h2>
      <p>Editor & Front End Developer</p>
      <p>
        Contact:{" "}
        <a
          href="mailto:qkimediaworks@gmail.com"
          className="transition duration-300 ease-in-out hover:bg-[#3e3e80]"
        >
          qkimediaworks@gmail.com
        </a>
      </p>
    </section>
  );
}
