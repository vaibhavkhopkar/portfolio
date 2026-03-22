import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// NOTE: You will need to add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');

// In-memory rate limiting map
const rateLimit = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'anonymous_ip';
    const now = Date.now();
    
    // Rate limit: 1 request per 60 seconds per IP
    if (rateLimit.has(ip) && now - rateLimit.get(ip)! < 60000) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }
    
    rateLimit.set(ip, now);

    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Attempt to send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['vaibhav.khopkar@gmail.com'],
      subject: `New Consulting Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return NextResponse.json({ error: 'Failed to send automated message.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Contact form unexpected error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
