import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function RichText({ content }: any) {
  return <>{documentToReactComponents(content)}</>;
}
