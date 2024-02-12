const { db } = require("../models")

exports.postPortfolioMeta = async (req, res) => {
    console.log("req postPortfolioMeta" , req.body)

    try {
        // ✅ 변수 이름 지정할 필요 
        const {title, body} = req.body

        const result = await db.PortfolioMeta.update(
            
        )

        if(result) return res.status(200).send(true)
        else return false

    } catch (error) {
        console.log("@Login Controller" , error)
    }

}