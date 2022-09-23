import { ProductCard } from "../../components/productCard/ProductCard";
import { Sidebar } from "../../components/sidebar/Sidebar";

export function ProductPage() {
  return (
    <div className="product-container">
      <Sidebar />
      <ProductCard />
    </div>
  );
}
