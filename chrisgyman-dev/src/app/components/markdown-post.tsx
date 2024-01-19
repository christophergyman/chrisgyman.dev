import Markdown from "react-markdown";

export function MarkdownComponent() {
  const markdown = "# Hi, *Pluto*!";

  return (
    <div>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default { MarkdownComponent };
