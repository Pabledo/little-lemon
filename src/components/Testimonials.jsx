import {Review} from './Review'

export const Testimonials = () => {
  return (
    <section className="lg:px-52 px-4 py-6 bg-primaryGreen">
      <h1 className="text-center title text-6xl ">Testimonials</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-10 gap-y-5">
        <Review img="review1.jpg" userName="Jane C." rating={5} review="Fantastic place and delicious food!!"/>
        <Review img="review2.jpg" userName="Camila F." rating={4} review="I had a wonderful time at Little Lemon"/>
        <Review img="review3.jpg" userName="John D." rating={5} review="Easily the best place for have a dinner in Chicago."/>
        <Review img="review4.jpg" userName="Loui R." rating={5} review="I went there with my wife and children and everything was perfect, recommended."/>
      </div>
    </section>
  )
}
