import {
  QuestionMarkCircleIcon as QuestionIcon,
  ChartBarSquareIcon as StatsIcon,
} from "@heroicons/react/24/solid";
import { useDarkMode } from "../hooks/darkMode";

import SkySwitchDark from "../assets/sky-switch-dark.svg";
import SkySwitchLight from "../assets/sky-switch-light.svg";

interface Props {
  setIsHowToPlayModalOpen: (isOpen: boolean) => void;
  setIsStatsModalOpen: (isOpen: boolean) => void;
}

export const Header = ({
  setIsHowToPlayModalOpen,
  setIsStatsModalOpen,
}: Props) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex h-[84px] items-center justify-evenly bg-[#F3F3F3] dark:bg-dark-200">
      <button onClick={() => setIsHowToPlayModalOpen(true)}>
        <QuestionIcon className="h-6 w-6 text-gray-500 dark:text-white" />
      </button>
      <h1 className="text-[40px] font-semibold text-[#202537] dark:text-white">
        WORDLE
      </h1>
      <div className="flex gap-3">
        <button onClick={() => setIsStatsModalOpen(true)}>
          <StatsIcon className="h-6 w-6 text-gray-500 dark:text-white" />
        </button>
        <button onClick={() => toggleDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <img src={SkySwitchDark} alt="SkySwitchDark" className="h-6 w-12" />
          ) : (
            <img
              src={SkySwitchLight}
              alt="SkySwitchLight"
              className="h-6 w-12"
            />
          )}
        </button>
      </div>
    </div>
  );
};
