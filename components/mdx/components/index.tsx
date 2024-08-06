import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";

import { BasicItems } from "./basic-items";
import { CustomLinkComponents } from "./custom-link-components";
import { StepComponent } from "./step-component";
import { TabsComponent } from "./tabs-component";
import { PreCustom } from "./pre-component";

export const MDXComponents = {
  Image,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  pre: PreCustom,
  ...BasicItems,
  ...StepComponent,
  ...TabsComponent,
  ...CustomLinkComponents,
};
