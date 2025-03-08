import styles from "./TouchTarget.module.scss";

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
      <span className={styles.touchTarget} aria-hidden />
      {children}
    </>
  );
};
