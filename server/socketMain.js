//Where socket.io listeners and (most) emitters

const socketMain = (io) => {
    io.on("connection", (socket) => {
        const auth = socket.handshake.auth;
        
        if(auth.token === "239rfaiskdfvq243EGa4q3wefsdad"){
            console.log('connected to storefront site...')
            socket.join('dataEmitterClient'); //this client is a dataEmitterClient, put in appropriate room
        }else if(auth.token === "23jrtiheriufyqwidsf"){
            socket.join('reactClient'); //this client is a reactClient, put in appropriate room            
        }else if(auth.token === "123"){
            socket.join('localDemo'); //this client is a reactClient, put in appropriate room            
        }else{
            //socket.disconnect();
            console.log("SOCKET DISCONNECTED!!!")
        }
        
        //'userActivityData' is the event name. Any client can emit to this event
        socket.on('userActivityData',(data)=>{
            console.log("Tick...");
            if(data) {
                console.log(data);
                if(data.tealium_event === 'form_submit'){
                    socket.emit('callMe', 'Can we call you back?')
                }
            }
        })
        
        socket.on('disconnect',(reason)=>{
            console.log(reason);
            socket.leave('dataEmitterClient');
        })
    });
}

module.exports = socketMain;