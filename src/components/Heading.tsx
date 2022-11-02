import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

function fontSize(size: String) {
  switch (size) {
    case "sm":
      return " text-lg";
    case "md":
      return " text-xl";
    case "lg":
      return " text-2xl";
  }
}

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = "md", children, asChild }: HeadingProps) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={`
        font-bold
        text-grey-100
        ${fontSize(size)}
      `}
    >
      { children }
    </Comp>
  );
}