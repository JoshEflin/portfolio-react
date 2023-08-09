import download from "../assets/JoshEflin-Resume.pdf";
export default function Resume() {
  return (
    <>
      <h2> Resume and Skills</h2>
      <iframe id="resume" src={download}></iframe>
      <a href={download} download>
        <h2>Download resume</h2>
      </a>
    </>
  );
}
