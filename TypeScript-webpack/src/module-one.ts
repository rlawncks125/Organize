export class ModuelOne {
  constructor(public state: string, public index: number) {}

  getState(): { state: string; index: number } {
    return {
      state: this.state,
      index: this.index,
    };
  }
}
