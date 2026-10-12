import ReactMarkdown, { type Components } from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import type { Node } from "unist";
import { visit } from "unist-util-visit";
import { YouTube } from "./YouTube";

/**
 * Turns the shortcodes used in articles into elements:
 *   ::youtube{id="VIDEO_ID"}                a video inside the text
 *   ::short{url="https://…" label="…"}      link card to a TikTok / Instagram / Shorts clip
 *   :::tip ... :::                          a highlighted tip box
 */
type DirectiveNode = { type: string; name?: string; attributes?: Record<string, string | null | undefined>; data?: Record<string, unknown> };

function shortcodes() {
  return (tree: Node) => {
    visit(tree, (n) => {
      const node = n as unknown as DirectiveNode;
      if (node.type !== "leafDirective" && node.type !== "containerDirective" && node.type !== "textDirective") return;
      const data = (node.data ??= {});
      const attrs = node.attributes ?? {};
      if (node.name === "youtube") {
        data.hName = "youtube-embed";
        data.hProperties = { videoid: attrs.id ?? "" };
      } else if (node.name === "short") {
        data.hName = "short-link";
        data.hProperties = { href: attrs.url ?? "", label: attrs.label ?? "" };
      } else if (node.name === "tip") {
        data.hName = "aside";
        data.hProperties = { className: "article-tip" };
      }
    });
  };
}

type Extra = {
  "youtube-embed": (props: { videoid?: string }) => React.ReactNode;
  "short-link": (props: { href?: string; label?: string }) => React.ReactNode;
};

export function ArticleBody({ markdown, labels }: { markdown: string; labels: { play: string; soon: string; short: string } }) {
  const components: Components & Extra = {
    "youtube-embed": ({ videoid }) => <YouTube id={videoid ?? ""} title="" playLabel={labels.play} soonLabel={labels.soon} />,
    "short-link": ({ href, label }) => {
      const platform = /tiktok/i.test(href ?? "") ? "TikTok" : /instagram/i.test(href ?? "") ? "Instagram" : "YouTube Shorts";
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="article-short">
          <span aria-hidden="true">▶</span>
          <span>
            <b>{label || labels.short}</b>
            <small>{platform}</small>
          </span>
        </a>
      );
    },
    img: ({ src, alt }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" />
        {alt && <figcaption>{alt}</figcaption>}
      </figure>
    ),
    p: ({ children, node }) => {
      // Markdown wraps a lone image in <p>; a <figure> can't live inside <p>.
      const only = node?.children.length === 1 && node.children[0].type === "element" && node.children[0].tagName === "img";
      return only ? <>{children}</> : <p>{children}</p>;
    },
    a: ({ href, children }) => {
      const external = href?.startsWith("http");
      return (
        <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </a>
      );
    },
  };

  return (
    <div className="article-body">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkDirective, shortcodes]} components={components as Components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
