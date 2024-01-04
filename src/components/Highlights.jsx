import React from 'react'
import { PrimaryButton } from './PrimaryButton'

export const Highlights = () => {
  return (
    <section className='my-6 lg:px-52 p-4'>
        <div className='flex justify-between'>
            <h1 className='title text-6xl !text-black'>This weeks specials!</h1>
            <PrimaryButton name="Online Menu" />
        </div>
        <div></div>
    </section>
  )
}
