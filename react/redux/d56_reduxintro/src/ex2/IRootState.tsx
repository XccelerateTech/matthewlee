interface ILinkState {
    title: string,
    url: string
}

interface IRootState {
    links: ILinkState[]
}

export default IRootState;