<?php
include('db.php');

$postData = json_decode(file_get_contents("php://input"), true);

if(empty($postData['username'])) {
	$errors['username'] = 'Name is required';
} else {
	$query = "SELECT id AS count FROM user WHERE username = '".$postData['username']."'";
	$res = $mysqli->query($query);

	if($res->num_rows) {
		$errors['username'] = 'Username exists';
	}
}

if(empty($postData['password'])) {
	$errors['password'] = 'Password is required';
}elseif(empty($postData['confirmPassword'])) {
	$errors['confirmPassword'] = 'Confirm Password is required';
}elseif($postData['password'] !== $postData['confirmPassword']) {
	$errors['confirmPassword'] = 'Passwords does not match';
}

if ( ! empty($errors)) {
	// if there are items in our errors array, return those errors
	$data['status'] = false;
	$data['errors']  = $errors;
} else {
	// if there are no errors, return a message
	$token = md5(time());

	$i_query = "INSERT INTO user(username, password, access_token) VALUES('".$postData['username']."', '".$postData['password']."', '".$token."')";
	$mysqli->query($i_query);

	$data['status'] = true;
	$data['message'] = 'Success!';
	$data['user'] = [
		'username' => $postData['username'],
		'token' => $token,
	];
	$data['sql-error'] = $mysqli->error;
}

echo json_encode($data);