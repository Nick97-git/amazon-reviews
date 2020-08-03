export class ReviewRequestDto {

  constructor(private summary: string, private text: string,
              private productId: string) {
  }
}
