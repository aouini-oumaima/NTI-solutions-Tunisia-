/**
 * Drop-in replacement for <img> that auto-prepends the basePath.
 * Required for GitHub Pages deployment where the site lives at /NTI-solutions-Tunisia-/.
 * next/image handles basePath automatically; plain <img> tags don't — this fixes that.
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function Img({ src, ...props }: ImgProps) {
  const srcStr = typeof src === "string" ? src : undefined;
  const resolved =
    srcStr && !srcStr.startsWith("http") && !srcStr.startsWith("data:") && !srcStr.startsWith("//")
      ? `${BASE_PATH}${srcStr}`
      : src;
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img src={resolved as string | undefined} {...props} />;
}
