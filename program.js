'use strict';

function getShortMessages(message_objects) {
    let messages_only = message_objects.map(message => message.message)
    return messages_only.filter(message => message.split('').length < 50)
}


// Do not remove the line below
module.exports = getShortMessages
