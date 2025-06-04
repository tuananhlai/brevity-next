import { useLingui } from "@lingui/react";
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

/**
 * Convert a date to a relative time string, such as
 * "a minute ago", "in 2 hours", "yesterday", "3 months ago", etc.
 * using Intl.RelativeTimeFormat
 */
const getRelativeTimeString = (date: Date | number, locale: string): string => {
  // Allow dates or times to be passed
  const timeMs = typeof date === "number" ? date : date.getTime();

  // Get the amount of seconds between the given date and now
  const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

  // Array reprsenting one minute, hour, day, week, month, etc in seconds
  const cutoffs = [
    60,
    3600,
    86400,
    86400 * 7,
    86400 * 30,
    86400 * 365,
    Infinity,
  ];

  // Array equivalent to the above but in the string representation of the units
  const units: Intl.RelativeTimeFormatUnit[] = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
  ];

  // Grab the ideal cutoff unit
  const unitIndex = cutoffs.findIndex(
    (cutoff) => cutoff > Math.abs(deltaSeconds),
  );

  // Get the divisor to divide from the seconds. E.g. if our unit is "day" our divisor
  // is one day in seconds, so we can divide our seconds by this to get the # of days
  const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

  // Intl.RelativeTimeFormat do its magic
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
};
