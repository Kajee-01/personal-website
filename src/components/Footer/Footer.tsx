import clsx from "clsx";
import SocialMedia from "./SocialMedia";
import UkiAddress from "./UkiAddress";
import UkiLogo from "./UkiLogo";
import YarlItHabLogo from "./YarlItHabLogo";

export interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={clsx(className, "bg-white-100 flex justify-between flex-wrap px-5 ")}>
      <div className="container mx-auto px-8 lg:px-16 py-8 gap-10 flex max-w-4xl flex-wrap"></div>
      
      <div className="flex flex-wrap gap-8">
        <YarlItHabLogo />
        <UkiLogo />
        <UkiAddress />
      </div>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
