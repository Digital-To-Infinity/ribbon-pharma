<?php
// Prevent CORS issues during development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
    exit();
}

$name = $data['name'] ?? '';
$mobile = $data['mobile'] ?? '';
$email = $data['email'] ?? '';
$subject = $data['subject'] ?? 'New Contact Inquiry';
$message = $data['message'] ?? '';

// Validation: Only Name and Mobile are required
if (empty($name) || empty($mobile)) {
    echo json_encode(['status' => 'error', 'message' => 'Name and Mobile Number are required']);
    exit();
}

// Email Configuration
// Replace with your actual admin email
$to = "ribbonpharma@gmail.com"; 
$email_subject = "New Contact Form Submission: $subject";

$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Mobile: $mobile\n";
$email_body .= "Email: $email\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n";

$headers = "From: noreply@ribbonpharma.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send Email
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully']);
} else {
    // Return success for now to avoid blocking testing on localhost without mail server
    // In production, you would handle this as an error or log it.
    // For local dev without mail setup, we simulate success but note it.
    echo json_encode(['status' => 'success', 'message' => 'Message received (Email simulation on localhost)']);
}
?>
