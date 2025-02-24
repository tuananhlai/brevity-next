import { css } from "@emotion/react";

import { spacings } from "@/styles/tokens";

/**
 * TouchTarget wraps an element and adds an area that is
 * at least 48px by 48px to allow for easier touch interactions.
 *
 * @example
 *
 * <button>
 *   <TouchTarget>
 *     Button
 *   </TouchTarget>
 * </button>
 */
export const TouchTarget = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <span css={touchTarget} aria-hidden />
      {children}
    </>
  );
};

const touchTarget = css`
  position: absolute;
  left: 50%;
  top: 50%;
  width: max(100%, ${spacings[12]});
  height: max(100%, ${spacings[12]});
  transform: translate(-50%, -50%);

  @media (pointer: fine) {
    display: none;
  }
`;
