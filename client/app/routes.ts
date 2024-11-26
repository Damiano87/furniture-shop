import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./Layout.tsx", [index("./routes/home/home.tsx")]),
] satisfies RouteConfig;
