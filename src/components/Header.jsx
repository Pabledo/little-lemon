import { PrimaryButton } from "./PrimaryButton"

export const Header = () => {
  return (
    <header className="grid lg:grid-cols-2 grid-cols-1 gap-x-14 bg-secondary lg:px-52 p-4">
        <div className="space-y-5">
          <h1 className="title text-6xl">Little Lemon</h1>
          <h2 className="title text-5xl !text-white !-mt-3">Chicago</h2>
          <p className="text-2xl pb-5">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <PrimaryButton name="Reserve a table" nav="/booking"/>
        </div>
        <div className="flex justify-center lg:pt-0 pt-6">
          <img className="lg:w-full lg:h-96 h-60 w-full rounded-lg object-cover shadow-2xl" src={"./images/restauranfood.jpg"} alt="" />
        </div>
    </header>
  )
}
