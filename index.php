<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./script.js" defer type="module"></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <nav>
        <?php for($i=1 ; $i<=4 ; $i++) : ?>
            <a href="#section<?= $i?>" class="active"> section <?= $i?></a>
        <?php endfor ?>
        <a href="contact.html">contact</a>
    </nav>

    <main>
        <?php for($i=1 ; $i<=4 ; $i++) : ?>
            <section id="section<?= $i ?>" data-spy> 
                section <?= $i ?>
            </section>
        <?php endfor ?>
    </main>
    
</body>
</html>