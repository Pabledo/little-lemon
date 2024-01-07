import React from 'react'
import { PrimaryButton } from './PrimaryButton'
import { DishCard } from './DishCard'

export const Highlights = () => {
  return (
    <section className='my-6 lg:px-52 px-10 space-y-5'>
        <div className='flex justify-between'>
            <h1 className='title text-6xl !text-black'>This weeks specials!</h1>
            <PrimaryButton name="Online Menu" />
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5'>
            <DishCard
                title="Greek salad"
                img="greek salad.jpg"
                price="$ 12.99"
                description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            />
            <DishCard
                title="Bruchetta"
                img="bruchetta.svg"
                price="$ 5.99"
                description="Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            />
            <DishCard
                title="Lemon Dessert"
                img="lemon dessert.jpg"
                price="$ 5.00"
                description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            />
        </div>
    </section>
  )
}
