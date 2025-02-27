import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function getGeoLocation(ip: string) {
    try {
        const token = process.env.IPINFO_TOKEN;
        if (!token) throw new Error("Missing IPINFO_TOKEN in environment variables");

        const res = await fetch(`https://ipinfo.io/${ip}?token=${token}`);
        if (!res.ok) throw new Error(`IPInfo API error: ${res.status} ${res.statusText}`);

        const data = await res.json();
        console.log("IPInfo Data:", data);

        if (!data.city || !data.region || !data.country) {
            console.warn("IPInfo returned incomplete data. Falling back to ip-api.com...");
            return getFallbackGeoLocation(ip);
        }

        return {
            ip: data.ip || "Unknown",
            city: data.city || "Unknown",
            region: data.region || "Unknown",
            country: data.country || "Unknown",
            isp: data.org || "Unknown",
        };
    } catch (error) {
        console.error("IPInfo API Error:", error);
        return getFallbackGeoLocation(ip);
    }
}

async function getFallbackGeoLocation(ip: string) {
    try {
        const res = await fetch(`http://ip-api.com/json/${ip}`);
        if (!res.ok) throw new Error(`IP-API error: ${res.status} ${res.statusText}`);

        const data = await res.json();
        console.log("IP-API Data:", data);

        return {
            ip: data.query || "Unknown",
            city: data.city || "Unknown",
            region: data.regionName || "Unknown",
            country: data.country || "Unknown",
            isp: data.isp || "Unknown",
        };
    } catch (error) {
        console.error("Fallback Geolocation API Error:", error);
        return {
            ip: "Unknown",
            city: "Unknown",
            region: "Unknown",
            country: "Unknown",
            isp: "Unknown",
        };
    }
}

export async function GET(req: NextRequest) {
    try {
        let ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.ip || "Unknown";
        console.log("Detected IP:", ip);

        // Ignore localhost & private network IPs
        if (["127.0.0.1", "::1"].includes(ip) || ip.startsWith("192.168.") || ip.startsWith("10.")) {
            console.warn("Localhost or private network detected. Skipping location lookup.");
            return NextResponse.json({ success: true, message: "Localhost request ignored." });
        }

        const locationData = await getGeoLocation(ip);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: "PortFolio Visit, Boss..!",
            html: `
                <h2>Visitor Alert!</h2>
                <p>Someone just visited your portfolio!</p>
                <h3>🌍 Visitor Details:</h3>
                <ul>
                    <li><strong>IP Address:</strong> ${locationData.ip}</li>
                    <li><strong>City:</strong> ${locationData.city}</li>
                    <li><strong>Region:</strong> ${locationData.region}</li>
                    <li><strong>Country:</strong> ${locationData.country}</li>
                    <li><strong>ISP:</strong> ${locationData.isp}</li>
                </ul>
                <p>Check your analytics for more insights!</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Visitor notification sent with location data!");

        return NextResponse.json({ success: true, message: "Email sent!", locationData });
    } catch (error) {
        console.error("Error sending visitor alert email:", error);
        return NextResponse.json({ success: false, error });
    }
}
