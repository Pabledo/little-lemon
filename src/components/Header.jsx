import { PrimaryButton } from "./PrimaryButton"

export const Header = () => {
  return (
    <header className="grid lg:grid-cols-2 gap-x-14 bg-secondary lg:px-52 p-4">
        <div className="space-y-5">
          <h1 className="title text-6xl">Little Lemon</h1>
          <h2 className="title text-5xl !text-white !-mt-3">Chicago</h2>
          <p className="text-2xl">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <PrimaryButton name="Reserve a table" />
        </div>
        <div className="overflow-visible flex justify-center">
          <img className="w-full h-96 rounded-lg object-cover shadow-2xl" src={"./images/restauranfood.jpg"} alt="" />
        </div>
    </header>
  )
}
