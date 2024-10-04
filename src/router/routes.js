import ProfilePage from "components/pages/ProfilePage.vue";

const routes = [
  {
    path: "/",
    component: () => import("components/layouts/PrivateLayout.vue"),
    children: [
      {
        path: "/tips",
        name: "TipsPage",
        component: () => import("components/pages/TipsPage.vue"),
      },
      {
        path: "/profile",
        name: "ProfilePage",
        component: ProfilePage,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("components/pages/ErrorNotFoundPage.vue"),
  },
];

export default routes;
