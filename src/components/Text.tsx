function fontSize(size: String) {
  switch (size) {
    case "sm":
      return "text-xs";
    case "md":
      return "text-sm";
    case "lg":
      return "text-md";
  }
}

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: string;
}

export function Text({ size = "md", children }: TextProps) {
  return (
    <span
      className={`
        text-gray-100
        ${fontSize(size)}
      `}
    >
      { children }
    </span>
  );
}