
export const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const NavLinks = [
  { label: "Home", link: "/" },
  { label: "Profile", link: "/profile" },
  { label: "User Management", link: "/user-management" },
];

export const ROUTES = {
  AUTH: {
    LOGIN: "/login",
  },
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  USER_MANAGEMENT: "/user-management",
};

