import { CONTACT } from "@/data";

/** Sağ altta sabit WhatsApp simgesi (tüm sayfalarda) */
export default function FloatingWhats() {
  return (
    <a href={CONTACT.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp'tan yazın"
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-xl shadow-black/25 transition hover:scale-105 md:bottom-6">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1-3.4-1.1-5.6-4.5-5.8-4.7-.2-.2-1.4-1.9-1.4-3.6S7.5 6.6 7.7 6.4c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.7.9-.5 1.2.7 1.2 1.6 2.1 2.8 2.7.3.2.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1s1.5.7 1.7.8c.2.1.4.2.5.3 0 .2 0 .8-.5 1.3z" />
      </svg>
    </a>
  );
}
