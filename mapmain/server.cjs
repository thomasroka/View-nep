const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nodemailer setup with more robust configuration
const transporter = nodemailer.createTransport({
    host: 'mail.spacemail.com',  // Correct SMTP server address
    port: 465,                   // Correct port for SMTP with SSL
    secure: true,                // SSL/TLS is enabled (use `true` for port 465)
    auth: {
        user: 'contact@maptech.agency',  // Your email address
        pass: 'C0caB76f-2d43-45E5-9CdD-0c4520dD1FAd',  // Your email password or app password
    },
    // Increased timeout values for reliability
    connectionTimeout: 300000,  // Connection timeout (in ms)
    socketTimeout: 300000,      // Socket timeout (in ms)

    // Additional network configuration (optional)
    tls: {
        rejectUnauthorized: false,  // If you're certain about the server's security
    }
});


// Validation function
const validateContactForm = (body) => {
    const errors = [];

    if (!body.fullName || body.fullName.trim().length < 2) {
        errors.push('Invalid or missing full name');
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
        errors.push('Invalid email address');
    }

    if (!body.message || body.message.trim().length < 5) {
        errors.push('Message is too short');
    }

    return errors;
};

// POST route for contact form
app.post('/api/contact', (req, res) => {
    // Log incoming request body for debugging
    console.log('Received request body:', req.body);

    // Validate input
    const validationErrors = validateContactForm(req.body);
    if (validationErrors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: validationErrors
        });
    }

    const { fullName, email, phone, message } = req.body;

    const mailOptions = {
        from: 'contact@maptech.agency',
        replyTo: email,
        to: 'info@maptech.agency',
        subject: 'New Contact Form Submission',
        text: `
Contact Form Details:
Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
        `,
        html: `
<html>
<body>
    <h2>Contact Form Submission</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <h3>Message:</h3>
    <p>${message}</p>
</body>
</html>
        `
    };

    // Verify transporter connection before sending
    transporter.verify((error, success) => {
        if (error) {
            console.error('SMTP Connection Verification Failed:', error);
            return res.status(500).json({
                success: false,
                message: 'SMTP Server Connection Failed',
                error: error.toString()
            });
        }

        // Send email with improved error handling
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email Send Error:', error);
                return res.status(500).json({
                    success: false,
                    message: 'Failed to send email',
                    error: error.toString(),
                    errorDetails: {
                        name: error.name,
                        code: error.code,
                        response: error.response
                    }
                });
            }

            console.log('Email sent successfully:', info.response);
            res.status(200).json({
                success: true,
                message: 'Message sent successfully!',
                messageId: info.messageId
            });
        });
    });
});
app.post('/api/appointment', async (req, res) => {
    console.log('Received appointment request:', req.body);

    const { fullName, email, phone, date, time, message } = req.body;

    // Basic validation
    if (!fullName || !email || !date || !time) {
        return res.status(400).json({
            success: false,
            message: 'Full Name, Email, Date, and Time are required.'
        });
    }

    const mailOptions = {
        from: 'contact@maptech.agency',
        replyTo: email,
        to: 'info@maptech.agency',
        subject: 'New Appointment Request',
        text: `
Appointment Details:
Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Date: ${date}
Time: ${time}

Message:
${message || 'No additional message'}
        `,
        html: `
<html>
<body>
    <h2>New Appointment Request</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <h3>Message:</h3>
    <p>${message || 'No additional message'}</p>
</body>
</html>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Appointment email sent:', info.response);
        res.status(200).json({
            success: true,
            message: 'Appointment request sent successfully!',
            messageId: info.messageId
        });
    } catch (error) {
        console.error('Appointment Email Error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send appointment request',
            error: error.toString()
        });
    }
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.toString()
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    process.exit(0);
});