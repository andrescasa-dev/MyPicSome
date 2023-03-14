import PropTypes from 'prop-types'
import { BoldArrow } from './icons'

const LandingButton = ({ rounded }) => {
  return <>
      <a className="hidden md:block lg:hidden bg-sky-700 rounded-full" href="#">
          <BoldArrow className="text-white h-32 w-32" />
      </a>
      <a className="md:hidden flex items-center px-12 py-4 gap-2 lg:gap-8 rounded-md text-xl font-bold text-white md:text-2xl lg:text-5xl lg:py-8 lg:px-16 bg-sky-700" href="#">
            Explore
            <BoldArrow className="text-white h-6 w-6" hasCircle={true} />
      </a>
      <a className="hidden lg:flex items-center px-12 py-4 gap-2 lg:gap-8 rounded-md text-xl font-bold text-white md:text-2xl lg:text-5xl lg:py-8 lg:px-16 bg-sky-700" href="#">
            Explore
            <BoldArrow className="text-white h-14 w-14" hasCircle={true} />
      </a>
      </>
}

LandingButton.propTypes = {
  rounded: PropTypes.bool.isRequired
}

export default LandingButton
