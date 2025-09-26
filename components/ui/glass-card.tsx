import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "glass-card p-6",
        hover && "neon-glow-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}