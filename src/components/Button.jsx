import cn from "../lib/cn";

const Button = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        className={cn(
          "border border-[#334155] px-5 py-2 rounded-full outline-0 hover:cursor-pointer",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
