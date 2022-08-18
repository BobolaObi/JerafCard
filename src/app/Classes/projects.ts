export class Products{
  image: string;
  description: string;
  button : string;
  shadow: string;

  constructor(image: string, description: string, button : string , shadow: string) {
    this.image = image;
    this.description = description;
    this.button  = button ;
    this.shadow = shadow;
  }
}
