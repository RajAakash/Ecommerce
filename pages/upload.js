import React from 'react'
import Layout from './components/Layout'
import { useForm } from 'react-hook-form'

export default function upload() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = ({ email, password }) => console.log(email, password)

  return (
    <Layout title='upload'>
      <form
        className='mx-auto max-w-screen-md'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='mb-4 text-xl'> upload</h1>

        <div className='mb-4'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            {...register('name', { required: 'Please enter Name' })}
            className='w-full'
            id='name'
            autoFocus
          ></input>
          {errors.name && (
            <div className='text-red-500'>{errors.name.message}</div>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            {...register('price', { required: 'Please enter price' })}
            className='w-full'
            id='price'
            autoFocus
          ></input>
          {errors.price && (
            <div className='text-red-500'>{errors.price.message}</div>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='brand'>Brand</label>
          <input
            type='text'
            {...register('brand', { required: 'Please enter brand' })}
            className='w-full'
            id='brand'
            autoFocus
          ></input>
          {errors.brand && (
            <div className='text-red-500'>{errors.brand.message}</div>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='Image'>Image</label>
          <input
            type='text'
            {...register('Image', { required: 'Please enter link to Image' })}
            className='w-full'
            id='Image'
            autoFocus
          ></input>
          {errors.Image && (
            <div className='text-red-500'>{errors.Image.message}</div>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            {...register('description', {
              required: 'Please enter description',
            })}
            className='w-full'
            id='description'
            autoFocus
          ></input>
          {errors.description && (
            <div className='text-red-500'>{errors.description.message}</div>
          )}
        </div>

        <div className='mb-4'>
          <button className='primary-button'>Upload</button>
        </div>
      </form>
    </Layout>
  )
}
