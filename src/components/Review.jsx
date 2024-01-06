export const Review = ({img, userName, review, rating}) => {
    let i = -1;
    const stars = Array.from({length: 5}, (_, index) => {
        i++;
        return <svg key={index} xmlns="http://www.w3.org/2000/svg" fill={i < rating ? "yellow" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      });
  return (
    <article className="bg-gray-100 border border-gray-200 rounded-sm shadow-md p-4 space-y-3">
        <div className="flex justify-center">
            {stars}
        </div>
        <div className="grid grid-cols-1 place-items-center gap-y-3">
            <img className="rounded-full outline outline-primaryGreen outline-offset-2" src={"./images/"+img} alt="" />
            <h1 className="font-bold text-xl">{userName}</h1>
        </div>
        <q className="italic text-center">{review}</q>
    </article>
  )
}
