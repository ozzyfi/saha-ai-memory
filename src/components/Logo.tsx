type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export const Logo = ({ className }: LogoProps) => (
  <span className={`inline-flex items-center ${className ?? ""}`}>
    <img
      src="/brand/deskless-team-logo.png"
      alt="deskless.team"
      className="h-[30px] md:h-9 w-auto object-contain"
      style={{ objectFit: "contain" }}
    />
  </span>
);
