import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type AppHashLinkProps = {
  /** Section id, with or without leading # (e.g. "membership" or "#membership") */
  toId: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};
const AppHashLink = ({
  toId,
  className,
  children,
  onClick
}: AppHashLinkProps) => {
  const navigate = useNavigate();
  const id = toId.startsWith("#") ? toId.slice(1) : toId;
  const hash = `#${id}`;
  const href = `/${hash}`;
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow open-in-new-tab behaviors
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (onClick) onClick();

    // Navigate to home with hash (SPA-safe)
    navigate({
      pathname: "/",
      hash
    }, {
      replace: false
    });

    // Scroll once the section exists
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        return;
      }
      attempts += 1;
      if (attempts < 60) requestAnimationFrame(tryScroll);
    };
    requestAnimationFrame(tryScroll);
  };
  return;
};
export default AppHashLink;