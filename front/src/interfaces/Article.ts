export interface Article extends NewArticle {
  id: string;
}

export interface NewArticle {
  name: string;
  price: number;
  qty: number;
}
