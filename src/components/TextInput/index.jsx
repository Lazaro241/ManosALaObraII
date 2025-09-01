const TextInput = ({style, placeholder}) => {
    const inputStyle = {
        primary: "barraAddTarea"
    }

    return (
        <input
            type="text"
            className={inputStyle[style]}
            placeholder={placeholder}
        />
    );
}

export default TextInput;
