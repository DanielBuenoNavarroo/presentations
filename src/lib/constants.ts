import { Cog, Grid, Home, Trash } from "lucide-react";

export const data = {
  user: {
    name: "Shadcn",
    email: "m@example.com",
  },
  navMain: [
    { title: "Home", url: "/dashboard", icon: Home },
    { title: "Templates", url: "/templates", icon: Grid },
    { title: "Trash", url: "/trash", icon: Trash },
    { title: "Settings", url: "/settings", icon: Cog },
  ],
};
