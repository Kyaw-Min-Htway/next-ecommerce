import Slider from "@/components/Slider"
import ProductList from "@/components/ProductList"
import CategoryList from "@/components/CategoryList"

const HomePage = () => {
  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList/>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl">Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList/>
      </div>
    </div>
  )
}

export default HomePage