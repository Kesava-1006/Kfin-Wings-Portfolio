export default function InputFeild(props) {
  return (
     <input
       className="w-full border-2 border-black rounded-full px-4 py-3 outline-none bg-white"
       placeholder={props.placeholder}
       type={props.type}
       onChange={(e) => {
        props.inputValue(e.target.value)
        
      }}
       />
  )
}