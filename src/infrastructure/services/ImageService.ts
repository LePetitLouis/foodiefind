export class ImageService {
  private imageBasePath: string;

  constructor() {
    this.imageBasePath = '/dishes/';
  }

  getImageUrl(imageName: string): string {
    return `${this.imageBasePath}${imageName}`;
  }
}