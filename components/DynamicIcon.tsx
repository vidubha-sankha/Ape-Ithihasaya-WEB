import {
  Anchor,
  Bone,
  BookOpen,
  Building2,
  Calendar,
  Castle,
  CircleHelp,
  Columns3,
  Compass,
  Crown,
  Flag,
  Globe,
  History,
  Landmark,
  Layers,
  MapPin,
  Mountain,
  Scroll,
  ScrollText,
  Search,
  Shield,
  Ship,
  Swords,
  Wheat,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";
import type { TimelineIconName } from "@/data/history-timeline";

export const timelineIcons: Record<string, LucideIcon> = {
  bone: Bone,
  crown: Crown,
  "circle-help": CircleHelp,
  landmark: Landmark,
  ship: Ship,
  building: Building2,
  "book-open": BookOpen,
  castle: Castle,
  mountain: Mountain,
  scroll: ScrollText,
  "scroll-text": ScrollText,
  shield: Shield,
  swords: Swords,
  flag: Flag,
  columns: Columns3,
  // Additional regional & utility UI icons
  anchor: Anchor,
  globe: Globe,
  "map-pin": MapPin,
  compass: Compass,
  layers: Layers,
  calendar: Calendar,
  search: Search,
  wheat: Wheat,
  history: History,
};

interface DynamicIconProps extends LucideProps {
  name: TimelineIconName | string;
}

export function DynamicIcon({
  name,
  className = "h-6 w-6",
  ...props
}: DynamicIconProps) {
  const IconComponent = timelineIcons[name] || History;
  return <IconComponent className={className} {...props} />;
}
