export class post {
    userId: number;
    postId: number;
    pictureUrl: string;
    caption: string;
    likes: number;
    isHeartFilled: boolean;
    isBookMarked: boolean;

    public constructor(userId: number, postId: number, pictureUrl: string, caption: string, likes: number) {
        this.userId = userId;
        this.postId = postId;
        this.pictureUrl = pictureUrl;
        this.caption = caption;
        this.likes = likes;
        this.isHeartFilled = false;
        this.isBookMarked = false;
    }

    toggleHeartIcon() {
        this.isHeartFilled = !this.isHeartFilled;
    }
    
      toggleBookMark() {
        this.isBookMarked = !this.isBookMarked;
    }


}