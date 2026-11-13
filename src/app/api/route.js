export const feedbacks=[
    {
        id:"1",
        message:"Chicken Fry not good"
    },
    {
        id:"2",
        message:"Kabab was so tasty"
    }
]
export async function GET(request) {
    return Response.json({
        message:"Wow This is next api"
    })
}