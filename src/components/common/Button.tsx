import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a79e] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#11988f] to-[#17aea3] text-white shadow-[0_18px_40px_rgba(18,155,146,0.22)] hover:-translate-y-0.5",
        secondary:
          "border border-[#4cc3b8] bg-transparent text-[#129b92] hover:bg-[#effaf8]",
        ghost:
          "text-[#5e6772] hover:bg-[#f8f9fb] hover:text-[#09131f]",
        dark:
          "bg-[#09131f] text-white hover:bg-[#0d1419]",
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-7",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants>;

export function ButtonLink({
  href,
  children,
  className,
  variant,
  size,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}