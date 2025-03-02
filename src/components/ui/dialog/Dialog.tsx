import { css, keyframes } from "@emotion/react";
import { AriaModalOverlayProps } from "react-aria";
import {
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  Heading,
  HeadingProps,
  Modal,
  ModalOverlay,
} from "react-aria-components";

import {
  animationTimings,
  borderRadiuses,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  queries,
  shadows,
  spacings,
} from "@/styles/tokens";
import { alpha, darkModeSelector } from "@/styles/utils";

export interface DialogProps
  extends Omit<AriaDialogProps, "className" | "slot" | "style"> {
  /** @default 'lg' */
  size?: DialogSize;
  isDismissDisabled?: boolean;
  isKeyboardDismissDisabled?: boolean;
  shouldCloseOnInteractOutside?: AriaModalOverlayProps["shouldCloseOnInteractOutside"];
}

export const Dialog: React.FC<DialogProps> = (props) => {
  const {
    size = "lg",
    isDismissDisabled,
    isKeyboardDismissDisabled,
    shouldCloseOnInteractOutside,
    ...rest
  } = props;

  return (
    <ModalOverlay
      isDismissable={!isDismissDisabled}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      css={modalOverlay}
      shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
    >
      <Modal
        style={{
          ["--modal-sm-max-width" as string]: sizeToMaxWidth[size],
        }}
        css={modal}
      >
        <AriaDialog css={dialog} {...rest} />
      </Modal>
    </ModalOverlay>
  );
};

export { DialogTrigger } from "react-aria-components";

export const DialogTitle = (props: Omit<HeadingProps, "slot">) => {
  return <Heading slot="title" css={dialogTitle} {...props} />;
};

export const DialogBody = (props: React.ComponentPropsWithoutRef<"div">) => {
  return <div css={dialogBody} {...props} />;
};

export const DialogActions = (props: React.ComponentPropsWithoutRef<"div">) => {
  return <div css={dialogActions} {...props} />;
};

export type DialogSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const zoom = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(${spacings[3]});
  }
  to {
    transform: translateY(0);
  }
`;

const modalOverlay = css`
  position: fixed;
  inset: 0;
  width: 100vw;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  overflow-y: auto;
  background-color: ${alpha(colors["zinc-950"], 25)};
  padding-top: ${spacings[12]};

  &:where([data-entering]) {
    animation: ${fade} 0.1s ${animationTimings.easeOut};
  }

  &:where([data-exiting]) {
    animation: ${fade} 0.1s ${animationTimings.easeIn} reverse;
  }

  ${queries.sm} {
    padding: ${spacings[8]} ${spacings[6]};
    grid-template-rows: 1fr auto 3fr;
  }

  ${queries.lg} {
    padding: ${spacings[16]} ${spacings[8]};
  }

  ${darkModeSelector} {
    background-color: ${alpha(colors["zinc-950"], 50)};
  }
`;

const modal = css`
  background-color: ${colors.white};
  width: 100%;
  box-shadow: ${shadows.lg};
  min-width: 0;
  border-top-left-radius: ${borderRadiuses["3xl"]};
  border-top-right-radius: ${borderRadiuses["3xl"]};
  padding: ${spacings[8]};
  justify-self: center;
  grid-row-start: 2;
  --enter-animation: ${slideUp} 0.1s ${animationTimings.easeOut};
  --exit-animation: ${slideUp} 0.1s ${animationTimings.easeIn} reverse;

  &:where([data-entering]) {
    animation: var(--enter-animation);
  }

  &:where([data-exiting]) {
    animation: var(--exit-animation);
  }

  ${queries.sm} {
    --enter-animation: ${zoom} 0.1s ${animationTimings.easeOut};
    --exit-animation: none;
    max-width: var(--modal-sm-max-width);
    border-radius: ${borderRadiuses["2xl"]};
    margin-bottom: auto;
  }

  ${darkModeSelector} {
    background-color: ${colors["zinc-900"]};
  }
`;

const dialog = css`
  outline: none;
`;

const dialogTitle = css`
  text-wrap: balance;
  font-size: ${fontSizes.lg};
  line-height: ${lineHeights[6]};
  font-weight: ${fontWeights.semibold};
  color: ${colors["zinc-950"]};

  ${queries.sm} {
    font-size: ${fontSizes.base};
  }

  ${darkModeSelector} {
    color: ${colors.white};
  }
`;

const dialogBody = css`
  margin-top: ${spacings[6]};
`;

const dialogActions = css`
  margin-top: ${spacings[8]};
  display: flex;
  flex-direction: column-reverse;
  gap: ${spacings[3]};
  align-items: center;
  --children-width: 100%;

  & > * {
    width: var(--children-width);
  }

  ${queries.sm} {
    --children-width: auto;
    justify-content: flex-end;
    flex-direction: row;
  }
`;

const sizeToMaxWidth: Record<DialogSize, string> = {
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
};
