import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/KunalPatel1213",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.instagram.com/innocent_kunal__90/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/in/kunal-patel-b1bb0431a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQctiwNU%2BRfKfnrp5MOya9A%3D%3D",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
] as const;

const SocialLinks = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black bg-white text-xl text-black shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-black hover:text-white"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;