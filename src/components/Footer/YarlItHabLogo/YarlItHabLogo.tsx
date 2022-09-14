import clsx from "clsx";
import yarlItHubLogo from './yarl-it-hub-logo.png'

export interface Props {
  className?: string;
}

const YarlItHabLogo = ({ className }: Props) => {
  return (
    <div className={clsx(className, "")}>
      {/* <span>YarlItHabLogo</span> */}
      <div className="w-24 h-36 flex items-center min-w-fit flex-1 sm:flex-none">
      <img alt="Yarl IT Hub Logo" src={yarlItHubLogo} className="h-24" />
    </div>
    </div>
  );
};

export default YarlItHabLogo;
