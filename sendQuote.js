import cron, { schedule } from "node-cron"

import User from "./models/user_model.js";
import Quote from "./models/quote_model.js";
import sendEmail from "./utils/email.js";


const loadEmailData = async () => {
    const allUsers = await User.find({ quote: true }, { time: 1, email: 1 })
    if (!allUsers) {
        return console.error('Cannot get users from DB');
    }
    allUsers.forEach(user => {
        const { email, time } = user
        let cronExpression = timeToCronExpression(time)
        cron.schedule(cronExpression, async () => {
            const randomQuote = await Quote.aggregate([{ $sample: { size: 1 } }])
            let { quote, quoteAuthor } = randomQuote[0]
            const message = `${quote}\nBy ${quoteAuthor || "Author not found"}`
            try {
                await sendEmail({
                    email,
                    subject: "Daily Quote",
                    message
                })
            } catch (err) {
                console.error(err);
            }

        })
    })
}

const refreshUsersAndQuote = async () => {
    cron.schedule('0 0/6 * * *', async () => {
        console.log('Refreshing users and new Quote from database At Midnight and Noon');
        loadEmailData()
    })
}

function timeToCronExpression(timeinTwelveHour) {
    const [time, meridiem] = timeinTwelveHour.split(' ')
    let [hours, minutes] = time.split(':')
    if (meridiem == 'PM' && hours < 12) {
        hours = hours * 1 + 12
    }
    else if (meridiem == 'AM' && hours == 12) {
        hours = 0
    }

    // To remove leading zero
    hours = Number(hours)
    minutes = Number(minutes)

    return `${minutes} ${hours} * * *`
    // return `* * * * * *` // testing
}

export { loadEmailData, refreshUsersAndQuote }
