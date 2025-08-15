const Footer = () => {

  return (
    <div className="w-full h-[60px] text-white z-10 absolute bg-black">
      <div className="w-full max-w-[1500px] h-full mx-auto flex items-center justify-between px-4">
        <div className="flex gap-6"> 
            <p className="">Copyright © {getCurrentYear()} BenvenutoClubSanremo. All rights reserved. </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

export function getCurrentYear() {
  const today = new Date();
  return today.getFullYear();
}
