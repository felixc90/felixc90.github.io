import { useNavigate, useLocation } from "react-router";

export const useNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return { handleNav };
};
