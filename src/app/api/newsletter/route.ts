import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = MAILCHIMP_API_KEY?.split('-')[1];

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !DATACENTER) {
    return NextResponse.json({ error: 'MailChimp environment variables not set' }, { status: 500 });
  }

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `apikey ${MAILCHIMP_API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200 || response.status === 201) {
    return NextResponse.json({ message: 'Successfully subscribed!' });
  } else {
    const error = await response.json();
    return NextResponse.json({ error: error.detail || 'Subscription failed' }, { status: 400 });
  }
}
