
export const DishCard = ({title, img, price, description}) => {
  return (
    <article className="max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow-xl">
        <img className="rounded-t-lg h-60 w-full object-cover" src={"./images/"+img} alt="" />
        <div className="p-5 space-y-5">
            <div className="flex justify-between items-baseline">
                <h5 className="mb-2 text-2xl font-bold">{title}</h5>
                <p className="text-secondaryOrange font-bold">{price}</p>
            </div>
            <p className="mb-3 font-normal ">{description}</p>
            <a href="#" className="flex align-bottom items-center py-2 font-bold hover:translate-x-1 transition ease-in-out">
                Order a delivery
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </article>
  )
}
