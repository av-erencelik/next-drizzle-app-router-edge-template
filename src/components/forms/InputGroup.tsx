import { Input, InputProps } from "../ui/Input";
import * as React from "react";
interface InputGroupProps extends InputProps {
  errorMessage: string | undefined;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(({ errorMessage, className, ...props }, ref) => {
  return (
    <div>
      <Input {...props} ref={ref} className={"border-cyan-600 focus:ring-1 focus:ring-cyan-600 " + className} />
      <p className="mt-1 px-1 text-xs text-red-600">{errorMessage}</p>
    </div>
  );
});
InputGroup.displayName = "InputGroup";

export { InputGroup };
