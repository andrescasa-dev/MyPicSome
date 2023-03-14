import PropTypes from 'prop-types'

export const BoldArrow = ({ className, hasCircle }) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  {hasCircle && <circle cx="12" cy="12" r="9" />}  <line x1="16" y1="12" x2="8" y2="12" />  <line x1="16" y1="12" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" /></svg>
  )
}

BoldArrow.propTypes = {
  className: PropTypes.string,
  hasCircle: PropTypes.bool
}
