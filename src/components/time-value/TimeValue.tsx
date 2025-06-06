import { useLingui } from "@lingui/react";
import { getRelativeTimeString } from "@/components/time-value/utils";
import styles from "./TimeValue.module.scss";

export interface TimeValueProps {
  dateTime: Date;
  className?: string;
  format?: Intl.DateTimeFormatOptions;
}

export const TimeValue: React.FC<TimeValueProps> = (props) => {
  const { dateTime, format, className } = props;
  const { i18n } = useLingui();

  return (
    <time dateTime={dateTime.toISOString()} className={className}>
      {i18n.date(dateTime, format)}
    </time>
  );
};

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
