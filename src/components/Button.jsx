import React from 'react'

const Button = ({ color, bgColor, size, text, borderRadius}) => {
  return (
    <div>
      <button type="button"
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{ backgroundColor: bgColor, color, borderRadius }}>
        {text}
      </button>
    </div>
  )
}

export default Button