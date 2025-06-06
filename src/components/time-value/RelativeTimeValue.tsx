import { useLingui } from "@lingui/react";
import { getRelativeTimeString } from "@/components/time-value/utils";

export interface RelativeTimeValueProps {
  dateTime: Date;
  className?: string;
}

export const RelativeTimeValue: React.FC<RelativeTimeValueProps> = (props) => {
  const { dateTime, className } = props;
  const { i18n } = useLingui();

  return (
    <time dateTime={dateTime.toISOString()} className={className}>
      {getRelativeTimeString(dateTime, i18n.locale)}
    </time>
  );
};
