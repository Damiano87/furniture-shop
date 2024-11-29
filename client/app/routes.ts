import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./Layout.tsx", [
    index("./routes/home/home.tsx"),
    route("categories", "./routes/categories/categories.tsx"),
    route("categories/:id", "./routes/singleProductPage/singleProduct.tsx"),
    route("add-item", "./routes/add-item/add-item.tsx"),
  ]),
] satisfies RouteConfig;
