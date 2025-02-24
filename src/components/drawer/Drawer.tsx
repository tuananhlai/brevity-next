import { SerializedStyles, css, keyframes } from "@emotion/react";
import {
  Dialog,
  DialogProps,
  Heading,
  HeadingProps,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
} from "react-aria-components";

import {
  animationTimings,
  borderRadiuses,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  queries,
  spacings,
} from "@/styles/tokens";
import { alpha, darkModeSelector } from "@/styles/utils";

export interface DrawerProps
  extends Omit<DialogProps, "className" | "slot" | "style"> {
  /** @default 'left' */
  position?: DrawerPosition;
  /** @default 'md' */
  size?: DrawerSize;
  isDismissDisabled?: boolean;
  isKeyboardDismissDisabled?: boolean;
  shouldCloseOnInteractOutside?: ModalOverlayProps["shouldCloseOnInteractOutside"];
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    isDismissDisabled,
    isKeyboardDismissDisabled,
    shouldCloseOnInteractOutside,
    position = "left",
    size = "md",
    ...rest
  } = props;

  return (
    <ModalOverlay
      isDismissable={!isDismissDisabled}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      css={[modalOverlay, position === "right" && flexRowReverse]}
      shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
    >
      <Modal
        style={{
          ["--modal-max-width" as string]: drawerSizeToMaxWidth[size],
        }}
        css={[modal, drawerPositionToStyles[position]]}
      >
        <Dialog css={dialog} {...rest} />
      </Modal>
    </ModalOverlay>
  );
};

export type DrawerPosition = "left" | "right";
export type DrawerSize = "md" | "lg";
export { DialogTrigger as DrawerTrigger } from "react-aria-components";
export const DrawerTitle = (props: Omit<HeadingProps, "slot">) => {
  return <Heading slot="title" css={drawerTitle} {...props} />;
};

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const startOffset = spacings[3];

const slideFromLeft = keyframes`
  from {
    transform: translateX(-${startOffset});
  }
  to {
    transform: translateX(0);
  }
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(${startOffset});
  }
  to {
    transform: translateX(0);
  }
`;

const modalOverlay = css`
  position: fixed;
  inset: 0;
  width: 100vw;
  min-height: 100%;
  display: flex;
  align-items: stretch;
  overflow-y: auto;
  background-color: ${alpha(colors["zinc-950"], 25)};
  padding: ${spacings[2]};

  &[data-entering] {
    animation: ${fade} 0.1s ${animationTimings.easeOut};
  }

  &[data-exiting] {
    animation: ${fade} 0.1s ${animationTimings.easeIn} reverse;
  }

  ${darkModeSelector} {
    background-color: ${alpha(colors["zinc-950"], 50)};
  }
`;

const modal = css`
  background-color: ${colors.white};
  border-radius: ${borderRadiuses.xl};
  width: 100%;
  max-width: var(--modal-max-width);

  &[data-entering] {
    animation: var(--enter-animation);
  }

  &[data-exiting] {
    animation: var(--exit-animation);
  }
`;

const flexRowReverse = css`
  flex-direction: row-reverse;
`;

const dialog = css`
  outline: none;
`;

const drawerTitle = css`
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

const drawerSizeToMaxWidth: Record<DrawerSize, string> = {
  md: spacings[80],
  lg: "32rem",
};

const drawerPositionToStyles: Record<DrawerPosition, SerializedStyles> = {
  left: css`
    --enter-animation: ${slideFromLeft} 0.1s ${animationTimings.easeOut};
    --exit-animation: ${slideFromLeft} 0.1s ${animationTimings.easeIn} reverse;
  `,
  right: css`
    --enter-animation: ${slideFromRight} 0.1s ${animationTimings.easeOut};
    --exit-animation: ${slideFromRight} 0.1s ${animationTimings.easeIn} reverse;
  `,
};
