import { Callout } from "@/components/mdx/callout";
import { Tabs, Tab } from "@/components/mdx/tabs";
import { Steps, Step } from "@/components/mdx/steps";
import { Card, CardGroup } from "@/components/mdx/cards";
import { WideCard, WideCards } from "@/components/mdx/wide-card";
import { Accordion, AccordionItem } from "@/components/mdx/accordion";
import {
  FileTree,
  FileTreeFolder,
  FileTreeFile,
} from "@/components/mdx/file-tree";
import { Badge } from "@/components/mdx/badge";
import { CodeBlock } from "@/components/mdx/code-block";
import { ResponsiveTable } from "@/components/mdx/responsive-table";
import { MdxLink } from "@/components/mdx/mdx-link";
import { YouTube, Video, MdxImage, Figure } from "@/components/mdx/media";

export function getMdxComponents() {
  return {
    a: MdxLink,
    img: MdxImage,
    Callout,
    Note: (props: React.ComponentProps<typeof Callout>) => (
      <Callout type="info" {...props} />
    ),
    Warning: (props: React.ComponentProps<typeof Callout>) => (
      <Callout type="warning" {...props} />
    ),
    Tabs,
    Tab,
    Steps,
    Step,
    Card,
    CardGroup,
    Cards: CardGroup,
    WideCard,
    WideCards,
    Accordion: AccordionItem,
    Accordions: Accordion,
    AccordionItem,
    FileTree,
    FileTreeFolder,
    FileTreeFile,
    Badge,
    pre: CodeBlock,
    table: ResponsiveTable,
    YouTube,
    Video,
    Figure,
  };
}
