export class Quote {
  showDetails: boolean;
  constructor(
    public id: number,
    public description: string,
    public author: string,
    public submitter: string,
    public upVotes: number,
    public downVotes: number,
    public dateAdded: Date
  ) {
    this.showDetails = false;
    this.upVotes = 0;
    this.downVotes = 0;
    this.dateAdded = new Date();
  }
}
