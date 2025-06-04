import Link, { LinkProps } from "next/link";
import {
  HTMLAttributeAnchorTarget,
  HTMLAttributeReferrerPolicy,
  forwardRef,
} from "react";
import { cn } from "@/styles/utils";
import styles from "./Text.module.scss";

export interface TextLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;

  /** Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang). */
  hrefLang?: string;
  /** The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target). */
  target?: HTMLAttributeAnchorTarget;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
  /** Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download). */
  download?: boolean | string;
  /** A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping). */
  ping?: string;
  /** How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy). */
  referrerPolicy?: HTMLAttributeReferrerPolicy;
}

const TextLink: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  TextLinkProps
> = (props, ref) => {
  const { className, ...rest } = props;

  return <Link ref={ref} className={cn(styles.link, className)} {...rest} />;
};

const _TextLink = /*#__PURE__*/ forwardRef(TextLink);

export { _TextLink as TextLink };
