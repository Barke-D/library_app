import Image from "next/image";
import Link from "next/link";
import { facebook, twitter, instagram, whatsapp } from "@/assets/icon";

const Footer = () => {
  return (
    <footer className="p-5 w-11/12 md:flex md:flex-row md:items-center md:justify-between justify-center absolute md:pl-72 bottom-0 left-0 right-0">
      <div className="text-center md:text-left">
        © {new Date().getFullYear()} All right reserved. Made by Barkot,
        Ermiyas, Yonas
      </div>
      <div className="py-2 flex flex-row items-center justify-center gap-5">
        <Link href="https://facebook.com" target="_blank">
          <Image src={facebook} alt="facebook" width={28} height={28} />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <Image src={twitter} alt="twitter" width={24} height={24} />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <Image src={instagram} alt="instagram" width={24} height={24} />
        </Link>
        <Link href="https://whatsapp.com" target="_blank">
          <Image src={whatsapp} alt="whatsapp" width={24} height={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
