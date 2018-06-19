const routes = require("next-routes")();

routes.add("detail", "/detail/:id", "detail").add("search");

export default routes;
