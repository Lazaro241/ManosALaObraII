const Button = ({ variant = 'primary', onClick, children }) => {
  const buttonStyles = {
    primary: 'botonAddTarea',
    danger: 'botonEliminar'
  };

  return (
    <button 
      className={buttonStyles[variant]} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
