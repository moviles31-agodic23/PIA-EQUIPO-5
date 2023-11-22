export class post {
    userId: number;
    pictureUrl: string;
    caption: string;
    likes: number;

    public constructor(userId: number, pictureUrl: string, caption: string, likes: number) {
        this.userId = userId;
        this.pictureUrl = pictureUrl;
        this.caption = caption;
        this.likes = likes;
    }
}