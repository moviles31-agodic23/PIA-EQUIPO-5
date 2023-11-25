export class usuario {
    id: number;
    nameUser: string;
    name: string;
    followers: number;
    following: number;
    pfp: string;
    bio: string;

    public constructor(id: number, nameUser: string, name: string, followers: number, following: number, pfp: string, bio: string) {
        this.id = id;
        this.nameUser = nameUser;
        this.name = name;
        this.followers = followers;
        this.following = following;
        this.pfp = pfp;
        this.bio = bio;
    }
}