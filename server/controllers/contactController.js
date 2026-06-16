const Contact = require("../models/Contact");
const transporter = require("../config/email");

exports.sendContact = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const contact =
      await Contact.create(req.body);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact - Ads Sathi",
      text: `
Name: ${contact.name}
Email: ${contact.email}
Phone: ${contact.phone}
WhatsApp: ${contact.whatsapp}
Message: ${contact.message}
`,
    });

    return res.status(200).json({
      success: true,
    });

  } catch (err) {
    console.error("ERROR:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};