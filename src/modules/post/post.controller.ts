import { Request, Response } from "express"
import { postService } from "./post.service"
import { error } from "node:console";


const createPost = async (req: Request, res: Response) => {
    try{

        const result = await postService.createPost(req.body);
        res.status(201).json(result);

    }catch(e){
        res.status(400).json({
            error : "post creation faild",
            details : e
        })

    }
}


const getPost = async (req : Request, res : Response) =>{
    try{
        const result = await postService.PostGet()
        res.status(200).json({
            success : true,
            data : result

        });
    }catch(e){
        res.status(500).json({
            error : 'Post get faild',
            details : e
        })
    }
}

export const postController = {
    createPost, getPost
} 