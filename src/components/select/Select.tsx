import { forwardRef } from "react";
import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  Button,
  ListBox,
  SelectValue,
} from "react-aria-components";

import { ReplaceAriaRenderProps } from "@/utils";

import { Popover } from "../popover";

export interface SelectProps<T extends object>
  extends ReplaceAriaRenderProps<AriaSelectProps<T>> {
  // Add component props.
  items?: Iterable<T>;
}

const Select = <T extends object>(
  props: SelectProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const { children, items, ...rest } = props;
  return (
    <AriaSelect ref={ref} {...rest}>
      <Button>
        <SelectValue />
      </Button>
      <Popover>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  );
};

const _Select = /*#__PURE__*/ forwardRef(Select);

export { _Select as Select };
