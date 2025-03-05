const InputField = ({
    label,
    id,
    type,
    errors,
    register,
    required,
    message,
    className,
    min,
    value,
    placeholder,
}) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label
                htmlFor="id"
                className={`${
                    className ? className : ""
                } font-semibold text-sm text-slate-800 `}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={`${
                    className ? className : ""
                } px-2 py-2 border outline-none bg-transparent text-slate-800 rounded-md ${
                    errors[id]?.message ? "border-red-500" : "border-slate-700"
                }`}
                {...register(id, {
                    required: {value: required, message},
                    minLength: min 
                        ? { value: min, message: `Minimum ${min} Characters are Required`}
                        : null,
                    pattern:
                        type === "email"
                            ? {
                                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/,
                                message: "Invalid Email"        
                            }
                            : type  === "url"
                            ? {
                                value: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[\w.-]*)*\/?$/i,
                                message: "Invalid URL"
                            }
                            : null,
                })}
                />

                {errors[id]?.message && (
                    <p className="text-sm font-semibold text-red-600 mt-0">
                        {errors[id]?.message}
                    </p>
                )}
        </div>      
    );
};