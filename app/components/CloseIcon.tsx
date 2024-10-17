

const CloseIcon = ({onClick}: {onClick:() => void}) => {
  return (
    <div className="fixed w-[2rem] h-[2rem] top-8 right-8 cursor-pointer" onClick={onClick}>
        <div className="absolute w-full bg-red-1 rounded-md h-1 transition-all rotate-45" />
        <div className="absolute w-full bg-red-1 rounded-md h-1 -rotate-45" /> 
    </div>
  )
}

export default CloseIcon;
