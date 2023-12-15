import Link from 'next/link'
import { CardProps } from '../Card'
import Medium from '../ImageSvg/Medium'
import SvgCar from '../ImageSvg/sync'

const Blog = ({ title, description }: CardProps) => {
  return (
    <Link href="/blog">
        <div className="w-full md:w-[30%]  border-2 rounded-[30px]  md:ml-mobilem md:mt-6 mt-mobilem overflow-hidden shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414]">
        {/* Card content goes here */}
        <div className="items-center justify-center mx-2">
          <Medium className="object-cover items-center mx-auto my-auto" />
        </div>
        <div className="justify-between md:py-4 py-2 flex w-auto">
          <div className="pl-6">
            <h4 className="opacity-50 text-[12px] uppercase my-2 text-white">
              {title}
            </h4>
            <p className="text-white text-base text-[20px] font-semibold">
              {description}
            </p>
          </div>
          <div className="text-right justify-end  pt-4">
            <SvgCar className=" justify-end text-right text-[#5d5c5c] font-thin" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Blog