import sampleData from "@/db/sample-product";
import ProductList from "@/components/shared/product/product-list";



const Homepage = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" />
    </>
  );

}
 
export default Homepage;