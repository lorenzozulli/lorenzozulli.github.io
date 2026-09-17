import { Outlet, useLocation } from "@tanstack/react-router"
import { Typeme } from "../../molecules/Typeme/Typeme"
import { useAppLayout } from "./hooks/useAppLayout";
import { useEffect } from "react";
import { NavBar } from "./components/NavBar/NavBar";

export const AppLayout = () => {
  const location = useLocation();
  const { isAnimationEnded, setIsAnimationEnded } = useAppLayout();
  const pathname = location.pathname;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimationEnded(true);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname, setIsAnimationEnded]);

  return (
    <div className="flex w-full h-screen justify-center">
      <div className="flex flex-col items-center w-full max-w-200">
        <header className="flex w-full">
          <Typeme
            name={"zulli"}
            machineName={"mybrain"}
            separator={"~"}
            cursor={">"}
            text={`ls -a && cat ${pathname.replace('/', '')}.md`}
          />
        </header>
        <div className="w-full h-screen">
          {isAnimationEnded &&
            <>
              <NavBar />
              <Outlet />
            </>
          }
        </div>
      </div>
    </div>
  )
}
