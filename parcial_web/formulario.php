<?php
header('Content-Type: application/json');

// Simulación de procesamiento del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $asunto = isset($_POST['asunto']) ? trim($_POST['asunto']) : '';
    $mensaje = isset($_POST['mensaje']) ? trim($_POST['mensaje']) : '';

    // Validación simple
    $errors = [];
    
    if (empty($nombre)) {
        $errors['nombre'] = 'El nombre es requerido';
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Ingresa un email válido';
    }
    
    if (empty($asunto)) {
        $errors['asunto'] = 'El asunto es requerido';
    }
    
    if (empty($mensaje)) {
        $errors['mensaje'] = 'El mensaje es requerido';
    }

    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'errors' => $errors
        ]);
        exit;
    }

    // Simulación de guardado en base de datos o envío por email
    sleep(1); // Simular tiempo de procesamiento
    
    // Respuesta exitosa
    echo json_encode([
        'success' => true,
        'message' => "Gracias $nombre por contactarte. Hemos recibido tu mensaje sobre '$asunto' y te responderemos pronto a $email."
    ]);
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido'
    ]);
}
?>
