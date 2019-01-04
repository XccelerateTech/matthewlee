interface ILinkState {
    title: string,
    url: string,
    key: string
}

interface IRootState {
    links: ILinkState[]
}

export default IRootState;