/* 
data.js will have the necessary answer that the program should give
when the user asks a question. We'll use the export statement in order
to make possible to use the data in app.js
*/

const answers = {
    positive: [
        'It is certain', 'Without a doubt', 'You may rely on it',
        'Yes definitely', 'It is decidedly so', 'As I see it, yes',
        'Most likely', 'Yes', 'Outook good', 'Signs point to yes'
    ],
    neutral: [
        'Reply hazy try again', 'Better not tell you now', 'Ask again later',
        'Cannot predict now', 'Concentrate and ask again'
    ],
    negative: [
        'Don\'t count on it', 'Outlook not so good', 'My sources say no',
        'Very doubtful', 'My reply is no'
    ]
}

export {answers};