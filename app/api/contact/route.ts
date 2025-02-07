import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        // Parse request body safely
        const body = await req.json();
       

        const { name, email, subject, message } = body;

        // Validate all required fields
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
        };

        // Send Email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        // Type Assertion Fix
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("Email Sending Error:", errorMessage);

        return NextResponse.json({ error: "Failed to send email.", details: errorMessage }, { status: 500 });
    }
}
