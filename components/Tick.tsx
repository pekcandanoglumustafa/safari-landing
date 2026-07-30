/** Beyaz onay işareti — ✔ karakteri iOS'ta emoji olarak render edildiği için SVG kullanıyoruz */
export default function Tick({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
      className={`inline-block shrink-0 text-white ${className}`}
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
