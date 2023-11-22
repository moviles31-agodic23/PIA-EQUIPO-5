export class usuario {
    id: number;
    username: string;
    pass: string;
    postCount: number;
    followerCount: number;
    followCount: number;
    pPUrl: string;
    bio: string;

    public constructor(id: number, username: string, pass: string, postCount: number, followerCount: number, followCount: number, pPUrl: string, bio: string) {
        this.id = id;
        this.username = username;
        this.pass = pass; // remover esto?
        this.postCount = postCount;
        this.followerCount = followerCount;
        this.followCount = followCount;
        this.pPUrl = pPUrl;
        this.bio = bio;
    }
}