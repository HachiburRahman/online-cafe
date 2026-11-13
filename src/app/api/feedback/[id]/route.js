import { feedbacks } from "../../route";

export async function GET(request,{params}){
    const {id}=await params;
    const singleFeedback=feedbacks.find(fd=>fd.id==id)
    return Response.json(singleFeedback)
}