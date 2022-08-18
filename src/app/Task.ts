//create a Task interface
//? means that it can be an optional value - its created when sent to the database
export interface Task{
    id?: number,
    text: string,
    day: string,
    reminder: boolean
}