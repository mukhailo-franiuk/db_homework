export interface Post {
    id : number;
    title : string;
    post : string;
    author: string;
    imagePath:string;
}
export interface PostRequire {
    title : string;
    post : string;
    author: string;
    imagePath:string;
}
export interface PostResp extends PostRequire{
    id : number;
}