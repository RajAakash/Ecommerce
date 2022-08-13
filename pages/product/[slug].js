import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import data from '../../utils/data'
import Link from 'next/link'
import Image from 'next/image'
import { Store } from '../../utils/Store'

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store)
  const { query } = useRouter()
  const { slug } = query
  const product = data.products.find((x) => x.slug === slug)

  if (!product) {
    return <div>Product not Found</div>
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug)
    const quantity = existItem ? existItem.quantity + 1 : 1

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock')
      return
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
  }

  return (
    <Layout title={product.name}>
      <div className='py-2'>
        <Link href='/'>Back to main page</Link>
      </div>
      <div className='grid md:grid-cols-7 md:gap-3'>
        <div></div>
        <div className='md:col-span-2'>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={640}
            layout='responsive'
          ></Image>
        </div>

        <div className='md:col-span-2 content-center text-center align-middle'>
          <ul>
            <li>
              <h1 className='text-lg'>{product.name}</h1>
            </li>
            <li>Category:{product.category}</li>
            <li>Brand:{product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description:{product.description}</li>
          </ul>
        </div>

        <div className='card p-5'>
          <div className='mb-2 flex justify-between'>
            <div>Price</div>
            <div>{product.price}</div>
          </div>

          <div className='mb-2 flex justify-between'>
            <div>Status</div>
            <div>{product.countInStock > 0 ? 'In-stock' : 'Unavailable'}</div>
          </div>
          <button className='primary-button w-full' onClick={addToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  )
}
