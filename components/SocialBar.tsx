import { site, whatsappUrl } from "@/lib/site";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";

const items = [
  { href: site.instagramUrl, label: "Instagram", Icon: InstagramIcon },
  { href: site.linkedinUrl, label: "LinkedIn", Icon: LinkedInIcon },
  { href: whatsappUrl, label: "WhatsApp", Icon: WhatsAppIcon },
];

/** Barra social fixa, vertical à direita (desktop). Discreta e on-brand. */
export default function SocialBar() {
  return (
    <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
      <span className="mb-1 h-10 w-px bg-gold/40" aria-hidden="true" />
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-night/80 text-gold-light backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold hover:text-night"
        >
          <Icon />
        </a>
      ))}
      <span className="mt-1 h-10 w-px bg-gold/40" aria-hidden="true" />
    </div>
  );
}
