import {models , sequelize} from "../../models/index.js"

export const postFeedbackMessage = async (req, res) => {

    console.log("postFeedbackMessage 여기 까지 오는지 확인")

    const {name, email, description, ratings} = req.body

    try {
        const result = await models.FeedbackMessage.create({
            name, 
            email, 
            description, 
            ratings
        })

        if(result) return res.status(200).send(result)
        else return false 
    } catch (error) {
        console.log("@feedbackMessage Controller" , error)
        res.status(500).send("Error📛")
    }
    
}