import { Link } from "react-router-dom"

export const PrimaryButton = ({name, nav}) => {
  return (
    <Link to={nav} role="button" className="my-auto rounded-lg bg-amber-300 text-black px-4 py-2 font-bold hover:bg-amber-400 transition ease-in-out">{name}</Link>
  )
}
