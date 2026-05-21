import {
  Sprout,
  Scissors,
  LayoutGrid,
  Leaf,
  Trees,
  Axe,
  TreeDeciduous,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/content/services";

const iconMap: Record<ServiceIconName, LucideIcon> = {
  sprout: Sprout,
  scissors: Scissors,
  layout: LayoutGrid,
  leaf: Leaf,
  trees: Trees,
  axe: Axe,
  treeDeciduous: TreeDeciduous,
};

export function ServiceIconComponent({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} strokeWidth={1.5} />;
}
