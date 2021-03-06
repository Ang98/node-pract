const Model = require('./model')

const addMessages =(message)=>{
    const myMessage = new Model(message);
    myMessage.save()
}

const getMessage = async(filterUser)=>{

    let filter={};
    if (filterUser !== null) {
        filter = {user:filterUser};
    }

    const messages = await Model.find(filter);
    return messages;
}

const updateText = async(id,message) =>{
    const foundMessage = await Model.findOne({
        _id:id
    });
    foundMessage.message=message;
    const newMessage = await foundMessage.save()
    return newMessage;
}

const removeMessage = (id) =>{
    return Model.deleteOne({
        _id: id
    })
}

module.exports={
    add: addMessages,
    list: getMessage,
    updateText,
    removeMessage
}