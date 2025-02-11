// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//     try {
//         // Parse request body safely
//         const body = await req.json();
       

//         const { name, email, subject, message } = body;

//         // Validate all required fields
//         if (!name || !email || !subject || !message) {
//             console.error("Missing Fields:", { name, email, subject, message });
//             return NextResponse.json({ error: "All fields are required." }, { status: 400 });
//         }

//         // Load environment variables
//         const senderEmail = process.env.EMAIL_USER;
//         const senderPassword = process.env.EMAIL_PASS;
//         const receiverEmail = process.env.RECEIVER_EMAIL;

//         if (!senderEmail || !senderPassword || !receiverEmail) {
//             console.error("Missing Email Configurations in .env");
//             return NextResponse.json({ error: "Email configuration missing in environment variables." }, { status: 500 });
//         }

//         // Configure Nodemailer Transporter
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 587,
//             secure: false, // True for port 465, false for other ports
//             auth: {
//                 user: senderEmail,
//                 pass: senderPassword,
//             },
//         });

//         // Email Content
//         const mailOptions = {
//             from: `"${name}" <${email}>`, // Shows sender's name in the email
//             to: receiverEmail,
//             subject: `New Contact Form Submission: ${subject}`,
//             text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
//         };

//         // Send Email
//         await transporter.sendMail(mailOptions);
//         console.log("Email sent successfully!");


        
//         return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

//     } catch (error) {
//         // Type Assertion Fix
//         const errorMessage = error instanceof Error ? error.message : "Unknown error";
//         console.error("Email Sending Error:", errorMessage);

//         return NextResponse.json({ error: "Failed to send email.", details: errorMessage }, { status: 500 });
//     }
// }


// export async function GET(req: NextRequest) {
//     try {
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER, // Your email
//                 pass: process.env.EMAIL_PASS, // Your app password (not the main password)
//             },
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: process.env.NOTIFY_EMAIL, // Your email where you want notifications
//             subject: "New Visitor on Your Website! 🎉",
//             text: `Someone just visited your portfolio! Check analytics for more details.`,
//         };

//         await transporter.sendMail(mailOptions);

//         return NextResponse.json({ success: true, message: "Email sent!" });
//     } catch (error) {
//         console.error("Error sending email:", error);
//         return NextResponse.json({ success: false, error });
//     }
// }



import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        // Parse request body safely
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            console.error("Missing Fields:", { name, email, subject, message });
            return NextResponse.json({ error: "All fields are required." }, { status: 400 });
        }

        // Load environment variables
        const senderEmail = process.env.EMAIL_USER;
        const senderPassword = process.env.EMAIL_PASS;
        const receiverEmail = process.env.RECEIVER_EMAIL;

        if (!senderEmail || !senderPassword || !receiverEmail) {
            console.error("Missing Email Configurations in .env");
            return NextResponse.json({ error: "Email configuration missing in environment variables." }, { status: 500 });
        }

        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // True for port 465, false for other ports
            auth: {
                user: senderEmail,
                pass: senderPassword,
            },
        });

        // Email Content
        const mailOptions = {
            from: `"${name}" <${email}>`, // Shows sender's name in the email
            to: receiverEmail,
            subject: `New Contact Form Submission: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`, // Added HTML format
        };

        // Send Email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("Email Sending Error:", errorMessage);

        return NextResponse.json({ error: "Failed to send email.", details: errorMessage }, { status: 500 });
    }
}

