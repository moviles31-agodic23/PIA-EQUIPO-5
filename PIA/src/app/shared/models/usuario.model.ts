export class usuario {
    id: number;
    username: string;
    postCount: number;
    followerCount: number;
    followCount: number;
    pPUrl: string;
    bio: string;

    public constructor(id: number, username: string, postCount: number, followerCount: number, followCount: number, pPUrl: string, bio: string) {
        this.id = id;
        this.username = username;
        this.postCount = postCount;
        this.followerCount = followerCount;
        this.followCount = followCount;
        this.pPUrl = pPUrl;
        this.bio = bio;
    }
}