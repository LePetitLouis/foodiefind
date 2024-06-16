import { ImageService } from "@/infrastructure/services/ImageService";

export class GetDishImageUrl {
  private imageService: ImageService;

  constructor(imageService: ImageService) {
    this.imageService = imageService;
  }

  execute(imageName: string): string {
    return this.imageService.getImageUrl(imageName);
  }
}