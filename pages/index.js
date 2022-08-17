import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'

export default function Home({ products }) {
  return (
    <Layout title='Home page'>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3'>
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  )
}
