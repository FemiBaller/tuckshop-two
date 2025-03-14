export const Button = ({children,className}) => {
    return <button className={` rounded-[8px] py-[14px] px-[20px]  text-[16px] font-bold ${className}`}>
      {children}
    </button>
}
