export class RadioStation {
  protected frequency: number;
  constructor(frequency: number) {
    this.frequency = frequency;
  }
  getFrequency(): number {
    return this.frequency;
  }
}
export class StationList implements IterableIterator<RadioStation> {
  protected counter = 0;
  constructor(public stations: RadioStation[]) {}

  next(): IteratorResult<RadioStation> {
    if (this.counter < this.stations.length) {
      return { done: false, value: this.stations[this.counter++] };
    } else {
      return { done: true, value: null };
    }
  }
  [Symbol.iterator](): IterableIterator<RadioStation> {
    return this;
  }

  addStation = (stations: RadioStation) => {
    this.stations.push(stations);
  };
}
