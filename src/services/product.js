import { http } from "@/utils";
import { PRODUCT_API } from "@/config/api";

export const productService = {
  getProduct(query = "") {
    return http.get(`${PRODUCT_API}${query}`);
  },
};
