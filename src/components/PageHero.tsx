import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  badgeIcon?: LucideIcon;
  badgeText: string;
  title: ReactNode;
  subtitle: string;
  visual?: ReactNode;
  actions?: ReactNode;
  centered?: boolean;
  children?: ReactNode;
}

/**
 * Consistent SellerSnap-inspired hero shared across all pages.
 * Cool blue-and-white canvas, soft blue blobs, slope divider into the next section.
 */
const PageHero = ({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  subtitle,
  visual,
  actions,
  centered = false,
  children,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden hero-cream slope-divider-bottom">
      <div className="absolute inset-0 hero-cream-grid pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-blue-300/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[440px] h-[440px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative px-5 sm:px-8 lg:px-[70px] pt-20 pb-32 sm:pt-28 sm:pb-40">
        {centered ? (
          <div className="max-w-4xl mx-auto text-center reveal">
            <Badge className="mb-6 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">
              {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 mr-1.5" />}
              {badgeText}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-slate-900 mb-6 leading-[1.1] sm:leading-[1.05] tracking-tight">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
            {actions && <div className="flex flex-col sm:flex-row gap-4 justify-center">{actions}</div>}
            {children}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="md:col-span-1 lg:col-span-6 reveal">
              <Badge className="mb-6 bg-white text-blue-700 border border-blue-100 shadow-sm hover:bg-white">
                {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 mr-1.5" />}
                {badgeText}
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight">
                {title}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                {subtitle}
              </p>
              {actions && <div className="flex flex-col sm:flex-row gap-4">{actions}</div>}
              {children}
            </div>
            <div className="md:col-span-1 lg:col-span-6 relative reveal delay-200">
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-400/20 via-blue-200/20 to-blue-600/15 blur-3xl rounded-[40px]" />
              <div className="relative animate-float-slow lg:scale-[1.12] xl:scale-[1.18] origin-center">{visual}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
