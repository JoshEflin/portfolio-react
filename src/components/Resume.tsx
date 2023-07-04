import download from "../assets/JoshEflin-Resume.pdf";
export default function Resume() {
  return (
    <>
      <h2> Resume and Skills</h2>
      <iframe
        id="resume"
        src="https://docs.google.com/document/d/e/2PACX-1vQe3rRIt8OqS_CvyEl-_gh2azjktITlmJAr4r4adHol1pgXHRKbvQ41nX0NDmPOOtWbqI-zSU2PhlSR/pub?embedded=true"
      ></iframe>
      <a href={download} download>
        <h2>Download resume</h2>
      </a>
    </>
  );
}
