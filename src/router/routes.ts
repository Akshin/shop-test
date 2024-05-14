export default [
  {
    path: "/products",
    redirect: { name: "products", params: { categoryId: "" } }
  },
  {
    name: "products",
    path: "/products/:categoryId?",
    component: () => import("../views/ProductListView.vue")
  },
  {
    name: "productCard",
    path: "/product/:productId",
    component: () => import("../views/ProductCardView.vue")
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("../views/ShoppingCartView.vue")
  },
  { path: "/:pathMatch(.*)*", redirect: { name: "products", params: { category: "" } } }
];
