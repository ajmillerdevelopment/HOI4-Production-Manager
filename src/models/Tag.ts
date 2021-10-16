class Tag {
    name: string;
    flagUrl: string;
    longName: string;
    constructor(name: string, longName: string, flagUrl: string) {
        this.name = name
        this.longName = longName
        this.flagUrl = flagUrl
    }
}
export default Tag;