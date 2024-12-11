/* eslint-disable react/prop-types */
const Button =({Click,className, children})=>{

  return(
   <button style={{backgroundColor: 'red', border: '1px solid blue'}} onClick={Click} className={className}>{children}</button>
  )
}

export default Button