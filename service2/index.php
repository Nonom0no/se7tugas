<?php
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

$reviews = [
    ["id" => 1, "game" => "Valorant", "rating" => 5],
    ["id" => 2, "game" => "Minecraft", "rating" => 4]
];

// GET
if ($method == 'GET') {
    echo json_encode($reviews);
}

// POST
if ($method == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $data["id"] = count($reviews) + 1;

    echo json_encode([
        "message" => "Review ditambahkan",
        "data" => $data
    ]);
}

// DELETE
if ($method == 'DELETE') {
    echo json_encode([
        "message" => "Review dihapus"
    ]);
}