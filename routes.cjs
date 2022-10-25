import { Router } from "@edgio/core";
import { isProductionBuild } from "@edgio/core/environment";

const router = new Router();

if (isProductionBuild()) {
  router.static("dist");
} else {
  router.fallback(({ renderWithApp }) => renderWithApp());
}

export default router;
