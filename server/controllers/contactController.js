const Contact = require("../models/Contact");
const transporter = require("../config/email");

exports.sendContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

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
      `
    });

    res.json({ success: true, contact });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};