import { useLingui } from "@lingui/react";

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
