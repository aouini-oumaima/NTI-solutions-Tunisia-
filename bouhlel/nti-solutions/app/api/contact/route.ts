import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, email, telephone, societe, sujet, message, rgpd } = body;

    // Basic validation
    if (!nom || !email || !message || !rgpd) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    // Phone validation (optional, Tunisian format)
    if (telephone) {
      const phoneRegex = /^(\+216)?[0-9]{8}$/;
      const cleaned = telephone.replace(/\s/g, "");
      if (!phoneRegex.test(cleaned)) {
        return NextResponse.json({ error: "Numéro de téléphone invalide." }, { status: 400 });
      }
    }

    // Log for now — replace with Nodemailer/Resend in production
    console.log("Contact form submission:", {
      nom, email, telephone, societe, sujet, message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate Nodemailer or Resend:
    // await transporter.sendMail({
    //   from: `"${nom}" <${email}>`,
    //   to: "contact@ntisolutions.com.tn",
    //   subject: `[NTI Site] ${sujet} — ${nom}`,
    //   text: message,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
