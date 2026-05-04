type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export const Logo = ({ className }: LogoProps) => (
  <span className={`inline-flex items-center ${className ?? ""}`}>
    <img
      src="/brand/deskless-team-logo-trimmed.png"
      alt="deskless.team"
      className="h-5 md:h-6 w-auto block"
      style={{ objectFit: "contain" }}
    />
  </span>
);
