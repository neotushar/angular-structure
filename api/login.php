<?php
// process.php
include('db.php');

$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

$postData = json_decode(file_get_contents("php://input"), true);

if(empty($postData['username'])) {
	$errors['username'] = 'Name is required';
}

if(empty($postData['password'])) {
	$errors['password'] = 'Password is required';
}

if ( ! empty($errors)) {
  // if there are items in our errors array, return those errors
	$data['status'] = false;
	$data['errors']  = $errors;
} else {
  // if there are no errors, return a message
	$query = "SELECT id AS count FROM user WHERE username = '".$postData['username']."' AND password = '".$postData['password']."'";
	$res = $mysqli->query($query);

	if($res->num_rows) {
		$token = md5(time());

		$u_query = "UPDATE user SET access_token = '".$token."' WHERE username='".$postData['username']."'";
		$mysqli->query($u_query);

		$data['status'] = true;
		$data['message'] = 'Success!';
		$data['user'] = [
			'username' => $postData['username'],
			'token' => $token,
		];
	}
}

echo json_encode($data);