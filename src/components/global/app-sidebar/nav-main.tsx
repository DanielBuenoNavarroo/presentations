"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  items: Items[];
};

type Items = {
  title: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGElement>> | LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

const NavMain = ({ items }: Props) => {
  const pathname = usePathname();
  return (
    <SidebarGroup className="p-0">
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.url}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              className={`${pathname.includes(item.url) && "bg-muted"}`}
            >
              <Link
                href={item.url}
                className={`text-lg ${
                  pathname.includes(item.url) && "font-bold"
                }`}
              >
                <item.icon className="text-lg" />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
