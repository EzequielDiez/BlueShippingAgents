<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON data from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
$required_fields = ['nombre', 'email', 'telefono', 'mensaje', 'to'];
foreach ($required_fields as $field) {
    if (!isset($data[$field]) || empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Missing required field: ' . $field]);
        exit;
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit;
}

// Prepare email content
$to = $data['to'];
$subject = 'Nuevo mensaje de contacto - Blue Shipping Agents';
$message = "Nombre: {$data['nombre']}\n";
$message .= "Email: {$data['email']}\n";
$message .= "Teléfono: {$data['telefono']}\n\n";
$message .= "Mensaje:\n{$data['mensaje']}";

$headers = [
    'From' => $data['email'],
    'Reply-To' => $data['email'],
    'X-Mailer' => 'PHP/' . phpversion()
];

// Send email
$mail_sent = mail($to, $subject, $message, $headers);

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
} 