const MainLayout = ({titulo, children}) => {
    return (
        <div className="contenedor">
            <h2 className="titulo">{titulo}</h2>
            {children}
        </div>
    )
}

export default MainLayout