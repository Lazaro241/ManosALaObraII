import ItemTarea from "../ItemTarea"

const TablaTareas = ({tareas}) => {
    return (
        <table className="tabla">
        <thead>
          <tr>
            <th>Completado</th>
            <th>Tarea</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className="checkboxTarea">
            {tareas.map((tarea, index) => (
              <ItemTarea key={index} tarea={tarea} />
            ))}
        </tbody>
      </table>
    )
}

export default TablaTareas