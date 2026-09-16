import { HelpLayoutClient } from "@/components/help/help-layout";

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HelpLayoutClient>{children}</HelpLayoutClient>;
}
