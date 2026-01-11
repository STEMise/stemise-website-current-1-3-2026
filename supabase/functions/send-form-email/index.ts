import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TARGET_EMAIL = "officialstemise@gmail.com";

interface FormSubmission {
  id: string;
  form_type: string;
  email: string;
  name?: string;
  organization_name?: string;
  contact_person?: string;
  interest_area?: string;
  message?: string;
  created_at: string;
}

serve(async (req) => {
  try {
    const { record } = await req.json() as { record: FormSubmission };

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const subjectMap: Record<string, string> = {
      waitlist: "🎉 New Waitlist Signup - STEMise",
      partnership: "🤝 New Partnership Inquiry - STEMise",
      contact: "📧 New Contact Message - STEMise",
      kit_request: "📦 New STEM Kit Request - STEMise",
    };

    const subject = subjectMap[record.form_type] || "New Form Submission - STEMise";

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">${subject}</h2>
        <hr style="border: 1px solid #e5e7eb;" />
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Form Type:</td>
            <td style="padding: 8px 0;">${record.form_type}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${record.email}">${record.email}</a></td>
          </tr>
          ${record.name ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td><td style="padding: 8px 0;">${record.name}</td></tr>` : ""}
          ${record.organization_name ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Organization:</td><td style="padding: 8px 0;">${record.organization_name}</td></tr>` : ""}
          ${record.contact_person ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Contact Person:</td><td style="padding: 8px 0;">${record.contact_person}</td></tr>` : ""}
          ${record.interest_area ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Interest Area:</td><td style="padding: 8px 0;">${record.interest_area}</td></tr>` : ""}
        </table>
        
        ${record.message ? `
          <div style="margin-top: 16px;">
            <strong style="color: #374151;">Message:</strong>
            <div style="margin-top: 8px; padding: 12px; background-color: #f3f4f6; border-radius: 8px; white-space: pre-wrap;">${record.message}</div>
          </div>
        ` : ""}
        
        <hr style="border: 1px solid #e5e7eb; margin-top: 24px;" />
        <p style="color: #6b7280; font-size: 12px;">
          Submitted at: ${new Date(record.created_at).toLocaleString()}
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "STEMise Forms <onboarding@resend.dev>",
        to: TARGET_EMAIL,
        subject,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", data);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: data }),
        { status: res.status, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Email sent successfully:", data);
    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
