/* eslint-disable react/prop-types */

const Button = ({ label, iconurl, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={` flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : ` bg-coral-red text-white `}
         rounded-full ${fullWidth && 'w-full'}`}>{label}
            {iconurl && <img src={iconurl} />}
        </button>
    )
}

export default Button