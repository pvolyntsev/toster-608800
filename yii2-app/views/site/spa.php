<?php

/* @var $this yii\web\View */

$this->title = 'Vue Spa';
$this->params['breadcrumbs'][] = $this->title;

if (true /* YII_ENV === 'dev'*/) {
    $script = 'http://localhost:8081/app/app.js';
    $this->registerJsFile($script);
} else {

}
?>
