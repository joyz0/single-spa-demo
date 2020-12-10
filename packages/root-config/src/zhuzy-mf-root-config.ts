import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@zhuzy-mf/navbar",
  app: () => System.import("@zhuzy-mf/navbar"),
  activeWhen: "/",
  customProps: {
    githubLink: "https://github.com/vue-microfrontends/root-config",
  },
});

// registerApplication({
//   name: "@react-mf/navbar",
//   app: () => System.import("@react-mf/navbar"),
//   activeWhen: "/"
// });

registerApplication({
  name: "@zhuzy-mf/react-app",
  app: () => System.import("@zhuzy-mf/react-app"),
  activeWhen: "/react-app",
});

registerApplication({
  name: "@zhuzy-mf/vue-app",
  app: () => System.import("@zhuzy-mf/vue-app"),
  activeWhen: "/vue-app",
});

registerApplication({
  name: "@react-mf/people",
  app: () => System.import("@react-mf/people"),
  activeWhen: "/people",
});

registerApplication({
  name: "@react-mf/planets",
  app: () => System.import("@react-mf/planets"),
  activeWhen: "/planets",
});

registerApplication({
  name: "@react-mf/things",
  app: () => System.import("@react-mf/things"),
  activeWhen: "/things",
});

registerApplication({
  name: "@vue-mf/dogs-dashboard",
  app: () => System.import("@vue-mf/dogs-dashboard"),
  activeWhen: "/view-doggos",
});

registerApplication({
  name: "@vue-mf/rate-dogs",
  app: () => System.import("@vue-mf/rate-dogs"),
  activeWhen: "/rate-doggos",
});

start({
  urlRerouteOnly: true,
});
