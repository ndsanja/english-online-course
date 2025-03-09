"use client";

import * as React from "react";
import {
  BookOpen,
  Command,
  Settings2,
  Trophy,
  CalendarCheck,
  GraduationCap,
  BriefcaseBusiness,
  LibraryBig,
  ShoppingBag,
  Headset,
  CircleHelp,
} from "lucide-react";

import { NavMain } from "@/app/app/dashboard/nav-main";
import { NavProjects } from "@/app/app/dashboard/nav-projects";
import { NavSecondary } from "@/app/app/dashboard/nav-secondary";
import { NavUser } from "@/app/app/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Kelas",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Sedang Dipelajari",
          url: "#",
        },
        {
          title: "Telah Diselesaikan",
          url: "#",
        },
        {
          title: "Tes & Latihan",
          url: "#",
        },
        {
          title: "Progres & Sertifikat",
          url: "#",
        },
      ],
    },
    {
      title: "Program & Learning Path",
      url: "#",
      icon: LibraryBig,
      items: [
        {
          title: "Semua Program",
          url: "#",
        },
        {
          title: "Learning Path",
          url: "#",
        },
        {
          title: "Tes & Ujian",
          url: "#",
        },
      ],
    },
    {
      title: "Status Langganan",
      url: "#",
      icon: ShoppingBag,
      items: [
        {
          title: "Langganan Aktif",
          url: "#",
        },
        {
          title: "Daftar Pembelian",
          url: "#",
        },
        {
          title: "Riwayat Pembelian",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Edit Profile",
          url: "#",
        },
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Hubungi CS",
      url: "#",
      icon: Headset,
    },
    {
      title: "FAQ",
      url: "#",
      icon: CircleHelp,
    },
  ],
  projects: [
    {
      name: "Challenge",
      url: "#",
      icon: Trophy,
    },
    {
      name: "Event",
      url: "#",
      icon: CalendarCheck,
    },
    {
      name: "Info Beasiswa",
      url: "#",
      icon: GraduationCap,
    },
    {
      name: "Info Job Dalam & Luar Negeri",
      url: "#",
      icon: BriefcaseBusiness,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <NavUser user={data.user} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <a href="#" className="flex items-center gap-2 p-4">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Command className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Acme Inc</span>
            <span className="truncate text-xs">Enterprise</span>
          </div>
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}
