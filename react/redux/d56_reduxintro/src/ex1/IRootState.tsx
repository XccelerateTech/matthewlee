interface ILInkState {
    title: string,
    url: string
}

interface IUserState {
    name: string,
    email: string
}

interface IRootState {
    links: ILInkState[],
    users: IUserState[]
}

export default IRootState;