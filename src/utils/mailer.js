import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';

export const sendEmail = async ({email, emailType, userId}) => {
  try {
   //TODO: - configure mail for usage
   // - have proper error handling with status codes

   const hashedToken = await bcrypt.hash(userId.toString(), 10)

   if(emailType === 'VERIFY'){
    await User.findByIdAndUpdate(userId, {
      verifyToken: hashedToken,
      verifyTokenExpiry: Date.now() + 3600000
    })
   }else if(emailType == 'RESET'){
    await User.findByIdAndUpdate(userId, {
      forgotPasswordToken: hashedToken,
      forgotPasswordTokenExpiry: Date.now() + 3600000
    })
   }

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "5c178ccdcd451a",
          pass: "be61eaae2c9a89",
        },
      });

      const mailOptions = {
        from: 'richab246@gmail.com',
        to: email, 
        subject: emailType === 'VERIFY'? 'Verify your email' : 'Reset your password',
        text: "Hello world?", 
        html: `<p>Click <a href='${process.env.DOMAIN}/verifyemail?token=${hashedToken}'>here</a> to ${emailType === "VERIFY"? 'verify your email' : 'reset your password'}
         or copy and paste the link below in your browser. 
         <br />
         ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
         </p>`, // html body
      };

      const mailResponse = await transporter.sendMail(mailOptions)
      return mailResponse;
  } catch(error) {
     throw new Error(error.message)
  }
}