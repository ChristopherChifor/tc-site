import { getRoutes, getNavigation } from "@/data/utils";

export const SITE_PATH = "teck-centennial-website";

const MASTER_ROUTES = [
  {
    path: "/",
    label: "home",
    component: () => import("@/views/"),
    hidden: true,
  },
  {
    path: "/about",
    label: "about",
    component: () => import("@/views/about"),
    hidden: false,
  },
  {
    path: "/about/policies",
    label: "about/policies",
    component: () => import("@/views/about/policies"),
    hidden: false,
  },
  {
    path: "/about/staff",
    label: "about/staff",
    component: () => import("@/views/about/staff"),
    hidden: false,
  },
  {
    path: "/about/donations",
    label: "about/donations",
    component: () => import("@/views/about/donations"),
    hidden: false,
  },
  {
    path: "/services",
    label: "services",
    component: () => import("@/views/services"),
    hidden: false,
  },
  {
    path: "/services/library-card",
    label: "services/library-card",
    component: () => import("@/views/services/library-card"),
    hidden: false,
  },
  {
    path: "/programs",
    label: "programs",
    component: () => import("@/views/programs"),
    hidden: false,
  },
  {
    path: "/programs/after-school",
    label: "programs/after-school",
    component: () => import("@/views/programs/after-school"),
    hidden: false,
  },
  {
    path: "/programs/tdsrc",
    label: "programs/tdsrc",
    component: () => import("@/views/programs/tdsrc"),
    hidden: false,
  },
  {
    path: "/programs/sponsors",
    label: "programs/sponsors",
    component: () => import("@/views/programs/sponsors"),
    hidden: false,
  },
  {
    path: "/announcements",
    label: "announcements",
    component: () => import("@/views/announcements"),
    hidden: false,
  },
  {
    path: "/announcements/:id",
    label: "announcements/:id",
    component: () => import("@/views/announcements/id"),
    hidden: false,
  },
  {
    path: "/contact",
    label: "contact",
    component: () => import("@/views/contact"),
    hidden: false,
  },
];

export const routes = getRoutes(MASTER_ROUTES);

export const navigation = getNavigation(MASTER_ROUTES);

export const announcements = [
  {
    id: "1",
  },
];
