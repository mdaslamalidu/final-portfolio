import SocialIcons from "../../hooks/SocialIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-[#0A1929] pt-10 mt-5">
      <div className="w-5/6 mx-auto">
        <SocialIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            MD ASLAM ALI
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 ASLAM. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
