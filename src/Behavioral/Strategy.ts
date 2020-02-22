interface SortStrategy {
  sort(dataset: number[]): number[];
}
export class BubbleSortStrategy implements SortStrategy {
  sort(dataset: number[]) {
    console.log("バブルソートを実行");
    //ソート処理（略）
    return dataset;
  }
}
export class QuickSortStartegy implements SortStrategy {
  sort(dataset: number[]) {
    console.log("クイックソートを実行");
    //ソート処理（略）
    return dataset;
  }
}

export class Sorter {
  constructor(protected sorter: SortStrategy) {}
  sort(dataset: number[]) {
    return this.sorter.sort(dataset);
  }
}
