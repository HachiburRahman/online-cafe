import {  feedbacks } from "../route";

export async function GET(request){
    return Response.json(feedbacks)
}
export async function POST(request){
    const {message}=await request.json();
    if(!message)
    return Response.json({
        status:400
    })

    const newFeedback={id:feedbacks.length+1,message}
    feedbacks.push(newFeedback)
    return Response.json({
        acknowledge:true,
        insertedId:feedbacks.length
    })
}