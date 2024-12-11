export const Addtodo = (todo)=>(
    {
        type: 'ADDTODO',
        payload: todo
    }
)
export const RemoveTodo = (index)=>(
    {
        type: 'REMOVETODO',
        payload: index
    }
)