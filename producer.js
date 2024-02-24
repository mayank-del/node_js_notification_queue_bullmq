const {Queue} =require("bullmq")

const notification=new Queue("mailing-q");

async function init(){
    const res=await notification.add("mail_for_mayank",{
        email:"mike.dev@gmail.com",
        subject:"Only You Can!",
        body:"You are owsm!"
    })
    console.log("Message added to queue:",res.id);
}
init();